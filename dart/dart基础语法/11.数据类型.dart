class Person {
  String name;
  int age;
  Person(this.name,this.age);
}

main(){
  // 数字
  int a = 1;
  int a1 = 0xFF;
  print(a1); // 255
  // int b = 1.414;
  double b = 1.141;
  // 字符串
  String str1 = 'hello';
  String str2 = "dart";
  String str3 = str1 + str2;
  String str4 = '''哈哈哈,你好:
  我是 $str3
      '''; // 类似es6 模块字符串
  print(str4);
  // 布尔
  bool flag = true;
  // 列表
  List<int> arr = [1,2,3,4];
  const arr1 = [13,14]; // 子元素不能改变
  // 集合
  Set set1 = {1,2,3,4,5};
  Set<String> set2 = {'1','2'};
  set2.add('66');
  // 映射
  Map map = {
    'name': '张三',
    'age': 18,
  };

  final test = [...[1,2,4,4,5].map((e) => {
    'value': e
  })];


  print([1,2,3,4,5]);
  print(test);

  // 符文
  // 符号
}
