import 'package:flutter/material.dart';

class LearnStatefulWidget extends StatefulWidget {
  static const routeName = '/widget/stateful-widget';

  const LearnStatefulWidget({super.key});

  @override
  State<StatefulWidget> createState() => _LearnStatefulWidget();
}

class _LearnStatefulWidget extends State<LearnStatefulWidget> {
  bool flag = true;

  @override
  Widget build(Object context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('状态组件'),
      ),
      body: InkWell(
        onTap: () => {setState(() => flag = !flag)},
        child: Container(
          color: flag ? Colors.pink : Colors.black12,
          child: Text(flag ? 'active' : 'inActive'),
        ),
      ),
    );
  }
}
