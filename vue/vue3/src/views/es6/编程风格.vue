<template>
  <div :test="`${strTest}`">1</div>
  <div>{{ number }}</div>
  <div v-for="({ name, age }, index) in arr">
    {{ name }}
  </div>
</template>

<script lang="ts" setup>
  // 全局常量和线程安全
  import { ref } from 'vue';

  const [a, b, c] = [1, 2, 3];
  // 字符串
  let strTest = 'str';

  // 10.结构赋值
  const usePerson = () => {
    const person = {
      name: 'wgh',
      age: 18,
    };

    const sayHello = () => {
      console.log('hello');
    };

    const selfIntroduction = () => {
      console.log(`我是${person.name},`);
    };

    return [person, { sayHello, selfIntroduction }];
  };

  const [] = usePerson();

  const { num: number } = { num: 1 };

  const testFn = (query: { body: number }) => {
    console.log(query);
  };

  const arr = [
    { name: 'wgh', age: 18 },
    { name: 'whg', age: 19 },
  ];

  testFn({ body: 1 });
</script>

<route lang="yaml">
meta:
  title: 编程风格
  sort: 10
</route>
