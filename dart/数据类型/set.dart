void main(){

  var nums = <int>{ 1, 2, 3 };
  print(nums);

  Set animals = new Set();
  animals.add('dog');
  animals.add('cat');
  animals.addAll(['旺财','二哈']);
  print(animals); // {dog, cat, 旺财, 二哈}
  print(animals.toList()); // [dog, cat, 旺财, 二哈]
  print(animals.first); // dog
  print(animals.last); // 二哈

  // 可以通过Set给数组去重
  print([1,1,1,'a','a',2,3,6,48,55,55].toSet().toList()); // [1, a, 2, 3, 6, 48, 55]

  // 交并差
  Set set1 = {1,2,8,9,4,6,12,3};
  Set set2 = {1,2,8,11,18,26,12,3};

  // 交集
  print(set1.intersection(set2)); // {1, 2, 8, 12, 3}
  // 并集
  print(set1.union(set2)); // {1, 2, 8, 9, 4, 6, 12, 3, 11, 18, 26}
  // 差集
  print(set1.difference(set2)); // {9, 4, 6}
}

