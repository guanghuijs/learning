import 'package:flutter/material.dart';

class InputTextField extends StatelessWidget {
  const InputTextField(
      {super.key,
      this.lable,
      this.isRequired,
      this.placeholder,
      this.validator,
      this.onChange});

  final String? lable;
  final bool? isRequired;
  final String? placeholder;
  final Function(dynamic value)? validator;
  final Function(dynamic value)? onChange;

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(top: 1),
      padding: const EdgeInsets.fromLTRB(10, 1, 10, 10),
      decoration: const BoxDecoration(color: Colors.white, boxShadow: [
        BoxShadow(color: Colors.black26, spreadRadius: 2, blurRadius: 10)
      ]),
      child: Row(
        children: [
          Text(
            isRequired == true ? '*' : '',
            style: const TextStyle(color: Colors.red, fontSize: 18),
          ),
          Container(
            width: 5,
          ),
          Text(lable ?? 'lable'),
          Container(
            width: 10,
          ),
          Expanded(
            child: TextFormField(
              decoration: InputDecoration(
                hintText: placeholder ?? '请输入${lable}',
                errorStyle: const TextStyle(height: 0),
                // border: const UnderlineInputBorder(borderSide: BorderSide.none),
                contentPadding: const EdgeInsets.symmetric(vertical: 0),
              ),
              validator: (value) {
                debugPrint(value);
                if (validator != null) {
                  return validator!(value);
                }
                return null;
              },
              onChanged: (value) => {
                if (onChange != null) {onChange!(value)}
              },
            ),
          )
        ],
      ),
    );
  }
}
