import 'dart:async';

import 'package:flutter/material.dart';
import './route/index.dart';

class App extends StatelessWidget {
  const App({super.key});

  // final GlobalKey<ScaffoldState> _globalKey = GlobalKey();
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        routes: Routes.routes,
        initialRoute: Routes.initialRoute,
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        ),
        home: const HomeTest());
  }
}

class HomeTest extends StatelessWidget {
  const HomeTest({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        // key: _globalKey,
        appBar: AppBar(
          title: const Text('flutter learn'),
          centerTitle: true,
          foregroundColor: Colors.white,
          backgroundColor: Colors.deepPurpleAccent,
          // drawer
          // leading: IconButton(
          //   icon: const Icon(Icons.menu),
          //   onPressed: () {
          //     _globalKey.currentState?.openDrawer();
          //   },
          // ),
        ),
        body: ListView.builder(
            itemCount: Routes.route.length,
            itemBuilder: (content, index) {
              return;
            })
        // ListView(
        //   children: [
        //     ...Routes.route.map(
        //       (route) => Container()
        //     ),
        //     const Text('啦啦啦,flutter真好玩')
        //   ],
        // )
        // drawer: const HomeMenuDrawer(),
        // drawerEdgeDragWidth: 100,
        // drawerScrimColor: Colors.black.withOpacity(0.6),
        );
  }
}
