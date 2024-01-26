import 'package:flutter/material.dart';


main() {
  runApp(
      MaterialApp(
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple)
        ),
        home: Scaffold(
          appBar: AppBar(
            backgroundColor: Colors.blue,
            title: const Text('checkbox'),
          ),
          body: Center(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Checkbox(value: true, onChanged: (value) => {
                }),
                const Text('hello word')
              ],
            ),
          ),
        ),
      )
  );
}