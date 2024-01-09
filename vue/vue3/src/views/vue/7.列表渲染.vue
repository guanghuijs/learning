<template>
  <h3>列表</h3>
  <template v-for="({ name, sex, age }, index) in data.list" :key="index">
    <div>{{ name }}</div>
    <div>{{ sex }}</div>
    <div>{{ age }}</div>
  </template>
  <h3>遍历对象</h3>
  <template v-for="(key, value, index) in data.bookObj" :key="index">
    <div>{{ key }} {{value}} {{index}}</div>
  </template>
</template>

<script setup lang="ts">
const Mock = require('mockjs');
import { ref } from "vue";
const data = ref(Mock.mock({
  'list|5-10':[
    {
      'name': '@ctitle',
      'sex|1': [0,1],
      'age|0-100': 1,
    }
  ],
  'bookObj': {
    'name': '@ctitle',
    'pages|200-400': 1,
    'author': '@cname'
  }
}));
</script>

<style scoped>

</style>