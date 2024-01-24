import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  Home({super.key});

  final GlobalKey<ScaffoldState> _globalKey = GlobalKey();


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _globalKey,
      drawer: Container(
        width: 200,
        color: Colors.blue,
      ),
      drawerEdgeDragWidth: 0.0,
      drawerScrimColor: Colors.red.withOpacity(0.6),
      body: SafeArea(
        top: false,
        bottom: false,
        child: Stack(
          fit: StackFit.expand,
          children: [
            Container(
              color: Colors.pink,
            ),
            Positioned(
              left: 0,
              right: 0,
              top: 0,
              child: Container(
                height: 50.0 + MediaQuery.of(context).padding.top,
                color: Colors.yellow,
                alignment: Alignment.centerLeft,
                child: GestureDetector(
                  onTap: () {
                    _globalKey.currentState?.openDrawer();
                  },
                  child: Container(
                    width: 40,
                    height: 40,
                    alignment: Alignment.center,
                    color: Colors.red,
                    child: const Text('打开侧边栏'),
                  ),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}