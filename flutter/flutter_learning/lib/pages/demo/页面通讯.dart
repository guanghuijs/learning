import 'package:bruno/bruno.dart';
import 'package:flutter/material.dart';
import '../../components/i.dart';

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
                ]),
              ),
            ),
          ),
          const CodeBlock(
            code: '''
    Navigator.of(context).push(MaterialPageRoute(
        builder: (_) => const PageCommunicationTwo(),
        settings: const RouteSettings(arguments: '点击事件构建路由跳转')));
''',
            title: '关键代码',
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
                ]),
              ),
            ),
          ),
          const CodeBlock(
            code: '''
    Navigator.of(context).pushNamed('/demo/communication2',
        arguments: '全局注册路由后通过name跳转');
''',
            title: '关键代码',
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
                ]),
              ),
            ),
          ),
          const CodeBlock(
            code: '''
    Navigator.of(context).pushReplacementNamed(
        '/demo/communication2',
        arguments: '替换当前页面跳转');
''',
            title: '关键代码',
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
                ]),
              ),
            ),
          ),
          const CodeBlock(
            code: '''
    Navigator.pushNamed(context, '/demo/communication2',
        arguments: '更简写法');
''',
            title: '关键代码',
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
                ]),
              ),
            ),
          ),
          const CodeBlock(
            code: '''
    Navigator.pushNamed(context, '/demo/communication2',
        arguments: params);
    // ===========
''',
            title: '关键代码',
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
                ]),
              ),
            ),
          ),
          const CodeBlock(
            code: '''
    Navigator.pushNamed(context, '/demo/communication2',
            arguments: params)
        .then((value) {
      BrnToast.show(
          '我返回来了,做一些事情,我能拿到返回的携带的参数:value.toString()', context);
    });
  },
''',
            title: '关键代码',
          ),
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
    /// 什么时候要判断第一次构建 ？
    /// 当页面有表单时,每当表单输入值,都会重新构建UI,
    /// 每次构建ui都会给当前页面的变量赋值为携带过来的数据,
    /// 每当我们需要执行表单反显执行数据修改跟新的业务都需要判断,
    /// 仅是自己片面理解
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
      body: ListView(
        children: [
          Container(
            color: Colors.white,
            margin: const EdgeInsets.symmetric(vertical: 1),
            padding: const EdgeInsets.all(10),
            child: Center(
              child: Text('这里展示页面携带的数据$data'),
            ),
          ),
          const CodeBlock(
            code: '''
  String data = '';
  bool isFirstBuild = true;

  @override
  Widget build(BuildContext context) {
    // 关键代码
    /// 判断是否是第一次构建UI
    /// 什么时候要判断第一次构建 ？
    /// 当页面有表单时,
    /// 每当表单输入值,
    /// 都会重新构建UI,
    /// 每次构建ui都会给
    /// 当前页面的变量赋值为携带过来的数据,
    /// 每当我们需要执行表单反显记录修
    /// 改更新业务时都需要判断,
    /// 仅是自己片面理解
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
          Container(
            padding: const EdgeInsets.all(10),
            child: Center(
              child: Text('这里展示页面携带的数据data'),
            ),
          ),
        ],
      ),
    );
  }
''',
            title: '关键代码',
          ),
          Container(
            margin: const EdgeInsets.only(top: 1),
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
          ),
          const CodeBlock(
            code: '''
    Navigator.pop(
        context, '======我是返回时的数据,编码8848,记住我,我收尾有很多等号=======');
''',
            title: '关键代码',
          )
        ],
      ),
    );
  }
}
