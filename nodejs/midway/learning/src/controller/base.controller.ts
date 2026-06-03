/**
 *  基础
 */
import {
  Controller,
  Get,
  Query,
  Inject,
  Post,
  Body,
  Param,
  Headers,
} from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { User } from '~interface';
import { ReportMiddleware } from '~middleware/report.middleware';

// 控制器
@Controller('/')
export class BaseController {
  @Inject()
  ctx: Context;

  @Get('/')
  async home(): Promise<string> {
    return '学习midway!';
  }

  // 路由
  // 路由方法 @Get @Post @Put ...
  @Get('/router')
  @Get('/router-two') // 你可以将多个路由绑定到同一个方法上
  async router(): Promise<string> {
    return '路由!';
  }

  @Get('/user')
  async getUser(
    @Query() query: User,
    @Query('name') name: string
  ): Promise<User> {
    console.log(query, name);
    return query;
  }

  @Post('/user')
  async postUser(
    @Body() data: User,
    @Body('name') name: string
  ): Promise<User> {
    console.log(data, name);
    return data;
  }

  @Get('/user/:id')
  async getUserById(@Param('id') id: string): Promise<string> {
    return `你是第${id}个用户`;
  }

  @Get('/headers')
  async getHeaders(@Headers() headers: ParameterDecorator): Promise<string> {
    console.log(headers);
    return '获取headers';
  }

  @Get('/cookie')
  async cookie(@Query('name') name: string): Promise<string> {
    this.ctx.cookies.set('name', name);
    return '设置了cookie';
  }

  @Get('/text-middleware', { middleware: [ReportMiddleware] })
  async middlewareTest(): Promise<any> {
    return '21321';
  }
}
