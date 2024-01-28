import 'package:flutter/material.dart';
import '../views/prop/color.dart';
import '../views/widget/appbar.dart';


class Routes {
  static final Map<String, WidgetBuilder> routes = {
    LearnColor.pageRouteName: (cts) => const LearnColor(),
    LearnAppbar.pageRouteName: (ctx) => const LearnAppbar()
  };
  static final List mapRoutes = [...routes.keys];
}


final List route = [
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



Map<String, Widget Function(BuildContext)> routeMap() {
  final Map<String, Widget Function(BuildContext)> map = {};
  for (var item in route) {
    map[item['path'] as String] = item['component'];
  }
  return map;
}