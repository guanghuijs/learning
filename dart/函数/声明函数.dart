// 直接声明
// ·Dart 中声明函数不需要 function 关键字
void f1() {
  print('函数');
}

// 指定返回值
int getNum() {
  return 1;
}

// 匿名函数
var f2 = () {
  print('匿名函数');
};

void main(List<String> args) {
  // 箭头函数
  // ·Dart 中的箭头函数中，函数体只能写一行且不能带有结束的分号
  // ·Dart 中的箭头函数，只是函数的一种简写形式
  ['苹果', '香蕉', '菠萝'].forEach((element) => print(element));

// 立即执行函数
  (() {
    print('立即执行函数');
  })();
}
