<script setup lang="ts"></script>

<template>
  <div class="container">
    <div v-for="i in 20">{{ i }}</div>
  </div>
</template>

<style scoped lang="scss">
  .container {
    $i: 1;
    div {
      width: 50px;
      line-height: 50px;
      display: inline-block;
      text-align: center;
      background: palevioletred;
    }
    @while $i < 10 {
      div:nth-child(#{$i}) {
        background: blue;
        $i: $i + 1;
      }
    }

    @while $i < 16 {
      div:nth-child(#{$i}) {
        background: blueviolet;
        $i: $i + 1;
      }
    }

    @while $i <= 20 {
      div:nth-child(#{$i}) {
        background: gold;
        $i: $i + 1;
      }
    }
  }
</style>

<route lang="yaml">
meta:
  title: while循环
  sort: 9
</route>
