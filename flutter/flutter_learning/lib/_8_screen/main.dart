import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

void main() => runApp(const MyApp());

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<StatefulWidget> createState() => _MyApp();
}

class _MyApp extends State<MyApp> {
  final numList = [
    {'label': '设备总数', 'num': '20'},
    {'label': '设备故障数', 'num': '6'},
    {'label': '未修复故障', 'num': '3'},
  ];

  //填入设计稿中设备的屏幕尺寸,单位dp
  @override
  Widget build(BuildContext context) {
    return ScreenUtilInit(
      designSize: const Size(360, 690),
      minTextAdapt: true,
      splitScreenMode: true,
      builder: (context, child) {
        return MaterialApp(
          debugShowCheckedModeBanner: false,
          title: 'First Method',
          // You can use the library anywhere in the app even in theme
          theme: ThemeData(
            primarySwatch: Colors.blue,
            textTheme: Typography.englishLike2018.apply(fontSizeFactor: 1.sp),
          ),
          home: child,
        );
      },
      child: Scaffold(
        body: Column(
          children: [
            Container(
              padding: const EdgeInsets.all(20),
              decoration: const BoxDecoration(
                  image: DecorationImage(
                      image: AssetImage("assets/images/home_top_bg.png"),
                      fit: BoxFit.fill)),
              child: Column(
                children: [
                  Container(
                    padding: const EdgeInsets.fromLTRB(40, 0, 40, 10),
                    child: const Flex(
                      direction: Axis.horizontal,
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        NumItem(title: '设备总数', num: '8'),
                        NumItem(title: '设备故障数', num: '16'),
                        NumItem(title: '未修复故障', num: '55'),
                      ],
                    ),
                  ),
                  Container(
                    padding: const EdgeInsets.all(10),
                    decoration: const BoxDecoration(
                        borderRadius: BorderRadius.all(Radius.circular(6)),
                        color: Colors.white60),
                    child: Row(
                      children: [
                        const Icon(
                          Icons.notifications_none_sharp,
                        ),
                        const Text('消息通知'),
                        Container(
                          width: 2,
                          height: 20,
                          margin: const EdgeInsets.symmetric(
                              vertical: 0, horizontal: 5),
                          decoration: const BoxDecoration(color: Colors.black),
                        ),
                        const Expanded(child: Text('今日下单的新用户订单可享8折优...'))
                      ],
                    ),
                  )
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}

class NumItem extends StatelessWidget {
  const NumItem({super.key, required this.title, required this.num});
  final String title;
  final String num;

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      Text(title),
      Container(height: 6),
      Text(num, style: TextStyle(fontSize: 20.sp))
    ]);
  }
}
