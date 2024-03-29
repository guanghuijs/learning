import 'package:bruno/bruno.dart';
import 'package:flutter/material.dart';
import '../../components/i.dart';
import '../../utils/request.dart';

/// create at 2024-01-26 14:21
/// by 吴光辉
class PropColor extends StatelessWidget {
  const PropColor({super.key});

  static const path = '/prop/color';

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
            ),
            const CodeBlock(
              code: '''
  Container(
    height: 50,
    color: Colors.amber,
    alignment: const Alignment(0, 0),
  )
''',
              title: '内置颜色',
            ),
            Container(
              height: 50,
              color: Colors.amber.withAlpha(99),
              alignment: const Alignment(0, 0),
            ),
            const CodeBlock(
              code: '''
Container(
    height: 50,
    color: Colors.amber.withAlpha(0xff), // 33 99 0xff
    alignment: const Alignment(0, 0),
  ),
''',
              title: 'Colors.amber.withAlpha(99)',
            ),
            Container(
              height: 50,
              color: const Color(0xffff0000),
              alignment: const Alignment(0, 0),
            ),
            const CodeBlock(
              code: '''
  Container(
    height: 50,
    color: const Color(0xffff0000),
    alignment: const Alignment(0, 0),
  ),
''',
              title: '16进制',
            ),
            Container(
              height: 50,
              color: const Color.fromARGB(0xaa, 124, 77, 255),
              alignment: const Alignment(0, 0),
              child: const Text(
                'Color.fromARGB(255, 124, 77, 255)',
                style: TextStyle(fontSize: 11),
              ),
            ),
            const CodeBlock(
              code: '''
  Container(
    height: 50,
    color: const Color.fromARGB(0xaa, 124, 77, 255), // A最大值是255(也写成16进制 0xff)
    alignment: const Alignment(0, 0),
    ),
  ),
''',
              title: 'Color.fromARGB',
            ),
            Container(
              height: 50,
              color: const Color.fromRGBO(255, 0, 0, 1),
            ),
            const CodeBlock(
              code: '''
  Container(
    height: 50,
    color: const Color.fromRGBO(255, 0, 0, 0.1),
  ),
''',
              title: 'Color.fromRGBO',
            ),
            IconButton(
                onPressed: () async {
                  var responseData = await HttpApi.request(
                      '/spare-parts/page', context,
                      params: {'page': 1, 'pageSize': 10});
                  print('============');
                  print(responseData);
                  print('============');
                },
                icon: const Icon(Icons.abc))
          ],
        ));
  }
}
