<script setup lang="ts">
  import {
    NInput,
    NUpload,
    NForm,
    NGrid,
    NFormItemGi,
    NButton,
  } from 'naive-ui';
  import { computed, reactive } from 'vue';

  const form = reactive({
    btoa: '123456',
  });

  const show = computed(() => {
    return {
      btoa: btoa(form.btoa),
      atob: atob(btoa(form.btoa)),
    };
  });
</script>

<template>
  <n-form ref="formRef" :label-width="80" :model="form" size="small">
    <h1>base64加密解密</h1>
    <n-grid :cols="24" :x-gap="24">
      <n-form-item-gi :span="24" :label="'加密结果显示' + show.btoa">
        <n-input type="textarea" v-model:value="form.btoa" placeholder="输入" />
      </n-form-item-gi>
      <n-form-item-gi :span="24" :label="'解密结果显示' + show.atob">
        <n-input type="textarea" v-model:value="form.btoa" placeholder="输入" />
      </n-form-item-gi>
    </n-grid>
  </n-form>
</template>

<style scoped lang="less"></style>
