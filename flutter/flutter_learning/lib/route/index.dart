import 'package:flutter/material.dart';
import './modules/prop.dart';
export './modules/prop.dart';
export './modules/demo.dart';
import './modules/demo.dart';

/// 路由
class Routes {
  static Map<String, Widget Function(BuildContext)> routes = {
    ...propRoutes,
    ...demoRoutes
  };
  static const String initialRoute = '/';
}
