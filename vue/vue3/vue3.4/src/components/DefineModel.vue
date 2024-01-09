<script setup lang="ts">
  const modelValue = defineModel('value', { required: true, default: '我系渣渣辉' });
</script>

<template>
  <h1>DefineModel</h1>
  <input v-model="modelValue" />
</template>

<style scoped></style>
