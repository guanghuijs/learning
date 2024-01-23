import 'package:flutter/material.dart';
import 'route.dart';

class Home extends StatelessWidget {
  Home({super.key});
  final GlobalKey<ScaffoldState> _globalKey = GlobalKey();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _globalKey,
      appBar: AppBar(
        backgroundColor: Colors.blue,
        title: const Text('flutter demo'),
        centerTitle: true,
        foregroundColor: Colors.white,
      ),
      drawer: Container(
        width: 200,
        color: Colors.white,
        child: ListView(
          padding: const EdgeInsets.all(10.0),
          children: route,
        ),
      ),
      drawerEdgeDragWidth: 0.0,
      drawerScrimColor: Colors.black.withOpacity(0.6),
      body: Container(
        color: Colors.white,
        child: ListView(
          children: [],
        )
      ),

    );
  }
}