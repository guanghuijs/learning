// import 'package:code_preview/code_preview.dart';
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

  validator() {
    formKey.currentState?.save();
    formKey.currentState?.validate();
  }

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
          child: ListView(
            children: [
              const SizedBox(
                height: 1,
              ),
              // Container(
              //   padding: const EdgeInsets.all(10),
              //   child: const CodePreview(
              //     className: 'LearnColor',
              //   ),
              // ),
              const SizedBox(
                height: 1,
              ),
              SelfInput(
                lable: '用户名',
                onInput: (value) {
                  validator();
                },
                validator: (String value) {
                  if (value.isEmpty) {
                    return '不能吃饭';
                  } else {
                    return '';
                  }
                },
              ),
              SelfInput(
                lable: '学校',
                onInput: (value) {
                  validator();
                },
                error: '我不是渣渣辉',
                validator: (String value) {
                  if (value.isEmpty) {
                    return '不能睡觉';
                  } else {
                    return '';
                  }
                },
              ),
              SelfInput(
                lable: '班级',
                isRequired: true,
                onInput: (value) {
                  validator();
                },
                validator: (String value) {
                  if (value.isEmpty) {
                    return '不能打豆豆';
                  } else {
                    return '';
                  }
                },
              ),
              TextButton(
                  onPressed: () {},
                  child: const SizedBox(
                    height: 40,
                    child: Center(
                      child: Text('提交'),
                    ),
                  )),
              TextButton(
                  onPressed: () {
                    formKey.currentState?.reset();
                  },
                  child: const SizedBox(
                    height: 40,
                    child: Center(
                      child: Text('清空'),
                    ),
                  ))
            ],
          )),
    );
  }
}

class SelfInput extends StatefulWidget {
  const SelfInput(
      {super.key,
      this.lable,
      this.placeholder,
      this.onInput,
      this.validator,
      this.error,
      this.isRequired});
  final String? lable;
  final String? placeholder;
  final Function? onInput;
  final Function? validator;
  final String? error;
  final bool? isRequired;

  @override
  State<StatefulWidget> createState() => _SelfInput();
}

class _SelfInput extends State<SelfInput> {
  late String error;
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(top: 1),
      color: Colors.white,
      child: TextFormField(
        textAlign: TextAlign.right,
        decoration: InputDecoration(
            border: InputBorder.none,
            contentPadding: const EdgeInsets.fromLTRB(0, 12, 20, 0),
            hintText: widget.placeholder ?? '请输入${widget.lable}',
            hintStyle: const TextStyle(fontSize: 14, color: Color(0xffaaaaaa)),
            error: (() {
              return error != ''
                  ? Transform(
                      transform: Matrix4.translationValues(20, -15, 1),
                      child: Text(
                        error,
                        style: const TextStyle(color: Colors.red, fontSize: 12),
                      ))
                  : null;
            })(),
            prefixIcon: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                const SizedBox(
                  width: 20,
                ),
                Text(
                  widget.isRequired == true ? '*' : '',
                  style: const TextStyle(color: Colors.red),
                ),
                SizedBox(
                  height: 20,
                  child: Text(
                    widget.lable ?? 'lable',
                    style: const TextStyle(fontSize: 16),
                  ),
                ),
                const SizedBox(
                  width: 5,
                ),
              ],
            )),
        validator: (value) {
          print('validator');
          if (widget.validator != null) {
            setState(() {
              error = widget.validator!(value);
            });
          }
        },
        onChanged: (value) {
          if (widget.onInput != null) {
            widget.onInput!(value);
          }
        },
      ),
    );
  }
}
