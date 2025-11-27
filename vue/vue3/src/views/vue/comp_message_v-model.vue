<template>
  <h3>父组件v-model绑定给子组件的变量</h3>
  <div>{{ value }}{{ title }}{{ name }}</div>
  <h3>子组件</h3>
  <v-model-test
    class="com"
    style="font-size: 10px"
    v-model="value"
    v-model:title="title"
    v-model:name="name"
  ></v-model-test>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import VModelTest from '@/components/vModelTest.vue';
  const value = ref<number>(1);
  const title = ref<string>('我系渣渣辉');
  const name = ref<string>('wgh');
</script>

<route lang="yaml">
meta:
  title: 双向数据通信
  sort: 16
</route>
