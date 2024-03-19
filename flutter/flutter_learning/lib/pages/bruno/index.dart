import 'package:bruno/bruno.dart';
import 'package:flutter/material.dart';

class Bruno extends StatefulWidget {
  const Bruno({super.key});
  static const path = '/bruno';

  @override
  State<StatefulWidget> createState() => _Bruno();
}

class _Bruno extends State<Bruno> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: BrnAppBar(
        title: 'bruno',
        automaticallyImplyLeading: false,
      ),
      body: const Text('bruno'),
    );
  }
}
