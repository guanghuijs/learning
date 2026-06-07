import { writeFile } from 'node:fs';
import { existsSync, readFile } from 'fs';
import { Provide, Scope, ScopeEnum } from '@midwayjs/core';

export interface ITodo {
  id: number;
  text: string;
}

@Scope(ScopeEnum.Singleton)
@Provide('TodolistService')
export class TodoListService {
  private todoList: ITodo[] = [];

  async list() {
    if (existsSync('./todo.cache')) {
      const buffer = await new Promise((resolve, reject) =>
        readFile('./todo.cache', (err, data) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(data);
        })
      );
      this.todoList = JSON.parse(buffer.toString());
    }
    return this.todoList;
  }

  async add(text: string) {
    const list = await this.list();
    list.push({
      id: await this.incrId(),
      text,
    });
    await this.flushCache(list);
  }

  async edit(todo: any) {
    console.log(todo);
    const list = await this.list();
    const i = list.findIndex(item => item.id === todo.id);
    list[i] = todo;
    await this.flushCache(list);
  }

  async delete(id: number) {
    const list = await this.list();
    console.log(list);
    const i = list.findIndex(item => item.id === id);
    console.log(i);
    list.splice(i, 1);
    await this.flushCache(list);
  }

  async incrId() {
    const list = await this.list();
    return list.length;
  }

  private flushCache(list: ITodo[]) {
    return new Promise((resolve, reject) =>
      writeFile('./todo.cache', JSON.stringify(list), err => {
        if (err) {
          return reject(err);
        }
        resolve(null);
      })
    );
  }
}
