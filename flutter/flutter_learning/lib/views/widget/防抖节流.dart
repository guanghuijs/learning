import 'dart:async';

import 'package:flutter/material.dart';
import 'package:easy_debounce/easy_debounce.dart';
import 'package:dio/dio.dart';

class PageFDJL extends StatefulWidget {
  const PageFDJL({super.key});
  static const routeName = '/fdjl';

  @override
  State<StatefulWidget> createState() => _PageFDJL();
}

class _PageFDJL extends State<PageFDJL> {
  Timer timer = Timer(const Duration(seconds: 2), () {});

  final dio = Dio();
  @override
  Widget build(Object context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('防抖节流'),
      ),
      body: ListView(
        children: [
          Container(
            margin: const EdgeInsets.all(20),
            padding: const EdgeInsets.all(20),
            decoration: const BoxDecoration(
                color: Colors.white,
                boxShadow: [BoxShadow(color: Colors.black38, blurRadius: 10)]),
            child: TextField(
              decoration:
                  const InputDecoration(labelText: '防抖测试', hintText: '请输入'),
              cursorColor: Colors.amber,
              onChanged: (value) {
                timer.cancel();
                timer = Timer(const Duration(seconds: 2), () {
                  print(value);
                });
              },
            ),
          ),
          Container(
            margin: const EdgeInsets.all(20),
            padding: const EdgeInsets.all(20),
            decoration: const BoxDecoration(
                color: Colors.white,
                boxShadow: [BoxShadow(color: Colors.black38, blurRadius: 10)]),
            child: TextField(
              decoration:
                  const InputDecoration(labelText: '节流测试', hintText: '请输入'),
              cursorColor: Colors.amber,
              onChanged: (value) {
                // debounce
                EasyDebounce.debounce(
                    'debouncer1', const Duration(milliseconds: 1000), () {
                  // print(value);
                  dio
                      .get('https://www.baidu.com/?tn=98010089_dg&ch=12')
                      .then((value) => {print(value)});
                });
              },
            ),
          ),
        ],
      ),
    );
  }
}
