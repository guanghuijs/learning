<script setup lang="ts"></script>

<template>
  <div class="container">
    <div v-for="i in 20">{{ i }}</div>
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
