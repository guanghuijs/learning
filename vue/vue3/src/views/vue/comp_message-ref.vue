<template>
  <Parent title="啦啦啦" :wgh="{ name: '1', age: 1 }" ref="parentRef" />
  <button @click="parentRef.reColor()">按钮</button>
</template>

<script lang="ts" setup>
  import Parent from '@/components/Parent.vue';
  import { onMounted, ref } from 'vue';
  const parentRef = ref();

  onMounted(() => {
    console.log(parentRef);
  });
</script>

<route lang="yaml">
meta:
  title: 组件实例通信
  sort: 17
</route>
