import 'reflect-metadata';
import { Provide, Inject } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@midwayjs/jwt';
import { Repository } from 'typeorm';
import { User } from '~/entity/user';
import { LoginDTO } from '~/dto/user';

@Provide()
export class AuthService {
  @InjectEntityModel(User)
  userModel: Repository<User>;

  @Inject()
  jwtService: JwtService;

  async login(loginDto: LoginDTO) {
    const user = await this.userModel.findOne({
      where: [{ username: loginDto.username }],
    });
    if (!user) throw new Error('用户不存在');
    const isValid = await bcrypt.compare(loginDto.password, user.password);
    if (!isValid) throw new Error('密码错误');
    const token = await this.jwtService.sign({
      username: user.username,
      suerId: user.id,
    });
    return {
      token,
      user,
    };
  }
}
