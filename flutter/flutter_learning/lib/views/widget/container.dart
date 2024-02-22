import 'package:flutter/material.dart';

class StudyContainer extends StatelessWidget {
  const StudyContainer({super.key});

  static const routeName = '/widget/container';

  @override
  Widget build(BuildContext context) {
    const imageUrl = NetworkImage(
        'https://img2.baidu.com/it/u=4018347939,983587929&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800');

    return Scaffold(
      backgroundColor: const Color(0xffffffff),
      appBar: AppBar(
        title: const Text('盒子'),
        centerTitle: true,
      ),
      body: ListView(
        children: [
          // 基本盒子
          Container(
            color: Colors.pink,
            height: 100,
            child: const Text('基本盒子'),
          ),
          // 盒子基本装饰
          Container(
            margin: const EdgeInsets.all(20),
            padding: const EdgeInsets.all(20),
            height: 100,
            decoration: const BoxDecoration(
                color: Colors.yellow,
                // BoxShadow对象的属性包括：
                // color: 阴影的颜色。
                // blurRadius: 阴影的模糊半径，定义了阴影的模糊程度。
                // spreadRadius: 阴影的扩展半径，定义了阴影的大小。
                // offset: 阴影的偏移量，定义了阴影从容器边缘开始的距离。
                boxShadow: [
                  BoxShadow(
                      color: Colors.black38,
                      offset: Offset(0, 10),
                      blurRadius: 10,
                      spreadRadius: 2)
                ],
                borderRadius: BorderRadius.all(Radius.circular(12))),
            child: const Text('盒子装饰'),
          ),
          // 背景图片(使用网络图片)
          Container(
            height: 100,
            decoration:
                const BoxDecoration(image: DecorationImage(image: imageUrl)),
            child: const Text(
              '背景图片(使用网络图片)',
              style: TextStyle(color: Colors.blue),
            ),
          ),
          // 装饰背景(本地资源)
          Container(
            height: 100,
            decoration: const BoxDecoration(
                image: DecorationImage(
                    image: AssetImage('assets/images/home_top_bg.png'))),
            child: const Text(
              '背景图片(使用网络图片)',
              style: TextStyle(color: Colors.blue),
            ),
          ),
          Container(
            height: 200,
            decoration: const BoxDecoration(
                color: Color(0xff000000),
                image: DecorationImage(image: imageUrl)),
            child: const Text(
              '背景图片填充方式(BoxFit.contain(默认))',
            ),
          ),
          Container(
            height: 200,
            decoration: const BoxDecoration(
                color: Color(0xff000000),
                image: DecorationImage(image: imageUrl, fit: BoxFit.cover)),
            child: const Text(
              '背景图片填充方式(BoxFit.cover)',
            ),
          ),
          Container(
            height: 200,
            decoration: const BoxDecoration(
                color: Color(0xff000000),
                image: DecorationImage(image: imageUrl, fit: BoxFit.fill)),
            child: const Text(
              '背景图片填充方式(BoxFit.fill)',
            ),
          ),
          Container(
            height: 200,
            decoration: const BoxDecoration(
                color: Color(0xff000000),
                image: DecorationImage(image: imageUrl, fit: BoxFit.fitHeight)),
            child: const Text(
              '背景图片填充方式(BoxFit.fitHeight)',
            ),
          ),
          Container(
            height: 200,
            decoration: const BoxDecoration(
                color: Color(0xff000000),
                image: DecorationImage(image: imageUrl, fit: BoxFit.fitWidth)),
            child: const Text(
              '背景图片填充方式(BoxFit.fitWidth)',
            ),
          ),
          // 背景渐变
          Container(
            height: 200,
            decoration: const BoxDecoration(
                gradient: RadialGradient(colors: [Colors.amber, Colors.green])),
            child: const Text(
              '背景渐变,径向渐变',
            ),
          ),
          Container(
            height: 200,
            decoration: const BoxDecoration(
                gradient: LinearGradient(
                    colors: [Colors.amber, Colors.green],
                    transform: GradientRotation(45))),
            child: const Text(
              '背景渐变,线性渐变加角度',
            ),
          ),
          // 边框
          Container(
            height: 200,
            margin: const EdgeInsets.all(20),
            decoration: BoxDecoration(
                // border: Border(
                //   top: BorderSide(
                //       color: Colors.red, width: 2.0, style: BorderStyle.solid),
                //   bottom: BorderSide(
                //       color: Colors.blue, width: 1.0, style: BorderStyle.solid),
                //   left: BorderSide(
                //       color: Colors.green,
                //       width: 3.0,
                //       style: BorderStyle.solid),
                //   right: BorderSide(
                //       color: Colors.purple,
                //       width: 4.0,
                //       style: BorderStyle.solid),
                // ),
                // border: Border.all(
                //     color: Colors.black, width: 2, style: BorderStyle.solid),
                border: Border.all(),
                borderRadius: const BorderRadius.all(Radius.circular(12)),
                gradient: const LinearGradient(
                    colors: [Colors.amber, Colors.green],
                    transform: GradientRotation(45))),
            child: const Text(
              '边框',
            ),
          ),
          Container(
            height: 100,
          )
        ],
      ),
    );
  }
}
