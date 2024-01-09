<script setup lang="ts">
  import { Codemirror } from 'vue-codemirror';
  import { javascript } from '@codemirror/lang-javascript';
  import { html } from '@codemirror/lang-html';
  import { oneDark } from '@codemirror/theme-one-dark';
</script>

<template>
  <Codemirror :extensions="[javascript(), html(), oneDark]"></Codemirror>
</template>

<style scoped lang="less"></style>
