
void main() {
  var p = {'name':'w','age':18};
  Map map = new Map();
  map['name'] = 'g';
  map['sex'] = '男';

  // 属性访问
  print(map['sex']);

  // 判断map是否存在某个键
  print(p.containsKey('name'));

  p.putIfAbsent('school', () => '蓝翔');
  print(p); // {name: w, age: 18, school: 蓝翔}
  p.putIfAbsent('school', () => '新东方烹饪');
  print(p); // {name: w, age: 18, school: 蓝翔}

  // 获取map中所有的key和value,可迭代对象
  print(p.keys); // (name, age, school)
  print(p.values); // (w, 18, 蓝翔)

  p.remove('name');
  print(p); // {age: 18, school: 蓝翔}

  // 当key满足时删除该属性
  p.removeWhere((key, value) => key == 'age');
  print(p); // {school: 蓝翔}
}