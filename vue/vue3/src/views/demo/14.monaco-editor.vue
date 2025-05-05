<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { NSelect } from 'naive-ui';
  import { Page, MonacoEditor, monacoMock } from '@packages/components';

  const language = ref(monacoMock[0].lan);
  const value = ref(monacoMock[0].text);
  watch(language, (val) => {
    value.value = monacoMock.find((item) => item.lan === val)!.text;
  });
</script>

<template>
  <Page
    title="Monaco符文布编译器"
    style="display: flex; flex-direction: column"
  >
    <div class="flex-star">
      <n-select
        style="width: 200px"
        v-model:value="language"
        :options="monacoMock.map(({ lan }) => ({ label: lan, value: lan }))"
      ></n-select>
    </div>
    <MonacoEditor v-model:language="language" v-model:value="value" />
  </Page>
</template>

<style scoped></style>
