<template>
  <div class="editor" ref="editorRef" v-bind="$attrs"></div>
</template>

<script lang="ts" setup>
  import { ref, onMounted, watch } from 'vue';
  import * as monaco from 'monaco-editor';
  import { mock } from './mock';

  const language = defineModel('language', {
    default: mock[0].lan,
  });

  const value = defineModel('value', {
    default: mock[0].text,
  });

  watch(language, () => {
    const model = monaco.editor.createModel(value.value);
    monaco.editor.setModelLanguage(model, language.value);
  });

  const editorRef = ref<HTMLTextAreaElement | null>(null);

  onMounted(() => {
    monacoInit();
  });

  function monacoInit() {
    monaco.editor.create(editorRef.value!, {
      value: value.value,
      language: language.value,
    });
  }
</script>

<style scoped>
  .editor {
    width: 100%;
    padding: 20px 10px;
    height: 100px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
</style>
