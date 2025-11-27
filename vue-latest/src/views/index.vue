<script setup lang="ts">
import {ref} from "vue";

const data = ref(666)
</script>

<template>
  <div>{{data}}</div>
</template>

<route lang="yaml">
meta:
  title: '首页'
</route>

<style scoped lang="scss"></style>
