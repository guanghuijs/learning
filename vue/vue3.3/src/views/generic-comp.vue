<script setup lang="ts">
  import GenericComponents from '@/components/GenericComponents.vue';
</script>

<template>
  <GenericComponents :people="{ name: 'wgh', age: '18' }"></GenericComponents>
  <GenericComponents
    :people="{ name: 'wgh', age: '18', class: '超级一班' }"
  ></GenericComponents>
</template>

<style scoped></style>
