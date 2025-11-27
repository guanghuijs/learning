<script setup lang="ts">
  import Comp from './Comp.vue';
  import { ref } from 'vue';
  const count = ref(5);
  const name = ref('王麻子');

  defineProps();
</script>

<template>
  <Comp :count :name></Comp>
  <button @click="count++">count++</button>
</template>
