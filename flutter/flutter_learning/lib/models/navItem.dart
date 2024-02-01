class NavItem {
  final String path;
  final String title;
  final Function(dynamic) component;
  NavItem({required this.path, required this.title, required this.component});
}
