import 'package:flutter/material.dart';
import '../views/widget/drawer.dart';
import '../views/prop/color.dart';
import '../views/widget/appbar.dart';
import '../models/navItem.dart';
import '../views/widget/stateful.dart';
import '../views/widget/父子通讯.dart';
import '../views/widget/混合状态管理.dart';
import '../views/widget/container.dart';
import '../views/wechat/home.dart';
import '../views/widget/使用阿里云图标.dart';

class Routes {
  static final List<NavItem> route = [
    NavItem(
        path: LearnColor.routeName,
        title: '颜色属性',
        component: (ctx) => const LearnColor()),
    NavItem(
        path: LearnAppbar.routeName,
        title: 'Appbar',
        component: (ctx) => const LearnAppbar()),
    NavItem(
        path: DrawerTest.routeName,
        title: '抽屉',
        component: (ctx) => DrawerTest()),
    NavItem(
        path: LearnStatefulWidget.routeName,
        title: '状态组件',
        component: (xtx) => const LearnStatefulWidget()),
    NavItem(
        path: ParentWidget.routeName,
        title: '父子通讯',
        component: (xtx) => const ParentWidget()),
    NavItem(
        path: MixInState.routeName,
        title: '混合状态管理',
        component: (xtx) => const MixInState()),
    NavItem(
        path: StudyContainer.routeName,
        title: '盒子',
        component: (ctx) => const StudyContainer()),
    NavItem(
        path: WeChatHome.routeName,
        title: '微信',
        component: (ctx) => const WeChatHome()),
    NavItem(
        path: IconfontPage.routeName,
        title: '使用阿里云图标11',
        component: (ctx) => const IconfontPage()),
  ];

  static Map<String, Widget Function(BuildContext)> routes = {
    LearnColor.routeName: (ctx) => const LearnColor(),
    LearnAppbar.routeName: (ctx) => const LearnAppbar(),
    DrawerTest.routeName: (ctx) => DrawerTest(),
    LearnStatefulWidget.routeName: (xtx) => const LearnStatefulWidget(),
    ParentWidget.routeName: (xtx) => const ParentWidget(),
    MixInState.routeName: (xtx) => const MixInState(),
    StudyContainer.routeName: (xtx) => const StudyContainer(),
    WeChatHome.routeName: (xtx) => const WeChatHome(),
    IconfontPage.routeName: (xtx) => const IconfontPage(),
  };

  static const String initialRoute = '/';
}
