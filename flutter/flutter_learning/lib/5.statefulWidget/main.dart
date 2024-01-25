import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';


main() {
  runApp(const App());
}

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
         appBar: AppBar(
            title: const Text('计数器'),
        ),
        body: StatefulTest(),
      ),
    );
  }

}


class StatefulTest extends StatefulWidget{

  StatefulTest({super.key}){
    if (kDebugMode) {
      print('执行StatefulTest构造方法');
    }
  }

  @override
  State<StatefulWidget> createState() {
    print("执行了StatefulTest的createState方法");
    return StateTest();
  }
}

class StateTest extends State<StatefulWidget>{
  int num = 0;

  StateTest() {
    if (kDebugMode) {
      print("执行StateTest的构造方法");
    }
  }

  @override
  void initState() {
    super.initState();
    if (kDebugMode) {
      print('数据初始化');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          IconButton (
              icon: const Icon(Icons.add),
              onPressed: () {
                setState(() {
                  num++;
                });
              },
          ),
          Text('$num'),
           IconButton (
            icon: const Icon(Icons.remove),
            onPressed: () {
              setState(() {
                num--;
              });
            },
          )
        ],
      ),
    );
  }
}