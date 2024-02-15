import 'package:flutter/material.dart';
import '../models/navItem.dart';

class NavItemE extends StatelessWidget {
  const NavItemE({Key? key, required this.navItem}) : super(key: key);
  final NavItem navItem;

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.fromLTRB(10, 10, 10, 0),
      child: DecoratedBox(
        decoration: const BoxDecoration(
            gradient: LinearGradient(colors: [
              Color.fromARGB(255, 56, 94, 216),
              Color.fromARGB(255, 172, 243, 6)
            ]),
            borderRadius: BorderRadius.all(Radius.circular(10))),
        child: InkWell(
          onTap: () => {Navigator.of(context).pushNamed(navItem.path)},
          child: Center(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(10, 20, 10, 20),
              child: Text(navItem.title),
            ),
          ),
        ),
      ),
    );
  }
}

class NavItemB extends StatelessWidget {
  const NavItemB({Key? key, required this.navItem}) : super(key: key);
  final NavItem navItem;

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.fromLTRB(10, 10, 10, 10),
      decoration: const BoxDecoration(
        borderRadius: BorderRadius.all(Radius.circular(8)),
        gradient: LinearGradient(colors: [
          Color.fromARGB(255, 56, 94, 216),
          Color.fromARGB(255, 172, 243, 6)
        ]),
      ),
      child: InkWell(
        onTap: () => {Navigator.of(context).pushNamed(navItem.path)},
        child: Center(
          child: Padding(
            padding: const EdgeInsets.all(10),
            child: Text(navItem.title),
          ),
        ),
      ),
    );
  }
}
