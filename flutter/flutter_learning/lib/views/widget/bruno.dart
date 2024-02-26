import 'package:bruno/bruno.dart';
import 'package:flutter/material.dart';

class BrunoTest extends StatefulWidget {
  const BrunoTest({super.key});
  static const path = '/bruno_test';

  @override
  State<StatefulWidget> createState() => _BrunoTest();
}

class _BrunoTest extends State<BrunoTest> {
  int _selectedIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // appBar: BrnAppBar(
      //   //自定义左侧icon
      //   leading: const Icon(Icons.add),
      //   themeData: BrnAppBarConfig.light(),
      //   //文本title
      //   title: '标题名称',
      // ),
      appBar: BrnSearchAppbar(
        leading: '类型',
        leadClickCallback: (controller, update) {
          BrnToast.show(controller.text, context);
        },
        searchBarInputChangeCallback: (input) {
          BrnToast.show(input, context);
        },
        searchBarInputSubmitCallback: (input) {
          BrnToast.show(input, context);
        },
      ),
      body: Column(
        children: [
          BrnNormalFormGroup(
            title: '普通分组',
            children: [
              BrnTextInputFormItem(
                title: "示例子项1",
                hint: "请输入",
                onChanged: (newValue) {
                  BrnToast.show("点击触发回调_${newValue}_onChanged", context);
                },
              ),
              BrnTextInputFormItem(
                title: "示例子项2",
                hint: "请输入",
                onChanged: (newValue) {
                  BrnToast.show("点击触发回调_${newValue}_onChanged", context);
                },
              ),
              BrnTextInputFormItem(
                title: "示例子项3",
                hint: "请输入",
                isRequire: true,
                error: '必填',
                onChanged: (newValue) {
                  BrnToast.show("点击触发回调_${newValue}_onChanged", context);
                },
              ),
              BrnStarsFormItem(
                title: "自然到访保护期",
                sumStar: 5,
                value: 2,
                onTip: () {
                  BrnToast.show("点击触发onTip回调", context);
                },
                onAddTap: () {
                  BrnToast.show("点击触发onAddTap回调", context);
                },
                onRemoveTap: () {
                  BrnToast.show("点击触发onRemoveTap回调", context);
                },
                onChanged: (oldValue, newValue) {
                  BrnToast.show(
                      "点击触发回调${oldValue}_${newValue}_onChanged", context);
                },
              ),
              BrnStepInputFormItem(
                title: "自然到访保护期",
                subTitle: "这里是副标题",
                value: 3,
                maxLimit: 5,
                minLimit: 1,
                onTip: () {
                  BrnToast.show("点击触发onTip回调", context);
                },
                onAddTap: () {
                  BrnToast.show("点击触发onAddTap回调", context);
                },
                onRemoveTap: () {
                  BrnToast.show("点击触发onRemoveTap回调", context);
                },
                onChanged: (oldValue, newValue) {
                  BrnToast.show(
                      "点击触发回调${oldValue}_${newValue}_onChanged", context);
                },
              ),
            ],
          )
        ],
      ),
      bottomNavigationBar: BrnBottomTabBar(
        fixedColor: Colors.blue,
        currentIndex: _selectedIndex,
        badgeColor: Colors.red,
        items: const <BrnBottomTabBarItem>[
          BrnBottomTabBarItem(icon: Icon(Icons.abc), title: Text('1')),
          BrnBottomTabBarItem(icon: Icon(Icons.abc), title: Text('1')),
          BrnBottomTabBarItem(icon: Icon(Icons.abc), title: Text('1')),
          BrnBottomTabBarItem(icon: Icon(Icons.abc), title: Text('1')),
          BrnBottomTabBarItem(icon: Icon(Icons.abc), title: Text('1')),
        ],
      ),
    );
  }
}
