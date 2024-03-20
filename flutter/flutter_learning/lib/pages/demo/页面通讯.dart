import 'package:bruno/bruno.dart';
import 'package:flutter/material.dart';
import 'package:code_preview/code_preview.dart';

class PageCommunication extends StatefulWidget {
  const PageCommunication({super.key});
  static const path = '/demo/communication';

  @override
  State<StatefulWidget> createState() => _PageCommunication();
}

class _PageCommunication extends State<PageCommunication> {
  String params = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: BrnAppBar(
        title: '页面通讯',
        actions: [
          IconButton(
            onPressed: () {},
            icon: const Icon(Icons.code),
          ),
        ],
      ),
      body: ListView(
        children: [
          Container(
            color: Colors.white,
            padding: EdgeInsets.all(20),
            child: const CodePreview(className: 'PageCommunication'),
          ),
          BrnSearchText(
            hintText: '随便输入',
            onTextChange: (content) {
              setState(() {
                params = content;
              });
            },
          ),
          Container(
            margin: const EdgeInsets.only(top: 1),
            child: InkWell(
              onTap: () {
                /// 关键代码
                Navigator.of(context).push(MaterialPageRoute(
                    builder: (_) => const PageCommunicationTwo(),
                    settings: const RouteSettings(arguments: '点击事件构建路由跳转')));
              },
              child: Container(
                color: Colors.white,
                padding: const EdgeInsets.all(10),
                child: const Column(children: [
                  Center(child: Text('点击事件构建路由跳转')),
                  Center(
                      child:
                          Text('''Navigator.of(context).push(MaterialPageRoute(
                    builder: (_) => const PageCommunicationTwo(),
                    settings: const RouteSettings(arguments: '点击事件构建路由跳转')));''')),
                ]),
              ),
            ),
          ),
          Container(
            margin: const EdgeInsets.only(top: 1),
            child: InkWell(
              onTap: () {
                // 关键代码
                // 全局注册路由后通过name跳转
                Navigator.of(context).pushNamed('/demo/communication2',
                    arguments: '全局注册路由后通过name跳转');
              },
              child: Container(
                padding: const EdgeInsets.all(10),
                color: Colors.white,
                child: const Column(children: [
                  Center(child: Text('全局注册路由后通过name跳转')),
                  Center(
                      child: Text(
                          '''Navigator.of(context).pushNamed('/demo/communication2',
                          arguments: '全局注册路由后通过name跳转');''')),
                ]),
              ),
            ),
          ),
          Container(
            margin: const EdgeInsets.only(top: 1),
            child: InkWell(
              onTap: () {
                Navigator.of(context).pushReplacementNamed(
                    '/demo/communication2',
                    arguments: '替换当前页面跳转');
              },
              child: Container(
                padding: const EdgeInsets.all(10),
                color: Colors.white,
                child: const Column(children: [
                  Center(child: Text('替换当前页面跳转')),
                  Center(
                      child: Text('''Navigator.of(context).pushReplacementNamed(
                    '/demo/communication2',
                    arguments: '跳转时替换当前页');''')),
                ]),
              ),
            ),
          ),
          Container(
            margin: const EdgeInsets.only(top: 1),
            child: InkWell(
              onTap: () {
                /// 关键代码
                /// 更简写法
                Navigator.pushNamed(context, '/demo/communication2',
                    arguments: '更简写法');

                /// ===========
              },
              child: Container(
                padding: const EdgeInsets.all(10),
                color: Colors.white,
                child: const Column(children: [
                  Center(child: Text('更简写法,前面的同理')),
                  Center(
                      child: Text(
                          '''Navigator.pushNamed(context, '/demo/communication2',
                    arguments: '更简写法');''')),
                ]),
              ),
            ),
          ),
          Container(
            margin: const EdgeInsets.only(top: 1),
            child: InkWell(
              onTap: () {
                /// 关键代码
                /// 更简写法
                Navigator.pushNamed(context, '/demo/communication2',
                    arguments: params);
                // ===========
              },
              child: Container(
                padding: const EdgeInsets.all(10),
                color: Colors.white,
                child: const Column(children: [
                  Center(child: Text('跳转传入输入的参数')),
                  Center(
                      child: Text(
                          '''Navigator.pushNamed(context, '/demo/communication2',
                    arguments: params);''')),
                ]),
              ),
            ),
          ),
          Container(
            margin: const EdgeInsets.only(top: 1),
            child: InkWell(
              onTap: () {
                /// 关键代码
                /// 返回时做一些事情
                Navigator.pushNamed(context, '/demo/communication2',
                        arguments: params)
                    .then((value) {
                  BrnToast.show(
                      '我返回来了,做一些事情,我能拿到返回的携带的参数:${value.toString()}', context);
                });
                // ===========
              },
              child: Container(
                padding: const EdgeInsets.all(10),
                color: Colors.white,
                child: const Column(children: [
                  Center(child: Text('返回时做一些事情')),
                  Center(
                      child: Text(
                          '''Navigator.pushNamed(context, '/demo/communication2',
                        arguments: params)
                    .then((value) {
                  BrnToast.show(
                      '我返回来了,做一些事情,我能拿到返回的携带的参数:value.toString()}', context);''')),
                ]),
              ),
            ),
          )
        ],
      ),
    );
  }
}

class PageCommunicationTwo extends StatefulWidget {
  const PageCommunicationTwo({super.key});
  static const path = '/demo/communication2';

  @override
  State<StatefulWidget> createState() => _PageCommunicationTwo();
}

class _PageCommunicationTwo extends State<PageCommunicationTwo> {
  String data = '';
  bool isFirstBuild = true;

  @override
  Widget build(BuildContext context) {
    // 关键代码
    /// 判断是否是第一次构建UI
    if (isFirstBuild) {
      setState(() {
        data = ModalRoute.of(context)?.settings.arguments as String;
        isFirstBuild = false;
      });
    }
    // =======
    return Scaffold(
      appBar: BrnAppBar(
        title: '通讯二页',
      ),
      body: Column(
        children: [
          Text(data),
          BrnSearchText(
            hintText: '随便输入',
            onTextChange: (content) {
              setState(() {
                data = content;
              });
            },
          ),
          Text(data),
          Container(
            padding: const EdgeInsets.all(20),
            child: InkWell(
              onTap: () {
                Navigator.pop(
                    context, '======我是返回时的数据,编码8848,记住我,我收尾有很多等号=======');
              },
              child: Container(
                height: 50,
                color: Colors.white,
                child: const Center(child: Text('点击我返回时才有参数')),
              ),
            ),
          )
        ],
      ),
    );
  }
}
