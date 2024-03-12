
main (){
  List list1 = [];
  List list2 = <int>[];


  List list3 = new List.empty(growable: true); // 不限制长度的空列表
  List list4 = new List.filled(3, 0);

  print(list1); // []
  print(list2); // []
  print(list3); // []
  print(list4); // [0, 0, 0]

  // 扩展操作符
  var list = [1,2,3];
  List list11 = <int>[0, ...list];  // [0,1,2,3]
  print(list11);

  var list22;
  // 避免null扩展
  List list111 = <int>[0, ...?list22];

  var l = [1,2,55,03,54,2615,6,'fsf','fs','rwet',8,12,56,1,5];
  // 返回列表长度
  print(l.length);
  // 列表翻转
  print(l.reversed.toList());
  // 添加元素
  l.addAll([99,88,77]);
  print(l);
  // 删除指定元素
  l.remove(88);
  print(l);
  // 删除指定下标元素
  l.removeAt(1);
  // 指定位置添加元素
  l.insert(5,999);
  // 指定位置添加多个元素
  l.insertAll(5,[1,2,3,4,56]);
  print(l);
  // 清空列表
  l.clear();
  // 列表判空
  print(l.isEmpty);

  List words = ['hello','world'];
  print(words.join('-')); // hello-world


  List test = <int>[1,2,3,4,6,7,8];

  for(int i = 0; i < test.length;i++) {
    // print(test[i]);
  }

  for(int item in test) {
    // print(item);
  }

  // forEach
  test.forEach((element) {
    print(element);
  });

  // map
  print(test.map((e) => e * e).toList());
  // [1, 4, 9, 16, 36, 49, 64] map完是可迭代对象,可以同toList方法转换成数组

  // where
  print(test.where((element) => element.remainder(2) == 0));
  // (2, 4, 6, 8) 过滤出偶数

  // any
  print(test.any((element) => element > 3)); // true
  // 判断是否有一个元素大于3,返回布尔值

  // every
  print(test.every((element) => element > 2)); // false
  // 判断是否所有元素大于3,返回布尔值
}