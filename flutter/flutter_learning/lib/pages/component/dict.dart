import 'package:flutter/material.dart';
import '../../components/i.dart';

class DictTest extends StatefulWidget {
  const DictTest({super.key});
  static const path = '/dict_test';

  @override
  State<StatefulWidget> createState() => _DictTest();
}

class _DictTest extends State<DictTest> {
  String deviceTag = '';
  String name = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('字典选择组件'),
        centerTitle: true,
      ),
      body: RefreshIndicator(
          onRefresh: () async {
            print('1111111');
          },
          child: ListView(
            children: [
              Text(deviceTag),
              Text(name),
              Dict(
                label: '设备标记',
                dictType: 'deviceTag',
                value: deviceTag,
                onConfirm: (value) {
                  setState(() {
                    deviceTag = value['value'];
                  });
                },
              ),
              Field(
                label: '姓名',
                onChanged: (val) {
                  setState(() {
                    name = val;
                  });
                },
              ),
            ],
          )),
    );
  }
}
