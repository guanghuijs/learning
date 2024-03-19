import 'package:bruno/bruno.dart';
import 'package:flutter/material.dart';

class Prop extends StatefulWidget {
  const Prop({super.key});
  static const path = '/prop';

  @override
  State<StatefulWidget> createState() => _Prop();
}

class _Prop extends State<Prop> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: BrnAppBar(
        title: '属性',
        automaticallyImplyLeading: false,
      ),
      body: const Text('属性'),
    );
  }
}
