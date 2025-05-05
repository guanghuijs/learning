<script setup lang="ts">
  import { mock } from 'mockjs';
  import { ref } from 'vue';
  const data = ref(Array.from({ length: 20 }, () => mock('@csentence')));

  const handle = () => {
    data.value.unshift(...Array.from({ length: 20 }, () => mock('@csentence')));
  };
</script>

<template>
  <div class="content">
    <div @click="handle">add</div>
    <div class="item" v-for="(text, i) in data">{{ i }}{{ text }}</div>
  </div>
</template>

<style scoped>
  .item {
    height: 50px;
  }
</style>
