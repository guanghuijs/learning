import 'package:flutter/material.dart';

class GridViewPage extends StatelessWidget {
  const GridViewPage({super.key});
  static const routeName = '/widget/grid';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('宫格布局'),
        ),
        body: Column(
          children: [
            Container(
              padding: const EdgeInsets.all(20),
              margin: const EdgeInsets.all(10),
              color: Colors.blue,
              child: GridView.builder(
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                      // 一行几个
                      crossAxisCount: 6,
                      // 把宫格压扁
                      childAspectRatio: 1,
                      // 宫格上下间距
                      mainAxisSpacing: 10,
                      crossAxisSpacing: 10),
                  itemCount: 20,
                  itemBuilder: (context, index) {
                    return Container(
                        decoration: const BoxDecoration(
                            color: Colors.orange,
                            borderRadius: BorderRadius.all(Radius.circular(8))),
                        child: Center(
                          child: Text('$index'),
                        ));
                  }),
            )
          ],
        ));
  }
}
