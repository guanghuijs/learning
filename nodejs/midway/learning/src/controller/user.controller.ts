import {
  Controller,
  Get,
  Post,
  Put,
  Del,
  Query,
  Inject,
  Body,
} from '@midwayjs/core';
import { UserService } from '@/service/user.service';
import { UserDTO } from '@/dto/user.dto';

@Controller('/user')
export class UserController {
  @Inject()
  userService: UserService;

  @Get('/list')
  async list(): Promise<any> {
    return this.userService.getUserList();
  }

  @Post('/')
  async add(@Body() body: UserDTO): Promise<any> {
    console.log(body);
    return this.userService.addUser(body);
  }

  @Del('/')
  async delete(@Query('cityId') cityId: string): Promise<any> {
    return '用户列表';
  }

  @Put('/')
  async update(@Query('cityId') cityId: string): Promise<any> {
    return '用户列表';
  }

  @Get('/findOne/:id')
  async findOne(@Query('cityId') cityId: string): Promise<any> {
    return '用户列表';
  }
}
