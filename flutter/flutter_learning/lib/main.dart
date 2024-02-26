import 'package:bruno/bruno.dart';
import 'package:flutter/material.dart';
import './theme.config.dart';
import './app.dart';

void main() {
  runApp(const App());
  BrnInitializer.register(allThemeConfig: ThemeConfig.defaultAllConfig);
}
