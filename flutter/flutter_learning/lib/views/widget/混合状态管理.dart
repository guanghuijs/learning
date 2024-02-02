import 'package:flutter/material.dart';

// /// create at 2024-01-26 14:37
// /// by 吴光辉

class MixInState extends StatefulWidget {
  static const routeName = '/widget/state';
  const MixInState({super.key});

  @override
  State<StatefulWidget> createState() => _MixinState();
}

class _MixinState extends State<MixInState> {
  var flag = false;
  @override
  Widget build(Object context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('混合状态管理'),
        foregroundColor: Colors.white,
        backgroundColor: Colors.deepPurpleAccent,
      ),
      body: ListView(
        children: [
          IconButton(
              onPressed: () {
                setState(() {
                  flag = !flag;
                });
              },
              icon: const Icon(Icons.abc_outlined)),
          ChildWidget(flag: flag)
        ],
      ),
    );
  }
}

class ChildWidget extends StatefulWidget {
  const ChildWidget({super.key, this.flag = false});
  final bool flag;

  @override
  State<StatefulWidget> createState() => _ChildWidget();
}

class _ChildWidget extends State<ChildWidget> {
  var boderFlag = false;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTapDown: (details) {
        setState(() {
          boderFlag = true;
        });
      },
      onTapUp: (details) {
        setState(() {
          boderFlag = false;
        });
      },
      child: Container(
        color: Colors.red,
        width: 200,
        height: 200,
        child: Column(children: [
          Container(
              decoration: BoxDecoration(
                  border: boderFlag
                      ? Border.all(color: Colors.black, width: 10)
                      : null),
              child: widget.flag ? const Text('true') : const Text('false'))
        ]),
      ),
    );
  }
}
