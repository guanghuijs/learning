import 'package:flutter/material.dart';

class StudyContainer extends StatelessWidget {
  const StudyContainer({super.key});

  static const routeName = '/widget/container';

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: [
        Container(
          margin: const EdgeInsets.fromLTRB(10, 10, 10, 0),
          alignment: Alignment.bottomCenter,
          width: double.infinity,
          height: 100,
          decoration: const BoxDecoration(
              gradient: RadialGradient(
                  center: Alignment.center,
                  colors: [Colors.red, Colors.orange]),
              boxShadow: [
                BoxShadow(
                    color: Colors.black54,
                    offset: Offset(0, 0),
                    blurRadius: 10.0)
              ]),
        ),
        Container(
          padding: const EdgeInsets.all(20),
          margin: const EdgeInsets.fromLTRB(10, 10, 10, 0),
          height: 100,
          decoration: BoxDecoration(
              color: Colors.red,
              border: Border.all(
                  color: Colors.red, width: 10, style: BorderStyle.solid)),
          child: const Text(
            "你好",
            style: TextStyle(color: Colors.amber, fontSize: 20),
          ),
        ),
        const Text('哈哈哈哈'),
      ],
    );
  }
}
