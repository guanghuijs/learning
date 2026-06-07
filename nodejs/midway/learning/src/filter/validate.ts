import { Catch } from '@midwayjs/core';
import { MidwayValidationError } from '@midwayjs/validate';
import { Context } from '@midwayjs/koa';

@Catch(MidwayValidationError)
export class ValidateErrorFilter {
  async catch(err: MidwayValidationError, ctx: Context) {
    // 提取中文提示：去掉 "ValidationError: " 前缀和引号
    let message = err.message
      .replace(/^ValidationError:\s*/, '')
      .replace(/"/g, '');

    ctx.status = 400;
    return {
      code: 400,
      message,
      data: null,
    };
  }
}
