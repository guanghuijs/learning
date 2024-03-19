void main(List<String> args) {
  // 地板除
  print(7 ~/ 4);

  // 类型判断运算符
  dynamic list = [];
  if (list is List) {
    print('list 是 list');
  }
  list = 666;
  if (list is! List) {
    print('list 不是 列表');
  }

  // 避空运算符
  // print(1 ?? 3); // 1
  print(null ?? 16);

  var foo;
  print(foo ?? 999); // 999

  var a;
  // if (a == null) {
  //   a = 3;
  // }
  a ??= 3;
  print(a); // 3
  a ??= 6;
  print(a); // 3

  // 条件属性运算符(保护可能为空的属性)
  var m = new Map();
  print(m.length);
  var obj;
  // print(obj.length); // 编译错误
  print(obj?.length); // null

  // 级联运算符
  Set s = new Set();
  s.add(1);
  s.add(2);
  s.add(3);
  s.remove(2);
  print(s); // {1, 3}

  Set s1 = new Set();
  s1
    ..add(1)
    ..add(2)
    ..add(3)
    ..remove(2);
  print(s1); // {1, 3}
}
