import 'package:flutter/material.dart';
import '../views/prop/color.dart';
import '../views/widget/appbar.dart';


class Routes {
  static final List<Map<String, dynamic>> route = [
    {
      'path': '/prop/color',
      'component': (ctx) => const LearnColor(),
      'title': '颜色属性'
    },
    {
      'path': '/widget/appbar',
      'component': (ctx) => const LearnAppbar(),
      'title': 'Appbar'
    },
  ];

  static Map<String, Widget Function(BuildContext)> routes = {
    '/prop/color': (ctx) => const LearnColor(),
    '/widget/appbar': (ctx) => const LearnAppbar(),
  };

  // static Map<String, Widget Function(BuildContext)> routes () {
  //   final Map<String, Widget Function(BuildContext)> routes = {};
  //   for (var item in route) {
  //     routes['path'] = item['component'];
  //   }
  //   return routes;
  // }

  static const String initialRoute = '/';
}







