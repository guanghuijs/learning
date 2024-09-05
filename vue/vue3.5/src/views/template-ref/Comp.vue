<script setup lang="ts">
  import { ref } from 'vue';
  const num = ref(0);
  defineExpose({
    addNum: () => num.value++,
  });
</script>

<template>
  <div>{{ num }}</div>
</template>
