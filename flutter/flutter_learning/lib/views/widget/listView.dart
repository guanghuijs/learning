import 'package:flutter/material.dart';
import 'dart:async';

class ListViewPage extends StatefulWidget {
  const ListViewPage({super.key});
  static const routeName = '/widget/list-view';

  @override
  State<StatefulWidget> createState() => _ListViewPage();
}

class _ListViewPage extends State<ListViewPage> {
  final ScrollController _controller = ScrollController();
  bool showToTopBtn = false; //是否显示“返回到顶部”按钮
  Timer timer = Timer(const Duration(seconds: 3), () {});

  @override
  void initState() {
    super.initState();
    //监听滚动事件，打印滚动位置
    _controller.addListener(() {
      if (_controller.offset < 1000 && showToTopBtn) {
        setState(() {
          showToTopBtn = false;
        });
      } else if (_controller.offset >= 1000 && showToTopBtn == false) {
        setState(() {
          showToTopBtn = true;
        });
      }
    });
  }

  @override
  Widget build(Object context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('listView'),
        ),
        body: NotificationListener<ScrollNotification>(
          onNotification: (notification) {
            if (notification.metrics.pixels ==
                notification.metrics.maxScrollExtent) {}
            // 防抖
            setState(() {
              timer.cancel();
              timer = Timer(const Duration(seconds: 2), () {
                // 判断是否滚动到底部
                print('Scrolled to bottom!');
              });
            });

            return true;
          },
          child: ListView.builder(
              itemCount: 30,
              controller: _controller,
              itemBuilder: (context, index) {
                return SizedBox(
                  height: 50,
                  child: Center(
                    child: Text('$index'),
                  ),
                );
              }),
        ));
  }
}
