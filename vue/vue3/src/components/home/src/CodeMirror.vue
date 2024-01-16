<script setup lang="ts">
  import { Codemirror } from 'vue-codemirror';
  import { javascript } from '@codemirror/lang-javascript';
  import { html } from '@codemirror/lang-html';
  import { vue } from '@codemirror/lang-vue';
  import { oneDark } from '@codemirror/theme-one-dark';

  withDefaults(
    defineProps<{
      modelValue: string;
      show?: boolean;
    }>(),
    {
      modelValue: '',
      show: true,
    }
  );
</script>

<template>
  <div class="codemirror-content">
    <Codemirror
      :model-value="modelValue"
      :extensions="[javascript(), html(), vue(), oneDark]"
    ></Codemirror>
  </div>
</template>

<style scoped lang="less">
  .codemirror-content {
    height: 100%;
    background-size: 600% 600%;
    animation: gradientBG 5s ease infinite;
    :deep(.cm-editor) {
      height: 100%;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
</style>
