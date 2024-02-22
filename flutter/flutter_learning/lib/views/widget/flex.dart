import 'package:flutter/material.dart';

class FlexPage extends StatelessWidget {
  const FlexPage({super.key});
  static const routeName = '/widget/flex';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('flex'),
      ),
      body: Column(
        children: <Widget>[
          //Flex的两个子widget按1：2来占据水平空间
          Flex(
            direction: Axis.horizontal,
            children: <Widget>[
              Expanded(
                child: Container(
                  height: 50.0,
                  color: Colors.red,
                ),
              ),
              Expanded(
                child: Container(
                  height: 50.0,
                  color: Colors.green,
                ),
              ),
              Expanded(
                child: Container(
                  height: 50.0,
                  color: Colors.blue,
                ),
              ),
            ],
          ),
          Expanded(
            flex: 1,
            child: Container(
              height: 100,
              color: Colors.pink,
              child: ListView.builder(
                  itemCount: 100,
                  itemBuilder: (content, index) {
                    return SizedBox(
                      height: 50,
                      child: Text('item$index'),
                    );
                  }),
            ),
          )
        ],
      ),
    );
  }
}
