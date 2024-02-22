import 'package:flutter/material.dart';

class ListViewPage extends StatefulWidget {
  const ListViewPage({super.key});
  static const routeName = '/widget/list-view';

  @override
  State<StatefulWidget> createState() => _ListViewPage();
}

class _ListViewPage extends State<ListViewPage> {
  final ScrollController _controller = ScrollController();
  bool showToTopBtn = false; //是否显示“返回到顶部”按钮

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
            // 判断是否滚动到底部
            if (notification.metrics.pixels ==
                notification.metrics.maxScrollExtent) {
              print('Scrolled to bottom!');
              // 在这里你可以添加加载更多数据的逻辑
            }
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
