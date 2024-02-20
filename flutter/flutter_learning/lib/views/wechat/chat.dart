import 'package:flutter/material.dart';

class PageChat extends StatefulWidget {
  const PageChat({super.key});

  @override
  State<StatefulWidget> createState() => _PageChat();
}

class _PageChat extends State<PageChat> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(children: [
        Container(
          height: 100,
          decoration: const BoxDecoration(
              image: DecorationImage(
                  image: AssetImage("assets/images/home_top_bg.png"),
                  fit: BoxFit.fitWidth)),
          child: TextField(),
        ),
      ]),
    );
  }
}
