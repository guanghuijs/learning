import 'package:flutter/material.dart';

/// create at 2024-01-26 14:37
/// by 吴光辉

class Appbar extends StatelessWidget {
  const Appbar({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Appbar'),
        foregroundColor: Colors.white,
        backgroundColor: Colors.deepPurpleAccent,
      ),
    );
  }
}