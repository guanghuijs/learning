import 'package:bruno/bruno.dart';
import 'package:flutter/material.dart';

class Component extends StatefulWidget {
  const Component({super.key});
  static const path = '/component';

  @override
  State<StatefulWidget> createState() => _Component();
}

class _Component extends State<Component> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: BrnAppBar(
        title: '组件',
        automaticallyImplyLeading: false,
      ),
      body: const Text('组件'),
    );
  }
}
