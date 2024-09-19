<script setup lang="ts">
  import { watch } from 'vue';

  // 自定义属性结构解析,可在结构解析时赋默认值
  const { count = 0, name = '张三' } = defineProps<{
    count: number;
    name: string;
  }>();

  // 监听自定义属性改变
  watch(
    () => count,
    (value) => {
      console.log('count', value);
    }
  );
</script>

<template>
  <div>{{ count }}</div>
  <div>{{ name }}</div>
</template>

<style scoped></style>
