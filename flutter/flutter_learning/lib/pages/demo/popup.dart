import 'package:bruno/bruno.dart';
import 'package:flutter/material.dart';
import 'package:GHUI/components/i.dart';

class PopupUse extends StatelessWidget {
  const PopupUse({super.key});
  static const path = '/demo/popup';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('popup'),
        centerTitle: true,
      ),
      body: ListView(
        children: [
          InkWell(
            onTap: () {
              showDialog(
                  context: context,
                  builder: (context) {
                    return PopupBase(
                      title: 'popup',
                      height: 400,
                      confirmText: '呵呵哈哈哈或',
                      confirm: () {
                        BrnToast.show('确认', context);
                      },
                    );
                  });
            },
            child: Container(
              padding: const EdgeInsets.all(15),
              margin: const EdgeInsets.only(top: 1),
              color: Colors.white,
              child: const Text('弹出层1'),
            ),
          ),
          const CodeBlock(
            code: '''
class PopupBase extends StatelessWidget {
  const PopupBase(
      {super.key,
      this.content,
      this.title,
      this.confirmText,
      this.cancelText,
      this.confirm,
      this.cancel,
      this.height});
  final Widget? content;
  final String? title;
  final String? confirmText;
  final String? cancelText;
  final void Function()? confirm;
  final void Function()? cancel;
  final double? height;

  @override
  Widget build(BuildContext context) {
    return Stack(children: [
      ModalBarrier(
        dismissible: false,
        color: Colors.black.withOpacity(0.5),
      ),
      BrnBottomPickerWidget(
        pickerTitleConfig: BrnPickerTitleConfig(titleContent: title ?? ''),
        confirm: confirmText ?? '确认',
        onConfirmPressed: () {
          if (confirm != null) {
            confirm!();
          }
        },
        cancel: cancelText ?? '取消',
        onCancelPressed: () {
          if (cancel != null) {
            cancel!();
          } else {
            Navigator.of(context).pop();
          }
        },
        contentWidget: Container(
          color: const Color(0xfff2f2f2),
          height: height,
          child: content ?? Container(),
        ),
      )
    ]);
  }
}
''',
            title: '弹框代码',
          ),
          const CodeBlock(
            code: '''
  showDialog(
      context: context,
      builder: (context) {
        return PopupBase(
          title: 'popup',
          height: 400,
          confirmText: '呵呵哈哈哈或',
          confirm: () {
            BrnToast.show('确认', context);
          },
        );
      });
''',
            title: '使用弹框',
          ),
          InkWell(
            onTap: () {
              showModalBottomSheet(
                  builder: (context) {
                    return PopupBasics();
                  },
                  context: context);
            },
            child: Container(
              padding: const EdgeInsets.all(10),
              margin: const EdgeInsets.only(top: 1),
              color: Colors.white,
              child: const Text('弹出层1'),
            ),
          )
        ],
      ),
    );
  }
}

class PopupBase extends StatelessWidget {
  const PopupBase(
      {super.key,
      this.content,
      this.title,
      this.confirmText,
      this.cancelText,
      this.confirm,
      this.cancel,
      this.height});
  final Widget? content;
  final String? title;
  final String? confirmText;
  final String? cancelText;
  final void Function()? confirm;
  final void Function()? cancel;
  final double? height;

  @override
  Widget build(BuildContext context) {
    return Stack(children: [
      ModalBarrier(
        dismissible: false,
        color: Colors.black.withOpacity(0.5),
      ),
      BrnBottomPickerWidget(
        pickerTitleConfig: BrnPickerTitleConfig(titleContent: title ?? ''),
        confirm: confirmText ?? '确认',
        onConfirmPressed: () {
          if (confirm != null) {
            confirm!();
          }
        },
        cancel: cancelText ?? '取消',
        onCancelPressed: () {
          if (cancel != null) {
            cancel!();
          } else {
            Navigator.of(context).pop();
          }
        },
        contentWidget: Container(
          color: const Color(0xfff2f2f2),
          height: height,
          child: content ?? Container(),
        ),
      )
    ]);
  }
}

class PopupBasics extends StatelessWidget {
  const PopupBasics(
      {super.key,
      this.content,
      this.title,
      this.confirmText,
      this.cancelText,
      this.confirm,
      this.cancel,
      this.height});
  final Widget? content;
  final String? title;
  final String? confirmText;
  final String? cancelText;
  final void Function()? confirm;
  final void Function()? cancel;
  final double? height;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
          color: Color(0xfff2f2f2),
          borderRadius: BorderRadius.all(Radius.circular(10))),
      child: Column(
        children: [
          Container(
            padding: const EdgeInsets.fromLTRB(15, 0, 15, 0),
            height: 50,
            decoration: const BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.only(
                    topRight: Radius.circular(10),
                    topLeft: Radius.circular(10))),
            child: Row(
              children: [
                InkWell(
                  child: const Text('取消'),
                  onTap: () {},
                ),
                const Expanded(
                    child: SizedBox(
                  width: double.infinity,
                  child: Center(
                    child: Text(
                      '标题',
                      style:
                          TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                    ),
                  ),
                )),
                InkWell(
                  child: const Text('确认'),
                  onTap: () {},
                ),
              ],
            ),
          ),
          Container(
            height: height,
            color: const Color(0xfff2f2f2),
          )
        ],
      ),
    );
  }
}
