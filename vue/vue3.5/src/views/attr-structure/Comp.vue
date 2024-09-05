<script setup lang="ts">
  import { watch } from 'vue';

  const { count = 0, name = '张三' } = defineProps<{
    count: number;
    name: string;
  }>();

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
