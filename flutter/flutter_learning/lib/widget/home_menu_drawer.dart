import 'package:flutter/material.dart';

class HomeMenuDrawer extends StatelessWidget {
  const HomeMenuDrawer({
      Key? key,
      String? activeRoute,
  }):super(key:key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 200,
      height: double.infinity,
      color: Colors.white,
    );
  }
}