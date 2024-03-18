import 'dart:async';

main(){
  var num = 0;
// 定时器 延迟执行
  Timer(Duration(seconds: 5),(){
    print('66666666666666666666');
  });

// 定时器 定时执行
  Timer.periodic(Duration(seconds: 1), (timer) {
    print(num);
    num++;
    if(num > 5){
      timer.cancel();
    }
  });
}