<script setup lang="ts">
  import { ref } from 'vue';
  import ImportedAndComplexTypes from './components/ImportedAndComplexTypes.vue';
  import FenericComponents from './components/FenericComponents.vue';
  import DefineEmits from './components/DefineEmits.vue';
  import DefineModel from './components/DefineModel.vue';
  import DefineModel2 from './components/DefineModel2.vue';
  import Computed from './components/Computed.vue';
  const name = ref('哈哈哈');
  const change = (res: string) => {
    console.log(res);
  };

  const update = (a: any, b: any, c: any) => {
    console.log(a, b, c);
  };

  const defineModelValue = ref('我系渣渣辉');
</script>

<template>
  <input v-model="name" />
  <ImportedAndComplexTypes :name="name" />
  <FenericComponents :people="{ name, age: 18 }"></FenericComponents>
  <DefineEmits @change="change" @update="update"></DefineEmits>
  <DefineModel v-model="defineModelValue"></DefineModel>
  <div>{{ defineModelValue }}</div>
  <input type="text" v-model="defineModelValue" />
  <DefineModel2 v-model:value="defineModelValue"></DefineModel2>
  <Computed></Computed>
</template>
