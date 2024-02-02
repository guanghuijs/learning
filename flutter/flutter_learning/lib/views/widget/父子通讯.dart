import 'package:flutter/material.dart';

class ParentWidget extends StatefulWidget {
  static const routeName = '/widget/communication';

  const ParentWidget({super.key});

  @override
  State<StatefulWidget> createState() => _ParentWidget();
}

class _ParentWidget extends State<ParentWidget> {
  bool flag = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('父子组件通讯')),
      body: Container(
        color: Colors.blue,
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            children: [
              const Text('父组件'),
              ChildWidget(
                  active: flag,
                  onChanged: (bool vlaue) {
                    setState(() {
                      flag = vlaue;
                    });
                  })
            ],
          ),
        ),
      ),
    );
  }
}

class ChildWidget extends StatelessWidget {
  const ChildWidget({Key? key, this.active = false, required this.onChanged})
      : super(key: key);
  final bool active;
  final ValueChanged<bool> onChanged;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        onChanged(!active);
      },
      child: Container(
        width: double.infinity,
        height: 100,
        color: active ? Colors.amber : Colors.black87,
        child: Column(
          children: [
            Text(
              active ? 'active' : 'inactive $active',
              style: const TextStyle(color: Colors.white),
            ),
            const Text(
              '子组件',
              style: TextStyle(color: Colors.white),
            )
          ],
        ),
      ),
    );
  }
}
