import 'package:flutter/material.dart';
import './route/index.dart';

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
          //Scaffold脚手架的背景色
          scaffoldBackgroundColor: const Color(0xfff2f2f2),
        ),
        home: Scaffold(
          appBar: AppBar(
            title: const Text('flutter learn'),
            centerTitle: true,
            foregroundColor: Colors.white,
            backgroundColor: Colors.deepPurpleAccent,
          ),
          // body: ListView.builder(
          //     itemCount: Routes.route.length,
          //     itemBuilder: (content, index) {
          //       return NavItemB(navItem: Routes.route[index]);
          //     }),
          body: ListView.builder(
            itemCount: Routes.route.length,
            itemBuilder: (context, index) {
              return InkWell(
                onTap: () {
                  debugPrint('test');
                  Navigator.of(context).pushNamed(Routes.route[index].path);
                },
                child: Container(
                  color: Colors.white,
                  margin: const EdgeInsets.only(top: 1),
                  padding: const EdgeInsets.all(10),
                  child: Text(Routes.route[index].title),
                ),
              );
            },
          ),
        ));
  }
}
