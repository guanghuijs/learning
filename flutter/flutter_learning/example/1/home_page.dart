import 'package:flutter/material.dart';

import 'bottom_bar.dart';

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _currentIndex = 0;

  final _inactiveColor = Colors.grey;

  Color backgroundColor = const Color(0x00ffffff);

  List<String> titles = ['首页', '搜索', '排名', '直播'];
  // List<String> bodyImages = ['assets/images/body_home.png', 'assets/images/bo'
  //     'dy_search.png', 'assets/images/body_rank.png', 'assets/images/body_video.png'];

  List<Widget>? _pages;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          automaticallyImplyLeading: false,
          title: Text(titles[_currentIndex], style: const TextStyle(
            fontSize: 16,
          ),),
          foregroundColor: Colors.red,
          backgroundColor: Colors.black,
        ),
        backgroundColor: Colors.blue,
        body: getBody(),
        bottomNavigationBar: _buildBottomBar());
  }

  Widget _buildBottomBar() {
    return CustomAnimatedBottomBar(
      containerHeight: 56,
      backgroundColor: backgroundColor,
      selectedIndex: _currentIndex,
      showElevation: true,
      itemCornerRadius: 24,
      curve: Curves.easeInOut,
      onItemSelected: (index) => setState(() => _currentIndex = index),
      items: <MyBottomNavigationBarItem>[
        MyBottomNavigationBarItem(
          icon: const Icon(Icons.add),
          title: Text(titles[0]),
          activeColor: const Color(0xffF4D144),
          inactiveColor: _inactiveColor,
          textAlign: TextAlign.center,
        ),
        MyBottomNavigationBarItem(
          icon: const Icon(Icons.search),
          title: Text(titles[1]),
          activeColor: Colors.greenAccent,
          inactiveColor: _inactiveColor,
          textAlign: TextAlign.center,
        ),
        MyBottomNavigationBarItem(
          icon: const Icon(Icons.apps),
          title: Text(titles[2]),
          activeColor: Colors.pinkAccent,
          inactiveColor: _inactiveColor,
          textAlign: TextAlign.center,
        ),
        MyBottomNavigationBarItem(
          icon: const Icon(Icons.video_camera_front),
          title: Text(titles[3]),
          activeColor: Colors.blue,
          inactiveColor: _inactiveColor,
          textAlign: TextAlign.center,
        ),
      ],
    );
  }

  Widget getBody() {
    double width = 414;
    double height = MediaQuery.of(context).size.width * (812 / 375);

    _pages ??= List.generate(titles.length, (index) {
        return SingleChildScrollView(
          child: Container(
            color: backgroundColor,
            width: width,
            height: height,
            alignment: Alignment.center,
            child: Text(titles[index]),
            // child: Text("Home",style: TextStyle(fontSize: 25,fontWeight: FontWeight.bold),),
          ),
        );
      }).toList();
    return IndexedStack(
      index: _currentIndex,
      children: _pages!,
    );
  }
}