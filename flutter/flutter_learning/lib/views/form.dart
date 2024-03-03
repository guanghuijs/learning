import 'package:bruno/bruno.dart';
import 'package:flutter/material.dart';

class FormPage extends StatefulWidget {
  const FormPage({super.key});
  static const path = '/from';

  @override
  State<StatefulWidget> createState() => _FormPage();
}

class User {
  String userName;
  User({required this.userName});
}

class _FormPage extends State<FormPage> {
  final formKey = GlobalKey<FormState>();
  User user = User(userName: '');

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('人员管理'),
        centerTitle: true,
        actions: const [Text('新增')],
      ),
      body: Form(
          key: formKey,
          child: Column(
            children: [
              TextFormField(
                decoration: const InputDecoration(labelText: '用户名'),
                validator: (value) {
                  if (value!.isEmpty) {
                    return '不能为空';
                  }
                  return null;
                },
                onChanged: (value) {
                  user.userName = value;
                },
              ),
              BrnTextInputFormItem(
                title: '用户名',
              ),
              Container(
                margin: const EdgeInsets.all(20),
                child: TextButton(
                  onPressed: () {
                    formKey.currentState?.save();
                    formKey.currentState?.validate();
                    debugPrint(user.userName);
                  },
                  style: const ButtonStyle(
                      backgroundColor: MaterialStatePropertyAll(Colors.blue)),
                  child: const SizedBox(
                    width: double.infinity,
                    height: 50,
                    child: Center(
                      child: Text(
                        '提交',
                        style: TextStyle(color: Colors.white),
                      ),
                    ),
                  ),
                ),
              )
            ],
          )),
    );
  }
}

class SelfInput extends StatefulWidget {
  const SelfInput(
      {super.key,
      required this.title,
      required this.controller,
      required this.onChange,
      this.error});
  final String title;
  final TextEditingController controller;
  final Function(String value)? onChange;
  final Function? error;

  @override
  State<StatefulWidget> createState() => _SelfInput();
}

class _SelfInput extends State<SelfInput> {
  String error = '';

  @override
  Widget build(BuildContext context) {
    return BrnTextInputFormItem(
      title: widget.title,
      error: error,
      onChanged: widget.onChange,
    );
  }
}
