import { Controller, Inject, Get, Headers } from '@midwayjs/core';
import { UserService } from '~/service/user';

@Controller('/user')
export class AuthController {
  @Inject()
  userService: UserService;

  // 注册
  @Get('/list')
  async list() {
    const data = await this.userService.list();
    return {
      code: 200,
      message: '查询成功',
      data,
    };
  }

  @Get('/userInfo')
  async userInfo(@Headers('authorization') token: string) {
    try {
      const data = await this.userService.getUserInfo(token);
      return {
        code: 200,
        message: '查询成功',
        data,
      };
    } catch (error) {}
  }
}
