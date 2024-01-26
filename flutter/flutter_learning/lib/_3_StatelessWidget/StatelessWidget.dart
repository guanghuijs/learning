import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

class App extends StatelessWidget{
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        theme: ThemeData(
            colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
            useMaterial3: true,
        ),
      home: Scaffold(
        appBar: AppBar(
          title: const Text('widget'),
        ),
        body: const Home(),
      ),

    );
  }
}

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Checkbox(value: false, onChanged: (bool? value) {
            if (kDebugMode) {
              print(value);
            }
          }),
          const Text('hello word')
        ],
      ),
    );
  }

}