import 'package:flutter_learning1/app.dart';
import '../views/prop/color.dart';
import '../views/widget/appbar.dart';


final List route = [
  {
    'path': '/prop/color',
    'component': (ctx) => const LearnColor(),
    'title': '颜色属性'
  },
  {
    'path': '/widget/appbar',
    'component': (ctx) => const Appbar(),
    'title': 'Appbar'
  },
];

final routes = {
  "/": (ctx) => const HomeTest(),
  "/prop/color": (ctx) => const LearnColor(),
  "/widget/appbar": (ctx) => const Appbar(),
};

// Map<String, Widget Function(BuildContext)> routeMap() {
//   final Map<String, Widget Function(BuildContext)> map = {};
//   for (var item in route) {
//     map[item['path'] as String] = item['component'];
//   }
//   return map;
// }