main (){

  var str1 = 'hello';
  var str2 = "world";
  String str3 = "dart";
  print(str1);
  print(str2);
  print(str3);

  // 三个引号可声明多行的字符串
  String str4 = """我系
  
  渣渣辉""";

  String str5 = '''你洗
  
  古天乐''';

  // 字符串拼接
  print(str1 + str5);
  // hello你洗
  //
  // 古天乐

  // 字符串分割
  print('abcdefg'.split('')); // [a, b, c, d, e, f, g]

  // 去除首位空格
  print('  123 '.trim()); // 123

  // 判空
  print(''.isEmpty); // true
  print(''.isNotEmpty); // false

  // 替换
  print('hello java'.replaceAll('java', 'dart')); // hello dart
  print('1s5f15t1rg1gh5r1g1r1h5rt1h5r'.replaceAll(RegExp(r'\d+'), '_')); // _s_f_t_rg_gh_r_g_r_h_rt_h_r

  // 判断是否是手机号
  print(RegExp(r'^1\d{10}$').hasMatch('13312580490')); // true

  // 查找字符串
  print('hello'.contains('e')); // true

  // 定位字符串
  print('hello'.indexOf('e')); // 1
  print('hello'.lastIndexOf('o')); // 3
}
