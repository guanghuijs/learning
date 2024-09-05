<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue';
  import Comp from './Comp.vue';

  // before
  const domDiv = ref<HTMLDivElement>();
  // after
  const div = useTemplateRef('domDiv');
  const divInnerText = () => {
    div.value.innerText = '张三6666';
  };

  // before
  // const comp = ref<HTMLDivElement>();
  // after
  const useTComp = useTemplateRef('comp');

  const addCompNum = () => {
    useTComp.value.addNum();
    // comp.value.addNum();
  };
</script>

<template>
  <div ref="domDiv"></div>
  <button @click="divInnerText">innerText</button>
  <Comp ref="comp"></Comp>
  <button @click="addCompNum">comp num++</button>
</template>

<style scoped></style>
