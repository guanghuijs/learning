import 'reflect-metadata';
import { Inject, Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { JwtService } from '@midwayjs/jwt';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { User } from '~/entity/user';
import { RegisterDTO } from '~/dto/user';

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<User>;

  @Inject()
  jwtService: JwtService;

  async list() {
    return await this.userModel.find({});
  }

  async add(registerDto: RegisterDTO) {
    const user = new User();
    user.username = registerDto.username;
    user.password = await bcrypt.hash(registerDto.password, 12);
    user.email = registerDto.email;
    user.nickname = registerDto.nickname;
    await this.userModel.save(user);
    return user;
  }

  async getUserInfo(token: string): Promise<User> {
    try {
      const { username } = (await this.jwtService.verify(
        token.split(' ')[1],
        'dev-secret-do-not-use-in-production'
      )) as any;
      const user = await this.userModel.findOne({
        where: [{ username }],
      });
      console.log(user);
      return user;
    } catch (error) {}
  }
}
