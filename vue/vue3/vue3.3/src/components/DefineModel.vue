<script setup lang="ts">
  // const props = withDefaults(
  //   defineProps<{
  //     value: string;
  //   }>(),
  //   {
  //     value: '我系渣渣辉',
  //   }
  // );

  const modelValue = defineModel();
</script>

<template>
  <h1>DefineModel</h1>
  <input v-model="modelValue" />
</template>

<style scoped></style>
