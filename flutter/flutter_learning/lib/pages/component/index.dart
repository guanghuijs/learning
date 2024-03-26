import 'package:GHUI/route/index.dart';
import 'package:bruno/bruno.dart';
import 'package:flutter/material.dart';

class Component extends StatefulWidget {
  const Component({super.key});
  static const path = '/component';

  @override
  State<StatefulWidget> createState() => _Component();
}

class _Component extends State<Component> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: BrnAppBar(
        title: '组件',
        automaticallyImplyLeading: false,
      ),
      body: ListView.builder(
          itemCount: componentMenus.length,
          itemBuilder: (content, index) {
            final route = componentMenus[index];
            return Container(
              color: Colors.white,
              margin: const EdgeInsets.only(top: 1),
              padding: const EdgeInsets.all(15),
              child: InkWell(
                  onTap: () {
                    if (route.path.isNotEmpty) {
                      BrnToast.show(route.title ?? '', content);
                      Navigator.of(context).pushNamed(route.path);
                    } else {
                      BrnToast.show('${route.title ?? ''}开发中...', content);
                    }
                  },
                  child: Text(route.title ?? '')),
            );
          }),
    );
  }
}
