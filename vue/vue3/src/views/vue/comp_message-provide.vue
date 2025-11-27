<template>
  <Parent></Parent>
</template>

<script lang="ts" setup>
  import Parent from '@/components/Parent.vue';
  import { provide, ref } from 'vue';
  const msg = ref('消息');
  const sayHello = () => {
    console.log('我是祖先组件啦啦啦啦啦');
  };
  provide('provideObj', {
    msg,
    sayHi: sayHello,
  });
</script>

<route lang="yaml">
meta:
  title: 依赖注入
  sort: 18
</route>
