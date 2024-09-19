<script setup lang="ts" generic="T">
  defineProps<{
    people: T;
  }>();
</script>

<template>
  <div>{{ people }}</div>
</template>

<style scoped></style>
