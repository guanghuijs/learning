import 'package:flutter/foundation.dart';
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
      home: const HomeTest()
    );
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
        body: ListView(
          // children:  ,
          children:
            [...Routes.route.map((route) =>
              Container(
                  padding: const EdgeInsets.all(12),
                  decoration: const BoxDecoration(
                    color: Colors.red,
                  ),
                  child: Row(
                    children: [
                      IconButton(
                        icon: const Icon(Icons.ice_skating),
                        onPressed: () {
                          if (kDebugMode) {
                            Navigator.of(context).pushNamed(route['path']);
                          }
                        },
                      ),
                      Text(route['title']),
                    ],
                  ),
                ),
              ),
            ],
          // children: [
          //   ElevatedButton(
          //       onPressed: () {
          //         if (kDebugMode) {
          //           print(Routes.routes);
          //         }
          //         // Navigator.of(context).pushNamed('/prop/color');
          //       },
          //       child: const Text('按钮')
          //   )
          // ],
        )
      // drawer: const HomeMenuDrawer(),
      // drawerEdgeDragWidth: 100,
      // drawerScrimColor: Colors.black.withOpacity(0.6),
    );
  }
}