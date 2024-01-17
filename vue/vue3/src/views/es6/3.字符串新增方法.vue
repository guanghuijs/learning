<template>
  <input v-model="code" />
  <div>UTF-16 代码单元：{{ String.fromCharCode(...code.split(',')) }}</div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  String.fromCharCode(0x20bb7);
  // "ஷ"
  console.log(String.fromCharCode(0x20bb7));

  {
    let regex = new RegExp(/XYZ/, 'i');
    console.log(regex);
    regex.test('xyz');
    console.log(regex.test('xyz'));

    let count = 10_000_000_000;
    console.log(count); //10000000000
  }

  const code = ref<string>('');

  console.log(function (a, b, c) {}.length);

  const isEven = (n: number) => n % 2 === 0;

  console.log(isEven(80));

  const arr = (first, ...tail) => [first, tail];
  console.log(arr(1, 1, 5, 6, 4, 78));

  const wgh = {
    name: '吴光辉',
    sayHi: function () {
      console.log(this.name);
    },
  };

  wgh.sayHi();

  function foo() {
    console.log(this.id);
  }

  foo.call({ id: '100100' });
</script>

<style scoped lang="less"></style>
