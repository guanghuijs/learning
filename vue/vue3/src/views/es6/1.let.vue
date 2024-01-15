<template></template>

<script setup lang="ts">
  let tmp = 123;

  {
    // tmp = 666; // ReferenceError: Cannot access 'tmp2' before initialization
    let tmp;
    console.log(tmp);
  }

  // let a = 0;
  // let a = 1;

  // {
  //   console.log(hi);
  //   var hi = '哈哈哈';
  // }
</script>

<style scoped lang="less"></style>
