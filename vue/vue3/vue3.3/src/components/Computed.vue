<script setup lang="ts">
  import { computed, ref, watchEffect } from 'vue';
  const count = ref(0);
  const isEven = computed(() => count.value % 2 === 0);
  watchEffect(() => console.log(isEven.value));
</script>

<template>
  <h1>3.4之前的Computed</h1>
  <div>{{ count }}</div>
  <button @click="count++">count++</button>
  <button @click="count += 2">count+2</button>
</template>

<style scoped></style>
