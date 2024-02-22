import 'package:flutter/material.dart';

// pubspec.yaml
// fonts:
//   - family: IconFont
//     fonts:
//       - asset: assets/icon/iconfont.ttf
class IconfontPage extends StatefulWidget {
  const IconfontPage({super.key});
  static const routeName = '/demo/iconfont';

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

class IconFont {
  static const IconData qianbao = IconData(0xe60f, fontFamily: 'IconFont');
  // 你可以继续添加其他的图标
}
