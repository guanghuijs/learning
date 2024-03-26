import 'package:flutter/material.dart';

class Field extends StatelessWidget {
  const Field(
      {super.key,
      this.label,
      this.placeholder,
      this.validator,
      this.isRequire,
      this.onChanged,
      this.disable,
      this.isSelect,
      this.onTap,
      this.value});
  final String? value;
  final String? label;
  final String? placeholder;
  final bool? disable;
  final bool? isSelect;
  final bool? isRequire;
  final String? Function(String val)? validator;
  final Function(String val)? onChanged;
  final Function? onTap;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        if (onTap != null) {
          onTap!();
        }
      },
      child: Container(
        margin: const EdgeInsets.only(top: 1),
        padding: EdgeInsets.fromLTRB(0, 0, isSelect == true ? 0 : 15, 0),
        decoration: const BoxDecoration(
          color: Colors.white,
        ),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Expanded(
              child: TextFormField(
                controller: value != null
                    ? TextEditingController.fromValue(
                        TextEditingValue(text: value!))
                    : null,
                textAlign: TextAlign.right,
                enabled: disable == true ? false : true,
                style: const TextStyle(fontSize: 18),
                decoration: InputDecoration(
                    prefixIcon: Container(
                      width: 150,
                      padding: const EdgeInsets.symmetric(horizontal: 10),
                      child: Row(
                        children: [
                          Text(
                            isRequire == true ? '*' : '',
                            style: const TextStyle(color: Colors.red),
                          ),
                          Text(
                            label ?? 'label',
                            style: const TextStyle(fontSize: 18),
                          ),
                        ],
                      ),
                    ),
                    suffixIcon: isSelect == true
                        ? const SizedBox(
                            child: Icon(
                              Icons.keyboard_arrow_right,
                              color: Color(0xff999999),
                            ),
                          )
                        : null,
                    filled: true,
                    fillColor: Colors.white,
                    errorStyle: const TextStyle(height: 2),
                    border: InputBorder.none,
                    hintText: placeholder ??
                        '请${isSelect == true ? '选择' : '输入'}$label',
                    hintStyle: const TextStyle(
                        fontSize: 20, color: Color(0xff999999))),
                onChanged: (value) {
                  if (onChanged != null) {
                    onChanged!(value);
                  }
                },
                validator: (value) {
                  if (validator != null) {
                    return validator!(value!);
                  }
                  return null;
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
