<script setup lang="ts">
  import { ref } from 'vue';
  import { NButton } from 'naive-ui';

  const num = ref(0);
  const arr = Array.from({ length: 10 }, (_, i) => i);

  const fn1 = () => {
    num.value = 0;
    arr.forEach(() => num.value++);
  };
  const fn2 = () => {
    num.value = 0;
    arr.forEach((item) => {
      if (item === 5) {
        num.value = item;
        throw Error('我妈喊我回家吃饭了');
      }
    });
  };
  const fn3 = () => {
    num.value = 0;
    arr.forEach((item, i, _this) => {
      if (item === 5) {
        num.value = item;
        _this.splice(i);
      }
    });
  };
</script>

<template>
  <div>{{ num }}</div>
  <div>{{ arr }}</div>
  <n-button @click="fn1">fn1</n-button>
  <n-button @click="fn2">fn2</n-button>
  <n-button @click="fn3">fn3</n-button>
</template>

<style scoped></style>

<route lang="yaml">
meta:
  title: 数组终结foreach循环
  sort: 5
</route>
