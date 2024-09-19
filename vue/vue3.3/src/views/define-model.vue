<script setup lang="ts">
  import DefineModel from '@/components/DefineModel.vue';
  import { ref } from 'vue';

  const cont = ref(100);
  const num = ref(99);
</script>

<template>
  <DefineModel v-model:cont="cont" v-model:num="num"></DefineModel>
</template>

<style scoped></style>
