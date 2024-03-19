import 'package:flutter/material.dart';

class Menu {
  final String path;
  final String? title;
  final Widget? component;
  final MenuMata? meta;
  Menu({required this.path, required this.title, this.component, this.meta});
}

class MenuMata {
  final String? order;
  final String? type;
  final dynamic icon;
  MenuMata({this.order, this.icon, this.type});
}
