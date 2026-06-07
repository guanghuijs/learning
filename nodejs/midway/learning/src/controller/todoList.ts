/**
 *  todoList
 */
import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Put,
  Del,
  Param,
} from '@midwayjs/core';
import { Context } from '@midwayjs/koa';

import { TodoListService } from '~service/todoList';

// 控制器
@Controller('/todo')
export class TodoListController {
  @Inject()
  ctx: Context;

  @Inject('TodolistService')
  todo: TodoListService;

  @Get('/list')
  async list(): Promise<any[]> {
    return this.todo.list();
  }

  @Post('')
  async add(@Body('todo') text: string): Promise<string> {
    await this.todo.add(text);
    return '添加代办成功';
  }

  @Put('')
  async edit(@Body() todo: any): Promise<string> {
    await this.todo.edit(todo);
    return '修改成功';
  }

  @Del('/:id')
  async delete(@Param('id') id: string): Promise<string> {
    await this.todo.delete(Number(id));
    return '删除成功';
  }
}
