import 'package:flutter/material.dart';
import './route/index.dart';
import './widget/nav_item.dart';

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
        appBar: AppBar(
          title: const Text('flutter learn'),
          centerTitle: true,
          foregroundColor: Colors.white,
          backgroundColor: Colors.deepPurpleAccent,
        ),
        body: ListView.builder(
            itemCount: Routes.route.length,
            itemBuilder: (content, index) {
              return NavItemE(navItem: Routes.route[index]);
            }));
  }
}
