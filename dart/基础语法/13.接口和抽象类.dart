class Animal{
  String name;
  int age;
  Animal(this.name,this.age);

  void say() {
    print('我是 $name');
  }
}

class Cat extends Animal {
  Cat(name,age): super(name,age);
}

class Dog implements Animal {
  @override
  String name;

  @override
  int age;

  Dog(this.name,this.age);

  @override
  void say() {}
}

abstract class Behavior {
  void run();
  void eat();
}

class Pig extends Animal implements Behavior {
  Pig(name,age): super(name,age);

  @override
  void run() {
    print('我是$name,我会run run run');
  }

  @override
  void eat() {
    print('我是$name,我会吃吃吃');
  }
}

void main() {
  Pig pig = new Pig('小香猪', 3);
  pig.run();
  pig.eat();
}