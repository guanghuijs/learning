import 'package:flutter/material.dart';

class MyHomePage extends StatefulWidget {
  static const path = '/demo/refreshIndicator';
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  List<String> _items = List.generate(20, (index) => 'Item $index');

  Future<void> _handleRefresh() async {
    // 模拟网络请求等待时间
    await Future.delayed(Duration(seconds: 2));

    // 假设这是新获取的数据列表
    final newitems = List.generate(5, (index) => 'New Item $index');

    // 将新数据添加到列表中
    setState(() {
      _items.addAll(newitems);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Refresh Indicator Example'),
      ),
      body: RefreshIndicator(
        onRefresh: _handleRefresh, // 绑定刷新回调
        child: ListView.builder(
          padding: const EdgeInsets.all(8.0),
          itemCount: _items.length,
          itemBuilder: (context, index) {
            return ListTile(
              title: Text(_items[index]),
            );
          },
        ),
      ),
    );
  }
}
