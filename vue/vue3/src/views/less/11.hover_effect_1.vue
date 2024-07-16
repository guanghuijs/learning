<script setup lang="ts"></script>

<template>
  <div class="target"></div>
</template>

<style scoped lang="less">
  .target {
    width: 100px;
    height: 100px;
    background: url('/public/logo.webp') center / 100% no-repeat;
    position: relative;
    cursor: pointer;
    border-radius: 50%;
    overflow: hidden;
    &::before,
    &::after {
      content: '';
      position: absolute;
      inset: 0;
    }
    &::before {
      background: rgba(0, 0, 0, 0.7);
    }
    &::after {
      background: inherit;
      clip-path: circle(0 at 50% 50%);
      transition: 0.5s;
    }
    &:hover::after {
      clip-path: circle(50% at 50% 50%);
    }
  }
</style>
