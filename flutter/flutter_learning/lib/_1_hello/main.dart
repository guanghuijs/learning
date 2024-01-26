import 'package:flutter/material.dart';

main(){
  runApp(
    MaterialApp(
      /// Scaffold
      /// 翻译过来是脚手架，脚手架的作用就是搭建页面的基本结构；
      /// 所以我们给MaterialApp的home属性传入了一个Scaffold对象，作为启动显示的Widget；
      /// Scaffold也有一些属性，比如appBar和body；
      /// appBar是用于设计导航栏的，我们传入了一个title属性；
      /// body是页面的内容部分，我们传入了之前已经创建好的Center中包裹的一个Text的Widget；
      home: Scaffold(
        appBar: AppBar(
          title: const Text('hello flutter'),
          centerTitle: true,
        ),
        body: const Center(
          child: Text(
            'hello flutter',
            textAlign: TextAlign.center,
            style: TextStyle(
              fontSize: 60,
              fontWeight: FontWeight.bold,
              color: Colors.cyan,
            ),
          ),
        ),
      ),

    )
  );
}