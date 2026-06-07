import { IMiddleware, Inject, Middleware } from '@midwayjs/core';
import { JwtService } from '@midwayjs/jwt';
import { Context, NextFunction } from '@midwayjs/koa';

@Middleware()
export class AuthMiddleware implements IMiddleware<Context, NextFunction> {
  @Inject()
  jwtService: JwtService;

  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      const whiteList = ['/auth/register', '/auth/login', '/user/list'];
      if (whiteList.includes(ctx.path)) {
        return await next();
      }

      const token = ctx.headers['authorization']?.split(' ')[1];
      try {
        await this.jwtService.verify(token);
        await next();
      } catch (e) {
        ctx.status = 401;
        ctx.body = { code: 401, message: '请登录' };
      }
    };
  }
}
