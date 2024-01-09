<script setup lang="ts">
  import { ref } from 'vue';
  import Computed from '@/components/Computed.vue';
  import SameNameShorthand from '@/components/Same-nameShorthand.vue';
  import DefineModel from '@/components/DefineModel.vue';

  const name = ref('渣渣辉');
  const age = ref(18);
</script>

<template>
  <Computed></Computed>
  <SameNameShorthand :name :age />
  <DefineModel v-model:value="name"></DefineModel>
</template>
