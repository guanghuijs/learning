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
    );
  }
}