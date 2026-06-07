import 'reflect-metadata';
import { Configuration, App, Inject } from '@midwayjs/core';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as jwt from '@midwayjs/jwt';
import * as info from '@midwayjs/info';
import * as typeorm from '@midwayjs/typeorm';
import { join } from 'path';
import { DefaultErrorFilter } from '~filter/default.filter';
import { NotFoundFilter } from '~filter/notfound.filter';
import { ValidateErrorFilter } from '~filter/validate';
import { ReportMiddleware } from '~middleware/report';
import { AuthMiddleware } from '~middleware/jwt';
import { TypeORMDataSourceManager } from '@midwayjs/typeorm';

@Configuration({
  imports: [
    koa,
    validate,
    jwt,
    typeorm,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [join(__dirname, './config')],
})
export class MainConfiguration {
  @App('koa')
  app: koa.Application;

  @Inject()
  dataSourceManager: TypeORMDataSourceManager;

  async onReady() {
    // add middleware
    this.app.useMiddleware([ReportMiddleware, AuthMiddleware]);
    // add filter
    this.app.useFilter([
      NotFoundFilter,
      DefaultErrorFilter,
      ValidateErrorFilter,
    ]);

    try {
      const ds = this.dataSourceManager.getDataSource('default');
      console.log('✅ 数据库连接成功');
      console.log(
        '实体列表:',
        ds.entityMetadatas.map(e => e.name)
      );
    } catch (err) {
      console.error('❌ 数据库错误:', err.message);
    }
  }
}
