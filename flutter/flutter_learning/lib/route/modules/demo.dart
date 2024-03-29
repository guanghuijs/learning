import 'package:flutter/material.dart';
import '../../models/routes.dart';
import '../../pages/demo/下拉刷新.dart';
import '../../pages/demo/页面通讯.dart';
import '../../pages/demo/表单校验.dart';
import '../../pages/demo/popup.dart';

final Map<String, Widget Function(BuildContext)> demoRoutes = {
  MyHomePage.path: (ctx) => MyHomePage(),
  PageCommunication.path: (ctx) => const PageCommunication(),
  PageCommunicationTwo.path: (ctx) => const PageCommunicationTwo(),
  FormVerify.path: (ctx) => const FormVerify(),
  PopupUse.path: (ctx) => const PopupUse(),
};

final List<Menu> demoMenus = [
  Menu(path: PageCommunication.path, title: '页面通信', meta: MenuMata()),
  Menu(path: FormVerify.path, title: '表单校验', meta: MenuMata()),
  Menu(path: '', title: '防抖', meta: MenuMata()),
  Menu(path: MyHomePage.path, title: '下拉刷新,触底加载', meta: MenuMata()),
  Menu(path: '', title: '模拟数据', meta: MenuMata()),
  Menu(path: '', title: 'tab吸顶效果', meta: MenuMata()),
  Menu(path: '', title: 'TODOLIST', meta: MenuMata()),
  Menu(path: PopupUse.path, title: '弹出层', meta: MenuMata()),
];
