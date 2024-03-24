import 'package:flutter/material.dart';
import 'package:bruno/bruno.dart';
import 'package:flutter/services.dart';

import 'package:flutter_highlight/flutter_highlight.dart';
import 'package:flutter_highlight/theme_map.dart';

class CodeBlock extends StatefulWidget {
  const CodeBlock({super.key, this.title, this.show, required this.code});
  final String code;
  final String? title;
  final bool? show;

  @override
  State<StatefulWidget> createState() => _CodeBlock();
}

class _CodeBlock extends State<CodeBlock> {
  bool show = false;

  @override
  void initState() {
    super.initState();
    show = widget.show ?? false;
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      padding: const EdgeInsets.fromLTRB(16, 0, 16, 0),
      margin: const EdgeInsets.only(top: 1),
      child: Column(
        children: [
          Container(
            padding: const EdgeInsets.symmetric(vertical: 0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  widget.title ?? '代码展示',
                  style: const TextStyle(fontWeight: FontWeight.bold),
                ),
                Row(
                  children: [
                    IconButton(
                        onPressed: () {
                          Clipboard.setData(ClipboardData(text: widget.code))
                              .then((value) {
                            BrnToast.show('复制成功~', context);
                          });
                        },
                        icon: const Icon(
                          Icons.copy_all,
                          size: 18,
                        )),
                    IconButton(
                        onPressed: () {
                          setState(() {
                            show = !show;
                          });
                        },
                        icon: const Icon(
                          Icons.code_sharp,
                          size: 20,
                        )),
                  ],
                )
              ],
            ),
          ),
          AnimatedOpacity(
            opacity: show ? 1.0 : 0.0,
            duration: const Duration(seconds: 2),
            child: show
                ? Container(
                    width: double.infinity,
                    padding: const EdgeInsets.fromLTRB(0, 0, 0, 10),
                    child: HighlightView(
                      '''

${widget.code}''',
                      language: 'dart',
                      theme: themeMap['a11y-dark']!,
                    ),
                  )
                : Container(
                    height: 0,
                  ),
          ),
        ],
      ),
    );
  }
}
