// ·JavaScript 中，异步调用通过 Promise 来实现
// async 函数返回一个 Promise。 await 用于等待 Promise
// ·Dart 中，异步调用通过 Future 来实现
// async 函数返回一个 Future，await 用于等待 Future
// ·Future 详情
// https://api.dart.dev/stable/dart-async/Future-class.html

import 'package:http/http.dart' as http;

Future getIPAdress() async {
  final res = await http.get('https://httpbin.org/ip' as Uri);
  print(res.toString());
}

void main(List<String> args) {
  getIPAdress();
}
