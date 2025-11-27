<script setup lang="ts"></script>

<template>
  <div class="container">
    <div v-for="i in 20" :key="i"
    >{{ i }}</div>
  </div>
</template>

<style scoped lang="scss">
  .container {
    @for $i from 1 through 20 {
      div:nth-child(#{$i}) {
        background: rgba(random(255), random(255), random(255));
      }
    }
    @for $i from 1 to 20 {
      div:nth-child(#{$i}) {
        color: blueviolet;
        font-size: 20px;
        text-align: center;
      }
    }
  }
</style>

<route lang="yaml">
meta:
  title: 循环
  sort: 20
</route>
