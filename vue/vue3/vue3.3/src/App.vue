<script setup lang="ts">
  import { ref } from 'vue';
  import ImportedAndComplexTypes from './components/ImportedAndComplexTypes.vue';
  import FenericComponents from './components/FenericComponents.vue';
  import DefineEmits from './components/DefineEmits.vue';
  const name = ref('哈哈哈');
  const change = (res: string) => {
    console.log(res);
  };

  const update = (a: any, b: any, c: any) => {
    console.log(a, b, c);
  };
</script>

<template>
  <input v-model="name" />
  <ImportedAndComplexTypes :name="name" />
  <FenericComponents :people="{ name, age: 18 }"></FenericComponents>
  <DefineEmits @change="change" @update="update"></DefineEmits>
</template>
