import 'package:flutter/material.dart';
import 'package:bruno/bruno.dart';
import '../../route/index.dart';

class Prop extends StatefulWidget {
  const Prop({super.key});
  static const path = '/prop';

  @override
  State<StatefulWidget> createState() => _Prop();
}

class _Prop extends State<Prop> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: BrnAppBar(
        title: '属性',
        automaticallyImplyLeading: false,
      ),
      body: ListView.builder(
          itemCount: propMenus.length,
          itemBuilder: (content, index) {
            final route = propMenus[index];
            return Container(
              color: Colors.white,
              margin: const EdgeInsets.only(top: 1),
              padding: const EdgeInsets.all(15),
              child: InkWell(
                  onTap: () {
                    BrnToast.show(route.title ?? '', content);
                    if (route.path.isNotEmpty) {
                      Navigator.of(context).pushNamed(route.path);
                    }
                  },
                  child: Text(route.title ?? '')),
            );
          }),
    );
  }
}
