<script setup lang="ts"></script>

<template>
  <div class="page-title">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
  .page-title {
    padding: 16px 20px;
    font-weight: bold;
    font-size: 16px;
    background: white;
    border-bottom: 1px solid #eee;
  }
</style>
