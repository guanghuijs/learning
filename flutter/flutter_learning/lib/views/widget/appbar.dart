import 'package:flutter/material.dart';

/// create at 2024-01-26 14:37
/// by 吴光辉

class LearnAppbar extends StatelessWidget {
  const LearnAppbar({super.key});

  static const routeName = '/widget/appbar';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Appbar'),
        foregroundColor: Colors.white,
        backgroundColor: Colors.deepPurpleAccent,
      ),
      bottomNavigationBar: BottomAppBar(
        color: Colors.white,
        shape: const CircularNotchedRectangle(), // 底部导航栏打一个圆形的洞
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            IconButton(
              icon: const Icon(Icons.home),
              onPressed: () {},
            ),
            const SizedBox(), //中间位置空出

            IconButton(
              icon: const Icon(Icons.business),
              onPressed: () {},
            ),
          ], //均分底部导航栏横向空间
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: const Icon(
          Icons.add,
          color: Colors.red,
        ),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
      body: ListView(
        children: [],
      ),
    );
  }
}
