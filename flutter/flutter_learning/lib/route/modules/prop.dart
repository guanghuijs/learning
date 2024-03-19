import 'package:flutter/material.dart';
import '../../models/routes.dart';
import '../../pages/prop/color.dart';

final Map<String, Widget Function(BuildContext)> propRoutes = {
  PropColor.path: (ctx) => const PropColor(),
};

final List<Menu> propMenus = [
  Menu(path: PropColor.path, title: '颜色属性', meta: MenuMata())
];
