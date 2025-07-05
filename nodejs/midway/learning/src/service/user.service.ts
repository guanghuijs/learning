import { Provide } from '@midwayjs/core';
import { existsSync, readFile } from 'fs';
import { UserDTO } from '@/dto/user.dto';

@Provide()
export class UserService {
  private todoList: UserDTO[] = [];

  /**
   * 获取用户列表
   */
  async getUserList() {
    if (existsSync('./user.cache')) {
      const buffer = await new Promise((resolve, reject) =>
        readFile('./user.cache', (err, data) => {
          if (err) {
            return reject(err);
          }
          resolve(data);
        })
      );
      this.todoList = JSON.parse(buffer.toString());
    } else {
      console.log('Getting user list');
    }
    return this.todoList;
  }

  /**
   * 添加用户
   * @param user
   */
  async addUser(user: UserDTO) {
    console.log(user);
  }

  // private flushCache(list: UserDTO[]) {
  //   return new Promise((resolve, reject) =>
  //     writeFile('./cache', JSON.stringify(list), err => {
  //       if (err) {
  //         return reject(err);
  //       }
  //       resolve(null);
  //     })
  //   );
  // }
}
