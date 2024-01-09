<script setup lang="ts" generic="T">
  defineProps<{
    people: T;
  }>();
</script>

<template>
  <h1>通用组件</h1>
  <div>{{ people }}</div>
</template>

<style scoped></style>
