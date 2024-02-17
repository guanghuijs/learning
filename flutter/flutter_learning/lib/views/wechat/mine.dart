import 'package:flutter/material.dart';

class PageMine extends StatefulWidget {
  const PageMine({super.key});

  @override
  State<StatefulWidget> createState() => _PageMine();
}

class _PageMine extends State<PageMine> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('我的'),
      ),
    );
  }
}
