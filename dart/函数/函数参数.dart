// 必填参数
//            参数类型,参数名称
String saName(String name) {
  return '我叫$name';
}

// 可选参数
//  放在必选参数后面
//  通过中括号包裹起来
//  带默认值的可选参数
String getOld([int age = 0]) {
  return '我$age岁';
}

// 命名参数
// 用大括号包裹起来
// 调用函数时，命名参数的名称与声明函数中的名称保持一致
userInfo({required String name, int age = 0}) {
  print('我是$name,我$age岁');
}

void main(List<String> args) {
  saName('张三');
  userInfo(name: '张三', age: 18);

  // 函数参数
  [].forEach((element) {});
}
