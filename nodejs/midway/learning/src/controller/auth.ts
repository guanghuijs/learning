import { Controller, Post, Body, Inject } from '@midwayjs/core';
import { UserService } from '~/service/user';
import { AuthService } from '~/service/auth';
import { LoginDTO, RegisterDTO } from '~/dto/user';

@Controller('/auth')
export class AuthController {
  @Inject()
  userService: UserService;

  @Inject()
  authService: AuthService;

  // 注册
  @Post('/register')
  async register(@Body() dto: RegisterDTO) {
    try {
      const user = await this.userService.add(dto);
      return {
        code: 200,
        message: '注册成功',
        data: user,
      };
    } catch (error) {
      return {
        code: 400,
        message: error.message,
        data: null,
      };
    }
  }

  @Post('/login')
  async login(@Body() dto: LoginDTO) {
    try {
      const data = await this.authService.login(dto);
      return { code: 200, message: '登录成功', data };
    } catch (error) {
      return { code: 400, message: error.message };
    }
  }
}
