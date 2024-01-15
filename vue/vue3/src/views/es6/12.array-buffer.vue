<template>

</template>

<script lang="ts" setup>
  const buf = new ArrayBuffer(36);
  console.log(buf);
  console.log(buf.slice(0,5))
  for (let bufKey in buf) {
  }
</script>

<style lang="less" scoped>
</style>