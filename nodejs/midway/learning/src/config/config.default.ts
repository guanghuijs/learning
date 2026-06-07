import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1751530506216_3600',
  koa: {
    port: 7001,
  },
  typeorm: {
    dataSource: {
      default: {
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'w1234567',
        database: 'midway_js',
        // 实体配置（推荐方式）
        entities: ['entity/*.{j,t}s'],
        // 同步数据库结构（开发环境可用，生产环境务必关闭）
        synchronize: true,
        // 显示 SQL 日志
        logging: true,
        // 连接池配置
        poolSize: 10,
      },
    },
  },
  jwt: {
    secret: 'dev-secret-do-not-use-in-production', // 生产环境建议使用环境变量
    expiresIn: '2h',
  },
} as MidwayConfig;
