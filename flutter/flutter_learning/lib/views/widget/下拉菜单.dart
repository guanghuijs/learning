import 'package:flutter/material.dart';

class DropMenu extends StatefulWidget {
  const DropMenu({super.key});
  static const path = '/drop_menu';

  @override
  State<StatefulWidget> createState() => _DropMenu();
}

class _DropMenu extends State<DropMenu> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('人员管理'),
        centerTitle: true,
        actions: const [Text('新增')],
      ),
      body: Column(
        children: [
          Container(
            color: Colors.white,
            child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  QueryParams(
                    list: [Params(label: '不限', value: 'buxian')],
                  ),
                  PopupMenuButton<String>(
                    onSelected: (String? newValue) {
                      // 当用户选择一个新值时调用
                      print(newValue);
                    },
                    itemBuilder: (BuildContext context) {
                      return <PopupMenuItem<String>>[
                        const PopupMenuItem<String>(
                            value: 'One', child: Text('One')),
                        const PopupMenuItem<String>(
                            value: 'Two', child: Text('Two')),
                        const PopupMenuItem<String>(
                            value: 'Three', child: Text('Three')),
                      ];
                    },
                  )
                ]),
          )
        ],
      ),
    );
  }
}

class QueryParams extends StatelessWidget {
  const QueryParams({required this.list, super.key});
  final List<Params> list;

  @override
  Widget build(Object context) {
    return DropdownMenu(
        menuHeight: 1000,
        initialSelection: 'buxian',
        onSelected: (value) {},
        dropdownMenuEntries: list
            .map((params) =>
                DropdownMenuEntry(value: params.value, label: params.label))
            .toList());
  }
}

class Params {
  final String label;
  final String value;
  Params({required this.label, required this.value});
}
