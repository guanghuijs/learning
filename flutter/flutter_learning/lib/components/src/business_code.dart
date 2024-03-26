import 'package:flutter/material.dart';

// 获取业务ID
class BusinessCode extends StatefulWidget {
  const BusinessCode(
      {super.key, this.label, this.onChange, required this.businessId});
  final String businessId;
  final String? label;
  final Function(String code)? onChange;

  @override
  State<StatefulWidget> createState() => _BusinessCode();
}

class _BusinessCode extends State<BusinessCode> {
  String code = '';
  @override
  void initState() {
    super.initState();
    refresh();
  }

  void refresh() {
    // getBusinessCode(widget.businessId).then((value) {
    //   if (widget.onChange != null) {
    //     setState(() {
    //       code = value.data;
    //     });
    //     widget.onChange!(value.data);
    //   }
    // });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(top: 1),
      decoration: const BoxDecoration(
        color: Colors.white,
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(
            child: TextFormField(
              controller:
                  TextEditingController.fromValue(TextEditingValue(text: code)),
              textAlign: TextAlign.right,
              readOnly: true,
              style: const TextStyle(fontSize: 18),
              decoration: InputDecoration(
                  prefixIcon: Container(
                    width: 100,
                    padding: const EdgeInsets.symmetric(horizontal: 10),
                    child: Row(
                      children: [
                        Text(
                          widget.label ?? '编码',
                          style: const TextStyle(fontSize: 18),
                        ),
                      ],
                    ),
                  ),
                  suffixIcon: InkWell(
                    onTap: () {
                      refresh();
                    },
                    child: const Icon(Icons.refresh_outlined),
                  ),
                  filled: true,
                  fillColor: Colors.white,
                  errorStyle: const TextStyle(height: 2),
                  border: InputBorder.none,
                  hintStyle:
                      const TextStyle(fontSize: 20, color: Color(0xff999999))),
              onChanged: (value) {
                if (widget.onChange != null) {
                  widget.onChange!(value);
                }
              },
            ),
          ),
        ],
      ),
    );
  }
}
