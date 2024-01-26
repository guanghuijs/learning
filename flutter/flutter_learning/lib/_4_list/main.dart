import 'package:flutter/material.dart';


main() {
  runApp(const App());
}

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.pinkAccent)
      ),
      home: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.black,
          foregroundColor: Colors.white,
          title: const Text('list'),
        ),
        body: const List(),
      ),
    );
  }
}


class List extends StatelessWidget {
  const List({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
        padding: const EdgeInsets.all(10),
        child: ListView(
          children: const <Widget>[
            Item("Apple1", "Macbook Product1", "https://img2.baidu.com/it/u=3919732315,1375243556&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=378"),
            Item("Apple2", "Macbook Product2", "https://img2.baidu.com/it/u=3919732315,1375243556&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=378"),
            Item("Apple3", "Macbook Product3", "https://img2.baidu.com/it/u=3919732315,1375243556&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=378"),
          ],
        ),
      );
  }
}


class Item extends StatelessWidget {
  // const Item({super.key, required this.title, required this.desc, required this.url});
  const Item(this.title,this.desc,this.url,{super.key});

  final String title;
  final String desc;
  final String url;


  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        border: Border.all(
          color: Colors.black12
        ),
      ),
      child: Column(
        children: <Widget>[
          Text(title, style: const TextStyle(fontSize: 20,fontWeight: FontWeight.bold,color: Colors.pinkAccent)),
          Text(desc, style: const TextStyle(fontSize: 14,fontWeight: FontWeight.bold,color: Colors.black12)),
          const SizedBox(height: 10),
          Image.network(url)
        ],
      ),
    );
  }

}

///