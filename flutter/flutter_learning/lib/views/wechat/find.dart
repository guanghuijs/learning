import 'package:flutter/material.dart';

class PageFind extends StatefulWidget {
  const PageFind({super.key});

  @override
  State<StatefulWidget> createState() => _PageFind();
}

class _PageFind extends State<PageFind> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('发现'),
      ),
    );
  }
}
