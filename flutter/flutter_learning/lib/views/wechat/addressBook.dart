import 'package:flutter/material.dart';

class PageAddressBook extends StatefulWidget {
  const PageAddressBook({super.key});

  @override
  State<StatefulWidget> createState() => _PageAddressBook();
}

class _PageAddressBook extends State<PageAddressBook> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('通信录'),
      ),
    );
  }
}
