import { Catch, httpError, MidwayHttpError } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';

@Catch(httpError.NotFoundError)
export class NotFoundFilter {
  async catch(err: MidwayHttpError, ctx: Context) {
    console.log(ctx.URL.pathname);
    // 404 错误会到这里
    ctx.redirect('/404.html');
  }
}
