import 'dart:async';

main(){
  const list = [1,2,3,4,5];

  // -----------------
  for(var item in list){
    print(item);
  }

  // -----------------
  list.forEach((element) {
    print(element);
    print('foreach');
  });

  // -----------------
  for(var i = 0; i <= 5; i++){
    print(i);
  }

  // ------------------
  var num = 0;
  // while(num <=  5) { // 死循环
  //   print('num=5');
  // }
  while(num <= 5){
    print(num); // 0 1 2 3 4 5
    num++;
  }
  while(num >= 10){
    print('不满足');
  }

  // ------------------
  var doNum = 0;
  do{
    print('至少执行一次');
  }while(doNum > 5);
}