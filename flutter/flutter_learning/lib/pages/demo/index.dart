import 'package:bruno/bruno.dart';
import 'package:flutter/material.dart';

class Demo extends StatefulWidget {
  const Demo({super.key});
  static const path = '/demo';

  @override
  State<StatefulWidget> createState() => _Demo();
}

class _Demo extends State<Demo> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: BrnAppBar(
        title: 'demo',
        automaticallyImplyLeading: false,
      ),
      body: const Text('demo'),
    );
  }
}
