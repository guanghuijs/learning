/**
 *  基础
 */
import { Controller, Get, Query } from '@midwayjs/core';
import { User } from '~interface';
import { ReportMiddleware } from '~middleware/report.middleware';

// 控制器
@Controller('/')
export class BaseController {
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

  @Get('/getUser')
  async getUser(@Query('id') id: string): Promise<User> {
    console.log(id);
    return { id: 123, name: '张三', age: 18 };
  }

  @Get('/getUser2')
  async getUserQData(@Query() queryData: User): Promise<User> {
    console.log(queryData);
    return { id: 123, name: '张三', age: 18 };
  }

  @Get('/text-middleware', { middleware: [ReportMiddleware] })
  async middlewareTest(): Promise<any> {
    return '21321';
  }
}
