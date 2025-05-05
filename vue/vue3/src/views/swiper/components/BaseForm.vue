<script setup lang="ts">
  import { NForm, NFormItemGi, NGrid, NInput } from 'naive-ui';
</script>

<template>
  <n-form ref="formRef" v-if="0" :label-width="80" :model="form" size="small">
    <n-grid :cols="4" :x-gap="20" item-responsive>
      <n-form-item-gi span="0:4 900:4 900:2" label="二维码内容">
        <n-input
          type="textarea"
          v-model:value="text"
          placeholder="输入文字或者网址"
        />
      </n-form-item-gi>
    </n-grid>
  </n-form>
</template>

<style scoped></style>
