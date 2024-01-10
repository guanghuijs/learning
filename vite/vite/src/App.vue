<script setup lang="ts">
import { RouterView } from "vue-router";
import axios from "axios";
import { onMounted } from "vue";

onMounted(() => {
  axios.get("/basic-api/phoneUser").then((res) => {
    console.log(res);
  });
});
</script>

<template>
  <RouterView />
</template>

<style lang="less"></style>
