import 'package:flutter/material.dart';

class WeChatHome extends StatefulWidget {
  const WeChatHome({super.key});

  static const routeName = '/wechat';

  @override
  State<StatefulWidget> createState() => _weChatHome();
}

class _weChatHome extends State {
  @override
  Widget build(BuildContext context) {
    return const Text('测试');
  }
}
