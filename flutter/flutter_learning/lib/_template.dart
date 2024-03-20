import 'package:bruno/bruno.dart';
import 'package:flutter/material.dart';

class PageClass extends StatefulWidget {
  const PageClass({super.key});
  static const path = '/demo/communication';

  @override
  State<StatefulWidget> createState() => _PageClass();
}

class _PageClass extends State<PageClass> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: BrnAppBar(
        title: '页面通讯',
      ),
      body: const Text('哈哈'),
    );
  }
}
