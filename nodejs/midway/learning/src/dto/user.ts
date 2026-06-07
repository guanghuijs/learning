import { Rule, RuleType } from '@midwayjs/validate';

export class RegisterDTO {
  @Rule(RuleType.string().min(1).max(20).required())
  username: string;

  @Rule(
    RuleType.string().email().required().messages({
      'string.base': '邮箱必须是字符串',
      'string.empty': '邮箱不能为空',
      'string.email': '邮箱格式不正确',
      'any.required': '邮箱必传',
    })
  )
  email: string;

  @Rule(
    RuleType.string().min(6).max(30).required().messages({
      'string.base': '密码必须是字符串',
      'string.empty': '密码不能为空',
      'string.min': '密码最少 {#limit} 位',
      'string.max': '密码最多 {#limit} 位',
      'any.required': '密码必传',
    })
  )
  password: string;

  @Rule(
    RuleType.string().min(2).max(50).optional().messages({
      'string.min': '昵称最少 {#limit} 个字符',
      'string.max': '昵称最多 {#limit} 个字符',
    })
  )
  nickname?: string;
}

// 登录请求
export class LoginDTO {
  @Rule(RuleType.string().required())
  username: string; // 支持用户名或邮箱登录

  @Rule(RuleType.string().min(6).required())
  password: string;
}
