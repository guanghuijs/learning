mixin Buy {
  void buy(){
    print("buy something");
  }
}

class Person with Buy{
  Person(String s, int i);
}

main(){
  Person person = Person("Dart", 20);
  // 此时Person可以调用buy方法
  person.buy();
}
