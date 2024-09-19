<script setup lang="ts">
  const emits = defineEmits<{
    change: [num: string];
    update: [num: number, ...reset: any[]];
  }>();
</script>

<template>
  <div @click="emits('change', 'change')">change</div>
  <div @click="emits('update', 123, 666, 888, 77, 111)">update</div>
</template>

<style scoped></style>
