import 'package:flutter/material.dart';
import 'package:bruno/bruno.dart';
import '../../route/index.dart';

class Demo extends StatefulWidget {
  const Demo({super.key});
  static const path = '/demo';

  @override
  State<StatefulWidget> createState() => _Demo();
}

class _Demo extends State<Demo> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: BrnAppBar(
        title: '属性',
        automaticallyImplyLeading: false,
      ),
      body: RefreshIndicator(
        onRefresh: () async {
          print('1111111');
        },
        child: ListView.builder(
            itemCount: demoMenus.length,
            itemBuilder: (content, index) {
              final route = demoMenus[index];
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
      ),
    );
  }
}
