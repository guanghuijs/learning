<script setup lang="ts">
  // https://www.npmjs.com/package/vue-codemirror
  import { Codemirror } from 'vue-codemirror';
  import { javascript } from '@codemirror/lang-javascript';
  import { html } from '@codemirror/lang-html';
  import { vue } from '@codemirror/lang-vue';
  import { oneDark } from '@codemirror/theme-one-dark';

  import { useSysStore } from '@/stores/sys';
  import { computed, unref } from 'vue';

  const { mode } = useSysStore();

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

  const extensions = computed(() =>
    unref(mode) === 'dark'
      ? [javascript(), html(), vue(), oneDark]
      : [javascript(), html(), vue()]
  );
</script>

<template>
  <div class="codemirror-content">
    <!-- https://www.npmjs.com/package/vue-codemirror -->
    <Codemirror
      :disabled="true"
      :model-value="modelValue"
      :extensions="extensions"
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
