import 'package:flutter/material.dart';

/// create at 2024-01-26 14:21
/// by 吴光辉

class LearnColor extends StatelessWidget {
  const LearnColor({super.key});

  static const routeName = '/prop/color';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          centerTitle: true,
          title: const Text('Color'),
          foregroundColor: Colors.white,
          backgroundColor: Colors.deepPurpleAccent,
        ),
        body: ListView(
          children: [
            Container(
              height: 50,
              color: Colors.amber,
              alignment: const Alignment(0, 0),
              child: const Text('Colors.amber'),
            ),
            Container(
              height: 50,
              color: const Color(0x50000000),
              alignment: const Alignment(0, 0),
              child: const Text('Color(0xFFFFFFFF)'),
            ),
            Container(
              height: 50,
              color: const Color.fromARGB(0xaa, 124, 77, 255),
              alignment: const Alignment(0, 0),
              child: const Text(
                'Color.fromARGB(255, 124, 77, 255),A最大值是255(也写成16进制 0xff)',
                style: TextStyle(fontSize: 11),
              ),
            ),
            Container(
              height: 50,
              color: const Color.fromRGBO(0, 0, 0, 0.1),
              alignment: const Alignment(0, 0),
              child: const Text(
                'Color.fromARGB(255, 124, 77, 255),A最大值是255(也写成16进制 0xff)',
                style: TextStyle(fontSize: 11),
              ),
            ),
          ],
        ));
  }
}
