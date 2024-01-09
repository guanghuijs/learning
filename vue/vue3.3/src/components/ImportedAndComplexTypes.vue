<script setup lang="ts" generic="">
  import type { People } from '@/types';
  const { name: testName, age: testAge } = withDefaults(defineProps<People>(), {
    name: '张三',
    age: 18,
  });
</script>

<template>
  <h1>宏中的导入和复杂类型支持</h1>
  <div>{{ name }}{{ age }}</div>
  <div>{{ testName }}{{ testAge }}</div>
</template>

<style scoped></style>
