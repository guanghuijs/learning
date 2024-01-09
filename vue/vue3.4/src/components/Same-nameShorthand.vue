<script setup lang="ts">
  defineProps<{
    name: string;
    age: number;
  }>();
</script>

<template>
  <h1>同名简写</h1>
  <div>{{ name }}--{{ age }}</div>
</template>

<style scoped></style>
