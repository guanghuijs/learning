import 'package:flutter/material.dart';
import './about.dart';

main(){
  runApp(MaterialApp(
    title: 'route',
    routes: {
      "/": (ctx) => const FirstRoute(),
      "/detail": (ctx) => const SecondRoute(''),
      "/about": (etx) => const About()
    },
    initialRoute: "/",
  ));
}


class FirstRoute extends StatefulWidget{
  const FirstRoute({super.key});



  @override
  State<StatefulWidget> createState()  => FirstRouteState();
}

class FirstRouteState extends State<FirstRoute> {
  String _message = '默认值';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text('路由学习'),
        backgroundColor: Colors.black,
        foregroundColor: Colors.white,
      ),
      body: Center(
        child: Column(
          children: [
            Text(_message),
            ElevatedButton(
                onPressed: () {
                  Future result = Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => const SecondRoute('来自主页的信息')),
                  );
                  result.then((res) {
                    print(res);
                    setState(() {
                      _message = res;
                    });
                  });
                },
                child: const Text('查看详情')
            ),
            ElevatedButton(
              onPressed: () {
                // Navigator.pop(context);
                Navigator.of(context).pushNamed('/about');
              },
              child: const Text('跳转到关于页面'),
            ),
          ],
        ),
      ),
    );
  }
}

class SecondRoute extends StatelessWidget {
  final String _message;
  const SecondRoute(this._message, {super.key});

  @override
  Widget build(BuildContext context) {
    return
      PopScope(
        canPop: false,
        // onPopInvoked: (bool didPop) {
        //   print('返回');
        //   // TODO
        //   Navigator.of(context).pop('默认返回------红红火火恍恍惚惚或或');
        // },
        child: Scaffold(
          appBar: AppBar(
            title: const Text('详情页'),
            backgroundColor: Colors.black,
            foregroundColor: Colors.white,
            leading: IconButton(
              icon: const Icon(Icons.backpack),
              onPressed: () {
                Navigator.of(context).pop('点击了顶部返回按钮');
              },
            ),
          ),
          body: Center(
            child: Row(
              children: [
                ElevatedButton(
                  onPressed: () {
                    // Navigator.pop(context);
                    Navigator.of(context).pop('来自详情页的信息');
                  },
                  child: Text('$_message,返回'),
                ),
                ElevatedButton(
                  onPressed: () {
                    // Navigator.pop(context);
                    Navigator.of(context).pushNamed('/about');
                  },
                  child: const Text('跳转到关于页面'),
                ),
              ],
            ),
          ),
        ),
    );
  }
}