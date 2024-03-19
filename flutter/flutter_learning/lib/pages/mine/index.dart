import 'package:bruno/bruno.dart';
import 'package:flutter/material.dart';

class Mine extends StatefulWidget {
  const Mine({super.key});
  static const path = '/mine';

  @override
  State<StatefulWidget> createState() => _Mine();
}

class _Mine extends State<Mine> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: BrnAppBar(
        title: '我的',
        automaticallyImplyLeading: false,
      ),
      body: const Text('我的'),
    );
  }
}
