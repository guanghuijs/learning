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
          child: ListView(
            children: [
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
              const CodeBlock(
                code: '''
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
          ''',
                title: '关键代码',
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
              const CodeBlock(
                code: '''
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
          ''',
                title: '关键代码',
              ),
              Container(
                margin: const EdgeInsets.only(top: 1),
                padding: const EdgeInsets.all(10),
                decoration: const BoxDecoration(
                  color: Colors.white,
                ),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(
                      child: TextFormField(
                        textAlign: TextAlign.right,
                        style: const TextStyle(fontSize: 20),
                        decoration: InputDecoration(
                            prefixIcon: Container(
                              padding:
                                  const EdgeInsets.symmetric(horizontal: 10),
                              width: 100,
                              child: const Row(
                                // mainAxisAlignment: MainAxisAlignment.end,
                                children: [
                                  Text(
                                    '姓名',
                                    style: TextStyle(fontSize: 20),
                                  ),
                                ],
                              ),
                            ),
                            filled: true,
                            fillColor: const Color(0xfff2f2f2),
                            border: InputBorder.none,
                            hintText: '请输入',
                            hintStyle: const TextStyle(
                                fontSize: 20, color: Color(0xff999999))),
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
              const CodeBlock(
                code: '''
  Container(
    margin: const EdgeInsets.only(top: 1),
    padding: const EdgeInsets.all(10),
    decoration: const BoxDecoration(
      color: Colors.white,
    ),
    child: Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Expanded(
          child: TextFormField(
            textAlign: TextAlign.right,
            style: const TextStyle(fontSize: 20),
            decoration: InputDecoration(
                prefixIcon: Container(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 10),
                  width: 100,
                  child: const Row(
                    // mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      Text(
                        '姓名',
                        style: TextStyle(fontSize: 20),
                      ),
                    ],
                  ),
                ),
                filled: true,
                fillColor: const Color(0xfff2f2f2),
                border: InputBorder.none,
                hintText: '请输入',
                hintStyle: const TextStyle(
                    fontSize: 20, color: Color(0xff999999))),
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
          ''',
                title: '关键代码',
              ),
              InkWell(
                onTap: () {
                  BrnToast.show('哈哈哈哈', context);
                },
                child: Container(
                  margin: const EdgeInsets.only(top: 1),
                  padding: const EdgeInsets.all(10),
                  decoration: const BoxDecoration(
                    color: Colors.white,
                  ),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Expanded(
                        child: TextFormField(
                          textAlign: TextAlign.right,
                          enabled: false,
                          style: const TextStyle(fontSize: 20),
                          decoration: InputDecoration(
                              prefixIcon: Container(
                                padding:
                                    const EdgeInsets.symmetric(horizontal: 10),
                                width: 100,
                                child: const Row(
                                  // mainAxisAlignment: MainAxisAlignment.end,
                                  children: [
                                    Text(
                                      '姓名',
                                      style: TextStyle(fontSize: 20),
                                    ),
                                  ],
                                ),
                              ),
                              suffixIcon: const SizedBox(
                                width: 0,
                                child: Icon(
                                  Icons.keyboard_arrow_right,
                                  color: Color(0xff999999),
                                ),
                              ),
                              filled: true,
                              fillColor: const Color(0xfff2f2f2),
                              border: InputBorder.none,
                              hintText: '请输入',
                              hintStyle: const TextStyle(
                                  fontSize: 20, color: Color(0xff999999))),
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
              ),
              const CodeBlock(
                code: '''
  InkWell(
    onTap: () {
      BrnToast.show('哈哈哈哈', context);
    },
    child: Container(
      margin: const EdgeInsets.only(top: 1),
      padding: const EdgeInsets.all(10),
      decoration: const BoxDecoration(
        color: Colors.white,
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(
            child: TextFormField(
              textAlign: TextAlign.right,
              enabled: false,
              style: const TextStyle(fontSize: 20),
              decoration: InputDecoration(
                  prefixIcon: Container(
                    padding:
                        const EdgeInsets.symmetric(horizontal: 10),
                    width: 100,
                    child: const Row(
                      // mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        Text(
                          '姓名',
                          style: TextStyle(fontSize: 20),
                        ),
                      ],
                    ),
                  ),
                  suffixIcon: const SizedBox(
                    width: 0,
                    child: Icon(
                      Icons.keyboard_arrow_right,
                      color: Color(0xff999999),
                    ),
                  ),
                  filled: true,
                  fillColor: const Color(0xfff2f2f2),
                  border: InputBorder.none,
                  hintText: '请输入',
                  hintStyle: const TextStyle(
                      fontSize: 20, color: Color(0xff999999))),
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
  ),
          ''',
                title: '关键代码',
              ),
            ],
          ),
        ),
      ),
    );
  }
}
