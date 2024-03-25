import 'package:GHUI/components/i.dart';
import 'package:bruno/bruno.dart';
import 'package:flutter/material.dart';

class FormVerify extends StatefulWidget {
  const FormVerify({super.key});
  static const path = '/form_verify';

  @override
  State<StatefulWidget> createState() => _FormVerify();
}

class _FormVerify extends State<FormVerify> {
  final _formKey = GlobalKey<FormState>();

  validate() {
    _formKey.currentState?.save();
    _formKey.currentState?.validate();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('form'),
        centerTitle: true,
        actions: [
          TextButton(
              onPressed: () {
                validate();
              },
              child: const Text('表单提交'))
        ],
      ),
      body: Form(
        key: _formKey,
        child: Container(
          padding: const EdgeInsets.all(10),
          child: Column(
            children: [
              Container(
                margin: const EdgeInsets.only(top: 1),
                padding: const EdgeInsets.all(10),
                decoration: const BoxDecoration(
                  color: Colors.white,
                ),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                        width: 100,
                        padding: const EdgeInsets.fromLTRB(0, 8, 10, 0),
                        child: const Text(
                          '姓名',
                          textDirection: TextDirection.rtl,
                        )),
                    Expanded(
                      child: TextFormField(
                        textAlign: TextAlign.right,
                        decoration: const InputDecoration(
                            isCollapsed: true,
                            filled: true,
                            fillColor: Color(0xfff2f2f2),
                            contentPadding: EdgeInsets.fromLTRB(10, 10, 10, 10),
                            border: InputBorder.none,
                            hintText: '请输入'),
                        validator: (value) {
                          if (value!.isEmpty) {
                            return '不能为空';
                          }
                        },
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                margin: const EdgeInsets.only(top: 1),
                color: Colors.white,
                padding: const EdgeInsets.all(10),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                        width: 100,
                        padding: const EdgeInsets.fromLTRB(0, 8, 10, 0),
                        child: const Text(
                          '姓名',
                          textDirection: TextDirection.rtl,
                        )),
                    Expanded(
                      child: Row(
                        children: [
                          Expanded(
                            child: InkWell(
                              onTap: () {
                                BrnToast.show('点击', context);
                              },
                              child: TextFormField(
                                decoration: const InputDecoration(
                                    hintTextDirection: TextDirection.rtl,
                                    enabled: false,
                                    isCollapsed: true,
                                    fillColor: Color(0xfff2f2f2),
                                    contentPadding:
                                        EdgeInsets.fromLTRB(10, 10, 10, 10),
                                    border: InputBorder.none,
                                    hintText: '请输入'),
                                validator: (value) {
                                  if (value!.isEmpty) {
                                    return '不能为空';
                                  }
                                },
                              ),
                            ),
                          ),
                          const Icon(Icons.keyboard_arrow_right)
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                margin: const EdgeInsets.only(top: 1),
                color: Colors.white,
                padding: const EdgeInsets.all(10),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                        padding: const EdgeInsets.fromLTRB(0, 8, 10, 0),
                        child: const Text('姓名')),
                    Expanded(
                      child: TextFormField(
                        decoration: const InputDecoration(
                            isCollapsed: true,
                            fillColor: Color(0xffffffff),
                            contentPadding: EdgeInsets.fromLTRB(10, 10, 10, 10),
                            border: InputBorder.none,
                            hintText: '请输入'),
                        validator: (value) {
                          if (value!.isEmpty) {
                            return '不能为空';
                          }
                        },
                      ),
                    ),
                  ],
                ),
              ),
              const CodeBlock(
                code: '''
            Container(
              color: Colors.white,
              padding: const EdgeInsets.all(10),
              child: TextFormField(
                decoration: const InputDecoration(
            filled: true,
            contentPadding: EdgeInsets.all(10),
            border: InputBorder.none,
            hintText: '请输入'),
                validator: (value) {
          if (value!.isEmpty) {
            return '不能为空';
          }
                },
              ),
            ),
          ''',
                title: '关键代码',
              ),
              Container(
                margin: const EdgeInsets.only(top: 1),
                color: Colors.white,
                padding: const EdgeInsets.all(10),
                child: TextFormField(
                  decoration: const InputDecoration(
                      filled: true,
                      contentPadding: EdgeInsets.all(0),
                      border: InputBorder.none,
                      hintText: '请输入',
                      hintStyle: TextStyle(height: 0)),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return '不能为空';
                    }
                  },
                ),
              ),
              Container(
                color: Colors.white,
                padding: const EdgeInsets.all(10),
                margin: const EdgeInsets.only(top: 1),
                child: TextFormField(
                  decoration: const InputDecoration(
                      contentPadding: EdgeInsets.all(10),
                      border: InputBorder.none,
                      hintText: '请输入'),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return '不能为空';
                    }
                  },
                ),
              ),
              Container(
                margin: const EdgeInsets.only(top: 1),
                padding: const EdgeInsets.all(10),
                decoration: const BoxDecoration(
                  color: Colors.white,
                ),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Container(
                        width: 100,
                        height: 45,
                        color: Colors.red,
                        child: const Center(
                          child: Text(
                            '姓名',
                            textDirection: TextDirection.rtl,
                          ),
                        )),
                    Expanded(
                      child: TextFormField(
                        textAlign: TextAlign.right,
                        decoration: const InputDecoration(
                            // isCollapsed: true,
                            filled: true,
                            fillColor: Color(0xfff2f2f2),
                            contentPadding: EdgeInsets.fromLTRB(10, 10, 10, 10),
                            border: InputBorder.none,
                            hintText: '请输入'),
                        validator: (value) {
                          if (value!.isEmpty) {
                            return '不能为空';
                          }
                          return null;
                        },
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                margin: const EdgeInsets.only(top: 1),
                color: Colors.white,
                padding: const EdgeInsets.all(10),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                        width: 100,
                        height: 45,
                        color: Colors.red,
                        child: const Row(
                          mainAxisAlignment: MainAxisAlignment.end,
                          children: [
                            Text(
                              '设备名称',
                              textDirection: TextDirection.rtl,
                            ),
                          ],
                        )),
                    Expanded(
                      child: Row(
                        children: [
                          Expanded(
                            child: InkWell(
                              onTap: () {
                                BrnToast.show('点击', context);
                              },
                              child: TextFormField(
                                decoration: const InputDecoration(
                                    hintTextDirection: TextDirection.ltr,
                                    enabled: false,
                                    isCollapsed: true,
                                    fillColor: Color(0xfff2f2f2),
                                    // contentPadding:
                                    //     EdgeInsets.fromLTRB(10, 10, 10, 10),
                                    border: InputBorder.none,
                                    hintText: '请输入'),
                                validator: (value) {
                                  if (value!.isEmpty) {
                                    return '不能为空';
                                  }
                                },
                              ),
                            ),
                          ),
                          const Icon(Icons.keyboard_arrow_right)
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
