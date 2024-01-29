main() {
  List<String> testList = ['a','b', 'c'];
  List<Map<String, dynamic>> list = [
    {
      'path': '/prop/color',
      'title': '颜色属性'
    },
    {
      'path': '/widget/appbar',
      'title': 'Appbar'
    },
  ];

  list.forEach((element) {
    print(element['path']);
  });
  // /prop/color
  // /widget/appbar
  final b = list.map((e) => {e['path']:e['title']});
  print(b);
  print([...b]); // ({path: /prop/color, title: 颜色属性}, {path: /widget/appbar, title: Appbar})
}