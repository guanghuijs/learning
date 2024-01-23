//无返回值 主函数
void main(){
  print(addZero(1));
  print(addZero(5));
  print(addZero(8));
  print(addZero(10));
}

String addZero(int num){
  return num >= 10 ? '$num': '0$num';
}