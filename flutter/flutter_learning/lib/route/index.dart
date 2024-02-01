import 'package:flutter/material.dart';
import '../views/prop/color.dart';
import '../views/widget/appbar.dart';
import '../models/namItem.dart';

class Routes {
  static final List<NavItem> route = [
    NavItem(
        path: '/prop/color',
        title: '颜色属性',
        component: (ctx) => const LearnColor()),
    NavItem(
        path: '/widget/appbar',
        title: 'Appbar',
        component: (ctx) => const LearnAppbar())
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
