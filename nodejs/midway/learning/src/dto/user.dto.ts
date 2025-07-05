import { Rule, RuleType } from '@midwayjs/validate';

export class UserDTO {
  // 用户名
  @Rule(RuleType.string().required().min(2).max(12))
  username: string;

  // 密码
  @Rule(RuleType.string().required())
  password: string;
}
