import 'package:flutter/material.dart';
import './route/index.dart';
import './widget/nav_item.dart';

class App extends StatefulWidget {
  const App({super.key});

  @override
  State<StatefulWidget> createState() => _App();
}

class _App extends State<App> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        routes: Routes.routes,
        initialRoute: Routes.initialRoute,
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        ),
        home: Scaffold(
            appBar: AppBar(
              title: const Text('flutter learn'),
              centerTitle: true,
              foregroundColor: Colors.white,
              backgroundColor: Colors.deepPurpleAccent,
            ),
            body: ListView.builder(
                itemCount: Routes.route.length,
                itemBuilder: (content, index) {
                  return NavItemB(navItem: Routes.route[index]);
                })));
  }
}
