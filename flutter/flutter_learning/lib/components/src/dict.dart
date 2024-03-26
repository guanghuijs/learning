import 'package:bruno/bruno.dart';
import 'package:flutter/material.dart';
import '../src/field2.dart';

class DictItem {
  String label;
  dynamic value;
  DictItem({required this.label, this.value});
  @override
  String toString() {
    return 'label:$label;value:$value';
  }
}

Map<String, List<Map>> dictList = {
  'deviceTag': [
    // DictItem(label: '重点设备', value: 'key_point'),
    // DictItem(label: '主要设备', value: 'main'),
    // DictItem(label: '一般设备', value: 'general')
    {'label': '重点设备', 'value': 'key_point'},
    {'label': '主要设备', 'value': 'main'},
    {'label': '一般设备', 'value': 'general'}
  ]
};

// 字典选择
class Dict extends StatefulWidget {
  const Dict(
      {super.key,
      this.label,
      this.onConfirm,
      this.value,
      required this.dictType});
  final String dictType;
  final String? value;
  final String? label;
  final Function(Map dictItem)? onConfirm;

  @override
  State<StatefulWidget> createState() => _Dict();
}

class _Dict extends State<Dict> {
  String value = '';
  @override
  void initState() {
    super.initState();
    setState(() {
      value = getLabel();
    });
  }

  String getLabel() {
    if (widget.value == null || dictList[widget.dictType] == null) return '';
    if (widget.value!.isNotEmpty) {
      return dictList[widget.dictType]!
          .where((element) => element['value'] == widget.value)
          .first['label'];
    }
    return '';
  }

  int getActIndex() {
    int targetIndex = -1;
    final list = dictList[widget.dictType];
    if (list != null) {
      for (int i = 0; i < list.length; i++) {
        if (list[i]['value'] == widget.value) {
          targetIndex = i;
        }
      }
    }
    return targetIndex;
  }

  @override
  Widget build(BuildContext context) {
    return Field(
      label: widget.label,
      isSelect: true,
      disable: true,
      value: value,
      onTap: () {
        setState(() {
          value = getLabel();
        });
        if (dictList[widget.dictType] != null) {
          BrnMultiDataPicker(
            context: context,
            title: '选择${widget.label}',
            delegate: Brn1RowDelegate(
                firstSelectedIndex: getActIndex(),
                list: dictList[widget.dictType]!),
            confirmClick: (selects) {
              int select = selects[0];
              setState(() {
                value = getLabel();
              });
              if (widget.onConfirm != null) {
                setState(() {
                  value = dictList[widget.dictType]![select]['label'];
                });
                widget.onConfirm!(dictList[widget.dictType]![select]);
              }
            },
          ).show();
        } else {
          BrnToast.show('字典不存在', context);
        }
      },
    );
  }
}

class Brn1RowDelegate implements BrnMultiDataPickerDelegate {
  int firstSelectedIndex = 0;

  //
  int secondSelectedIndex = 0;
  int thirdSelectedIndex = 0;

  List list = [];

  Brn1RowDelegate(
      {this.firstSelectedIndex = 0,
      this.secondSelectedIndex = 0,
      required this.list});

  // 定义显示几列内容
  @override
  int numberOfComponent() {
    return 1;
  }

  /// 定义每一列所显示的行数， component 代表列的索引，
  @override
  int numberOfRowsInComponent(int component) {
    if (0 == component) {
      return list.length;
    } else if (1 == component) {
      print(firstSelectedIndex);
      Map<String, List> secondMap = list[firstSelectedIndex];
      return secondMap.values.first.length;
    } else {
      Map<String, List> secondMap = list[firstSelectedIndex];
      Map<String, List> thirdMap = secondMap.values.first[secondSelectedIndex];
      return thirdMap.values.first.length;
    }
  }

  /// 定义某列某行所显示的内容，component 代表列的索引，index 代表 第component列中的第 index 个元素
  @override
  String titleForRowInComponent(int component, int index) {
    if (0 == component) {
      return list[index].values.first;
    }
    // 联级选择
    else if (1 == component) {
      Map<String, List> secondMap = list[firstSelectedIndex];
      List secondList = secondMap.values.first;
      //return secondList[index];
      return secondList[index].keys.first;
    } else {
      Map<String, List> secondMap = list[firstSelectedIndex];
      Map<String, List> thirdMap = secondMap.values.first[secondSelectedIndex];
      return thirdMap.values.first[index];
    }
  }

  /// 定义每列内容的高度
  @override
  double? rowHeightForComponent(int component) {
    return null;
  }

  /// 定义选择更改后的操作
  @override
  selectRowInComponent(int component, int row) {
    if (0 == component) {
      firstSelectedIndex = row;
    } else if (1 == component) {
      secondSelectedIndex = row;
    } else {
      thirdSelectedIndex = row;
      print('_thirdSelectedIndex  is selected to $thirdSelectedIndex');
    }
  }

  /// 定义初始选中的行数
  @override
  int initSelectedRowForComponent(int component) {
    if (0 == component) {
      return firstSelectedIndex;
    }
    return 0;
  }
}
