import 'package:flutter/material.dart';

class PageChat extends StatefulWidget {
  const PageChat({super.key});

  @override
  State<StatefulWidget> createState() => _PageChat();
}

class _PageChat extends State<PageChat> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          '微信',
          style: TextStyle(color: Colors.white),
        ),
        centerTitle: true,
        backgroundColor: Colors.red,
      ),
    );
  }
}
