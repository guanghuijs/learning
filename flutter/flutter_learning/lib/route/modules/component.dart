import 'package:flutter/material.dart';
import '../../models/routes.dart';

final Map<String, Widget Function(BuildContext)> componentRoutes = {};

final List<Menu> componentMenus = [
  Menu(path: '', title: '代码展示', meta: MenuMata()),
];
