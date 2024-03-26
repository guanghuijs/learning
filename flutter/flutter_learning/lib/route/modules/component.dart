import 'package:flutter/material.dart';
import '../../models/routes.dart';
import '../../pages/component/dict.dart';

final Map<String, Widget Function(BuildContext)> componentRoutes = {
  DictTest.path: (ctx) => const DictTest()
};

final List<Menu> componentMenus = [
  Menu(path: DictTest.path, title: '字典选择', meta: MenuMata()),
];
