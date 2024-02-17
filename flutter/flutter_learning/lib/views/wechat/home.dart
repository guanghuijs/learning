import 'package:flutter/material.dart';

import './chat.dart';
import './addressBook.dart';
import './find.dart';
import './mine.dart';

class WeChatHome extends StatefulWidget {
  const WeChatHome({super.key});

  static const routeName = '/wechat';

  @override
  State<StatefulWidget> createState() => _WeChatHome();
}

class _WeChatHome extends State<WeChatHome> {
  int currentIndex = 0;

  void chagePage(int index) {
    if (index != currentIndex) {
      setState(() {
        currentIndex = index;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: [
        const PageChat(),
        const PageAddressBook(),
        const PageFind(),
        const PageMine()
      ][currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.sms_outlined), label: '微信'),
          BottomNavigationBarItem(icon: Icon(Icons.dns_outlined), label: '通信录'),
          BottomNavigationBarItem(
              icon: Icon(Icons.wifi_find_outlined), label: '发现'),
          BottomNavigationBarItem(
              icon: Icon(Icons.face_unlock_outlined), label: '我的'),
        ],
        currentIndex: currentIndex,
        type: BottomNavigationBarType.fixed,
        onTap: (index) => chagePage(index),
      ),
    );
  }
}
