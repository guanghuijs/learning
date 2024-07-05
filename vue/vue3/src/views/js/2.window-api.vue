<script setup lang="ts">
  import { NButton } from 'naive-ui';
  import { g } from 'vitest/dist/suite-6Pt_ep5V';
  import { ref } from 'vue';
  // WebHash无效
  const queryParams = new URLSearchParams(location.search);
  console.log(queryParams);
  // window.history
  const forward = () => {
    history.forward();
  };
  const back = () => {
    history.back();
  };
  const go = (num: number = 0) => {
    history.go(num);
  };
  // console
  console.warn('提醒');
  console.error('你错了');
  console.table({ name: '张三', age: 18 });
  console.table(['451515', '48489489']);
  // window.navigator
  const navigator = ref(window.navigator);
  console.log(navigator);
</script>

<template>
  <h1>url参数</h1>
  <div>{{ queryParams.get('name') }}</div>
  <div>{{ queryParams.get('age') }}</div>
  <h1>window.history</h1>
  <n-button @click="forward" type="primary">forward</n-button>
  <n-button @click="back" type="primary">back</n-button>
  <n-button @click="go" type="primary">go0</n-button>
  <n-button @click="go(1)" type="primary">go1</n-button>
  <n-button @click="go(-1)" type="primary">go-2</n-button>
  <h1>window.navigator</h1>
  <div>{{ navigator }}</div>
</template>

<style scoped></style>
