<script setup lang="ts">
  import DefineEmits from '@/components/DefineEmits.vue';

  const fn = (res, ...reset) => {
    console.log(res, reset);
  };
</script>

<template>
  <define-emits @change="fn" @update="fn" />
</template>

<style scoped></style>
