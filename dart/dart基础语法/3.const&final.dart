main(){
  // const修饰的集合子元素也不能被修改，而final是可以的。
  const list = [1,2,4,5];
  final list1 = [1,2,3,4];
  // list[0] = 66; // Cannot modify an unmodifiable list
  list1[0] = 999;
  print(list1); // [999, 2, 3, 4]
  // const会复用已有对象，而final不会
  const list3 = [1,2,3];
  const list4 = [1,2,3];
  print(list3 == list4); // true
  final list5 = [1,2,3];
  final list6 = [1,2,3];
  print(list5 == list6); // false
}