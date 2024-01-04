<script setup lang="ts">
  const name = defineModel('张三');
</script>

<template>
  <input v-model="name" />
</template>

<style scoped></style>
