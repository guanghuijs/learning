import 'package:flutter/material.dart';

class DrawerTest extends StatelessWidget {
  final GlobalKey<ScaffoldState> _globalKey = GlobalKey();
  static const routeName = '/widget/drawer';

  DrawerTest({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _globalKey,
      appBar: AppBar(
        title: const Text('drawer'),
        centerTitle: true,
        backgroundColor: Colors.amber,
        leading: IconButton(
          icon: const Icon(Icons.menu),
          onPressed: () {
            _globalKey.currentState?.openDrawer();
          },
        ),
      ),
      drawer: Container(
        height: double.infinity,
        width: 300,
        color: Colors.grey,
        child: const Text('抽屉'),
      ),
      drawerEdgeDragWidth: 500,
      drawerScrimColor: Colors.black.withOpacity(0.6),
      body: Row(
        children: [
          BackButton(
            onPressed: () => {Navigator.of(context).pop()},
          )
        ],
      ),
    );
  }
}
