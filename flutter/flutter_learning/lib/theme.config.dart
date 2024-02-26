import 'package:bruno/bruno.dart';
import 'package:flutter/material.dart';

class ThemeConfig {
  static BrnAllThemeConfig defaultAllConfig =
      BrnAllThemeConfig(commonConfig: defaultCommonConfig);

  /// 全局配置
  static BrnCommonConfig defaultCommonConfig = BrnCommonConfig(
    brandPrimary: const Color(0xFF3072F6),
  );

  /// Dialog配置
  static BrnDialogConfig defaultDialogConfig = BrnDialogConfig(
    radius: 12.0,
  );
}
