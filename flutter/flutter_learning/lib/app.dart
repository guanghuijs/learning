import 'package:flutter/material.dart';
import 'package:bruno/bruno.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

import 'route/index.dart';
import './pages/index.dart';

class App extends StatefulWidget {
  const App({super.key});

  @override
  State<StatefulWidget> createState() => _App();
}

class _App extends State<App> {
  int _index = 0;

  @override
  Widget build(BuildContext context) {
    // 设备适配
    return ScreenUtilInit(
        designSize: const Size(360, 690),
        minTextAdapt: true,
        splitScreenMode: true,
        builder: (context, child) {
          return MaterialApp(
              routes: Routes.routes,
              initialRoute: Routes.initialRoute,
              theme: ThemeData(
                colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
                //Scaffold脚手架的背景色
                scaffoldBackgroundColor: const Color(0xfff2f2f2),
              ),
              home: Scaffold(
                // appBar: BrnAppBar(
                //   title: 'FLUTTER',
                //   automaticallyImplyLeading: false,
                // ),
                body: IndexedStack(
                  index: _index,
                  children: const [
                    Prop(),
                    Component(),
                    Demo(),
                    Bruno(),
                    Mine()
                  ],
                ),
                bottomNavigationBar: BottomNavigationBar(
                  items: const [
                    BottomNavigationBarItem(
                        icon: Icon(Icons.token), label: '属性'),
                    BottomNavigationBarItem(
                        icon: Icon(Icons.branding_watermark), label: '组件'),
                    BottomNavigationBarItem(
                        icon: Icon(Icons.dashboard), label: 'demo'),
                    BottomNavigationBarItem(
                        icon: Icon(Icons.tips_and_updates), label: 'bruno'),
                    BottomNavigationBarItem(
                        icon: Icon(Icons.face_2), label: 'mine'),
                  ],
                  currentIndex: _index,
                  type: BottomNavigationBarType.fixed,
                  onTap: (index) {
                    setState(() {
                      _index = index;
                    });
                  },
                ),
              ));
        });
  }
}
