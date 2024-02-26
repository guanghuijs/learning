import 'package:flutter/material.dart';

class PageClass extends StatefulWidget {
  const PageClass({super.key});
  static const path = '/drop_menu';

  @override
  State<StatefulWidget> createState() => _PageClass();
}

class _PageClass extends State<PageClass> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('人员管理'),
        centerTitle: true,
        actions: const [Text('新增')],
      ),
      body: const Text('哈哈'),
    );
  }
}
