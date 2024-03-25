import 'package:flutter/material.dart';

class Field extends StatelessWidget {
  const Field(
      {super.key,
      this.lable,
      this.placeholder,
      this.validator,
      this.isRequire,
      this.onChanged,
      this.disable,
      this.isSelect});
  final String? lable;
  final String? placeholder;
  final bool? disable;
  final bool? isSelect;
  final bool? isRequire;
  final String? Function(String val)? validator;
  final Function(String val)? onChanged;

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(top: 1),
      padding: const EdgeInsets.all(10),
      decoration: const BoxDecoration(
        color: Colors.white,
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
              width: 100,
              height: 45,
              child: Row(
                children: [
                  Text(
                    isRequire == true ? '*' : '',
                    style: const TextStyle(color: Colors.red),
                  ),
                  Text(
                    lable ?? 'lable',
                    textDirection: TextDirection.rtl,
                  )
                ],
              )),
          Expanded(
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Expanded(
                  child: TextFormField(
                    decoration: InputDecoration(
                        isCollapsed: true,
                        // filled: true,
                        // fillColor: const Color(0xfff2f2f2),
                        contentPadding:
                            const EdgeInsets.fromLTRB(10, 10, 10, 10),
                        border: InputBorder.none,
                        enabled: disable == true ? false : true,
                        hintText: placeholder ??
                            '请${isSelect == true ? '选择' : '输入'}$lable'),
                    validator: (value) {
                      if (validator != null) {
                        return validator!(value!);
                      }
                      return null;
                    },
                    onChanged: (value) {
                      if (onChanged != null) {
                        onChanged!(value);
                      }
                    },
                  ),
                ),
                SizedBox(
                  height: 45,
                  child: isSelect == true
                      ? const Icon(
                          Icons.keyboard_arrow_right,
                          color: Color(0xff999999),
                        )
                      : const Text(''),
                )
              ],
            ),
          )
        ],
      ),
    );
  }
}
