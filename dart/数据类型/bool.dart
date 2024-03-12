
void main (){
  bool flag = true;
  print(flag);

  bool flag1 = true;
  var tag;
  if (flag) {
    print('');
  }

  if(tag) {} // 这样会报警告,dart强类型语言不会隐式转换
  if(tag == null) {
    print('');
  }
}