import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

main(){
  runApp(const App());
}


class App extends StatelessWidget{
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('widget'),
          centerTitle: true,
          backgroundColor: Colors.purple,
          foregroundColor: Colors.white,
        ),
        body:  Center(
          child: Column(
            children: [
              Container(
                padding: const EdgeInsets.all(10),
                margin: const EdgeInsets.all(10),
                width: double.infinity,
                decoration: BoxDecoration(
                  border: Border.all(
                    color: Colors.red
                  )
                ),
                child: const Text(
                    'text widget',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 20,
                      color: Colors.purple,
                      backgroundColor: Colors.red,
                    )),
              ),
              const Text.rich(
                TextSpan(
                  children: [
                    TextSpan(text: "《定风波》", style: TextStyle(fontSize: 25, fontWeight: FontWeight.bold, color: Colors.black)),
                    TextSpan(text: "苏轼", style: TextStyle(fontSize: 18, color: Colors.redAccent)),
                    TextSpan(text: "\n莫听穿林打叶声，何妨吟啸且徐行。\n竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。")
                  ],
                ),
                style: TextStyle(fontSize: 20, color: Colors.purple),
                textAlign: TextAlign.center,
              ),
              FloatingActionButton(
                  child: const Icon(Icons.add),
                  onPressed: () {}
              ),
              OutlinedButton(onPressed: () {}, child: const Text('OutlinedButton')),
              const ElevatedButton (
                onPressed: null,
                child: Text("disable"),
              ),
              ElevatedButton (
                child: const Text("ElevatedButton"),
                onPressed: () {
                  if (kDebugMode) {
                    print('呵呵哈哈哈');
                  }
                },
              ),
              Container(
                constraints: const BoxConstraints.expand(
                  height: 100,
                ),
                padding: const EdgeInsets.all(8.0),
                color: Colors.blue[600],
                alignment: Alignment.center,
                transform: Matrix4.rotationZ(0.1),
                child: Text('Hello World',
                    style: Theme.of(context)
                        .textTheme
                        .headlineMedium!
                        .copyWith(color: Colors.white)),
              )
            ],
          ),
        ),
      ),
    );
  }

}