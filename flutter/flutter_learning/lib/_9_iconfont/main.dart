import 'package:flutter/material.dart';
import './iconfont.dart';

// pubspec.yaml
// fonts:
//   - family: IconFont
//     fonts:
//       - asset: assets/icon/iconfont.ttf

main(List<String> args) => runApp(const IconfontPage());

class IconfontPage extends StatefulWidget {
  const IconfontPage({super.key});

  @override
  State<StatefulWidget> createState() => _Iconfont();
}

class _Iconfont extends State<IconfontPage> {
  @override
  Widget build(Object context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('阿里云图标使用'),
        ),
        body: const Column(
          children: [
            Text(
              '\ue60f',
              style: TextStyle(
                  fontFamily: 'IconFont', fontSize: 40, color: Colors.black),
            ),
            Icon(
              IconFont.qianbao,
              size: 60,
              color: Colors.red,
            )
          ],
        ),
      ),
    );
  }
}
