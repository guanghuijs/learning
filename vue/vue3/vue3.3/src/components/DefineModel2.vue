<script setup lang="ts">
  // const props = defineProps({
  //   value: {
  //     type: String,
  //     default: '我系渣渣辉',
  //   },
  // });

  const modelValue = defineModel('value', { required: true, default: '我系渣渣辉' });
</script>

<template>
  <h1>DefineModel2</h1>
  <input v-model="modelValue" />
</template>

<style scoped></style>
