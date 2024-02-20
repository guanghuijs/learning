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
  int _currentTab = 0;
  final _tabView = [
    const PageChat(),
    const PageAddressBook(),
    const PageFind(),
    const PageMine()
  ];

  void chagePage(int index) {
    if (index != _currentTab) {
      setState(() {
        _currentTab = index;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      //
      // body: _tabView[currentIndex],
      //

      // body: SafeArea(
      //   child: IndexedStack(
      //     index: _currentTab,
      //     children: _tabView,
      //   ),
      // ),

      body: IndexedStack(
        index: _currentTab,
        children: _tabView,
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.sms_outlined), label: '微信'),
          BottomNavigationBarItem(icon: Icon(Icons.dns_outlined), label: '通信录'),
          BottomNavigationBarItem(
              icon: Icon(Icons.wifi_find_outlined), label: '发现'),
          BottomNavigationBarItem(
              icon: Icon(Icons.face_unlock_outlined), label: '我的'),
        ],
        currentIndex: _currentTab,
        type: BottomNavigationBarType.fixed,
        onTap: (index) => chagePage(index),
      ),
    );
  }
}
