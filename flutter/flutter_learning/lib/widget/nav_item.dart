import 'package:flutter/material.dart';

class NavItemE extends StatelessWidget {
  final NavItem navItem;
  const NavItemE({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.fromLTRB(14, 14, 14, 0),
      padding: const EdgeInsets.all(12),
      decoration: const BoxDecoration(
          color: Colors.red,
          borderRadius: BorderRadius.all(Radius.circular(10))),
      child: Row(
        children: [
          IconButton(
            icon: const Icon(Icons.ice_skating),
            onPressed: () {
              Navigator.of(context).pushNamed(navItem['path']);
            },
          ),
          Text(navItem['title']),
        ],
      ),
    );
  }
}
