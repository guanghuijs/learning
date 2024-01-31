import 'package:flutter/material.dart';
import 'package:chart_sparkline/chart_sparkline.dart';

/// create at 2024-01-26 14:37
/// by 吴光辉

class LearnAppbar extends StatelessWidget {
  const LearnAppbar({super.key});

  static const routeName = '/widget/appbar';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Appbar'),
        foregroundColor: Colors.white,
        backgroundColor: Colors.deepPurpleAccent,
      ),
      body: ListView(
        children: [
          Sparkline(
            data: const [
              0.0,
              1.0,
              1.5,
              2.0,
              0.0,
              0.0,
              -0.5,
              -1.0,
              -0.5,
              0.0,
              0.0
            ],
          ),
        ],
      ),
    );
  }
}
