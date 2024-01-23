import 'package:flutter/material.dart';
import 'keep_alive_demo.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const KeepAliveDemo(),
    );
  }
}


class KeepAliveDemo extends StatefulWidget {
  const KeepAliveDemo({Key? key}) : super(key: key);

  @override
  _KeepAliveDemoState createState() => _KeepAliveDemoState();
}

class _KeepAliveDemoState extends State<KeepAliveDemo> with SingleTickerProviderStateMixin{
  late TabController _controller;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _controller = TabController(length: 8, vsync: this);
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        bottom: TabBar(
          controller: _controller,
          tabs: const [
            Tab(icon: Icon(Icons.directions_car)),
            Tab(icon: Icon(Icons.directions_transit)),
            Tab(icon: Icon(Icons.directions_bike)),
          ],
        ),
        title: const Text('Keep Alive Demo'),
      ),
      body: TabBarView(
        controller: _controller,
        children: const [
          MyHomePage(title: 'Keep Alive demo', key: ValueKey(1)),
          MyHomePage(title: 'Keep Alive demo', key: ValueKey(2)),
          MyHomePage(title: 'Keep Alive demo', key: ValueKey(3)),
          MyHomePage(title: 'Keep Alive demo', key: ValueKey(4)),
          MyHomePage(title: 'Keep Alive demo', key: ValueKey(5)),
          MyHomePage(title: 'Keep Alive demo', key: ValueKey(6)),
          MyHomePage(title: 'Keep Alive demo', key: ValueKey(7)),
          MyHomePage(title: 'Keep Alive demo', key: ValueKey(8)),
        ],
      ),
    );
  }
}