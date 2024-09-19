<script setup lang="ts">
  import { ref, watch, onWatcherCleanup } from 'vue';
  const num = ref(0);
  watch(
    () => num.value,
    (value) => {
      const timer = setTimeout(() => {
        console.log(value, '改变发生请求');
      }, 1000);
      onWatcherCleanup(() => {
        clearTimeout(timer);
      });
    }
  );
</script>

<template>
  <button @click="num++">num++</button>
</template>

<style scoped></style>
