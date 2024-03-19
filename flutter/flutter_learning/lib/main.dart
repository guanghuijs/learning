import 'package:bruno/bruno.dart';
import 'package:flutter/material.dart';
import './theme.config.dart';
import './app.dart';

void main() {
  runApp(const App());
  BrnInitializer.register(allThemeConfig: ThemeConfig.defaultAllConfig);
  ErrorWidget.builder = (FlutterErrorDetails flutterErrorDetails) {
    ///debug模式下输出日志
    debugPrint(flutterErrorDetails.toString());
    return Scaffold(
      body: SizedBox(
        width: double.infinity,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              "App错误!${flutterErrorDetails.exception}",
              maxLines: 4,
            ),
          ],
        ),
      ),
    );
  };
}
