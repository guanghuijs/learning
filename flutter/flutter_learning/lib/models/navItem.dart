import 'package:flutter/material.dart';

class NavItem {
  final String path;
  final String title;
  final Widget Function(dynamic) component;
  NavItem({required this.path, required this.title, required this.component});
}
