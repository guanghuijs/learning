import 'reflect-metadata';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, unique: true, comment: '用户名' })
  username: string;

  @Column({ length: 100, unique: true, comment: '邮箱' })
  email: string;

  @Column({ length: 255, comment: '加密密码' })
  password: string;

  @Column({ length: 100, nullable: true, comment: '昵称' })
  nickname: string;

  @Column({ default: 1, comment: '状态: 0禁用 1启用' })
  status: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
