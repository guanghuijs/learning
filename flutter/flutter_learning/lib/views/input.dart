import 'package:bruno/bruno.dart';
import 'package:flutter/material.dart';
import '../widget/input.dart';

class PageInput extends StatefulWidget {
  const PageInput({super.key});
  static const path = '/Sinput';

  @override
  State<StatefulWidget> createState() => _PageInput();
}

class _PageInput extends State<PageInput> {
  final formKey = GlobalKey<FormState>();

  Map error = {'name': '', 'phone': ''};

  void validator() {
    formKey.currentState?.save();
    formKey.currentState?.validate();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('input'),
        centerTitle: true,
      ),
      body: Form(
        key: formKey,
        child: Column(
          children: [
            InputTextField(
              lable: '姓名',
              isRequired: true,
              validator: (value) {
                if (value.isEmpty) {
                  return '不能为空';
                }
              },
              onChange: (value) {
                validator();
              },
            ),
            TextButton(
                onPressed: () => validator(),
                child: const Center(
                  child: Text('提交'),
                )),
            BrnTextInputFormItem(
              title: "姓名",
              hint: "请输入姓名",
              error: error['name'],
              onChanged: (newValue) {
                setState(() {
                  if (newValue.isEmpty) {
                    error['name'] = '姓名不能为空';
                  } else {
                    error['name'] = '';
                  }
                });
              },
            ),
          ],
        ),
      ),
    );
  }
}
