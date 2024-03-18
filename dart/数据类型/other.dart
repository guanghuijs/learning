void main(List<String> args) {
  String s = '😄';
  print(s);
  print(s.length); // 2
  print(s.runes.length); // 1

  Runes input = new Runes('\u{1f680}');
  print(new String.fromCharCode(input as int));

  // Symbol
  var a = #abc;
  print(a);
  var b = new Symbol('abc');
  print(b);
  print(#abc == new Symbol('act')); // true

  // 声明动态变量
  dynamic foo = 'bar';
  print(foo); // bar
  foo = 666; // 666
}
