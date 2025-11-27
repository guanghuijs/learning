<script lang="ts" setup>
  import { NInput } from 'naive-ui';
</script>

<template>
  <div class="css-within">
    <NInput></NInput>
  </div>
  <div class="css-within">
    <NInput></NInput>
  </div>
  <div class="css-within">
    <NInput></NInput>
  </div>
</template>
<style lang="scss" scoped>
  .css-within {
    padding: 20px;
    background: white;
    &:focus-within {
      background: red;
    }
  }
</style>

<route lang="yaml">
meta:
  title: focus-within
  sort: 20
</route>
