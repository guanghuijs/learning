main() {
  int cont = 6;
  // cont = 6.3;

  double core = 90;
  print(core); // 90.0

  num age = 18;
  num sum = 20.9;

  print(core.toString()); // '90.0'
  print(age.toDouble()); // 18.0
  print(sum.toInt()); // 20 向下取整

  print(3.1415926.round()); //3 四舍五入
  print(3.6.round()); //4 四舍五入
  print(3.1415926.toStringAsFixed(5)); // 3.14159 四舍五入指定小数位数

  print(10.remainder(4)); // 2 取余

  // 比较: a.compareTo(b); a = b 返回：0; a > b 返回: 1; a < b 返回: -1;
  print(10.compareTo(10)); // 0
  print(10.compareTo(8)); // 1
  print(10.compareTo(20)); // -1

  // 最大公约数
  print(10.gcd(16)); // 2
  print(12.gcd(16)); // 4

  // 科学计数法
  print(1000.toStringAsExponential(2)); // 1.00e+3
  print(1000.toStringAsExponential(1)); // 1.0e+3
}