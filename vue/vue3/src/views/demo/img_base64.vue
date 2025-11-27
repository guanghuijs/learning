<script setup lang="ts">
  import { onMounted, reactive } from 'vue';
  import {
    NInput,
    NUpload,
    NForm,
    NGrid,
    NFormItemGi,
    NButton,
  } from 'naive-ui';

  import { Page } from '@packages/components';

  function convertImgToBase64(url: string, callback: Function) {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
      let canvas: null | HTMLCanvasElement = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx!.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL('image/png'); // 或 'image/jpeg'
      callback(dataURL);
      canvas = null;
    };
    img.onerror = function () {
      callback(null);
    };
    img.src = url;
  }

  const form = reactive({
    url: 'https://sponsors.vuejs.org/images/likeshop.svg',
    dataUrl: '',
  });

  // 代码复制功能
  import { useClipboard } from '@vueuse/core';
  const { copied, copy } = useClipboard({ source: form.dataUrl });

  onMounted(() => {
    convertImgToBase64(form.url, (dataUrl: string) => {
      form.dataUrl = dataUrl;
    });
  });

  const upFileHandle = (res: any) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      form.dataUrl = e.target!.result as string;
    };
    reader.readAsDataURL(res.file.file);
  };

  const downloadImg = () => {
    let a: null | HTMLAnchorElement = document.createElement('a');
    a.href = form.dataUrl;
    a.download = 'image.png';
    a.click();
    a = null;
  };
</script>

<template>
  <page title="图片base64转换">
    <img class="img" :src="form.url" alt="" />
    <n-form ref="formRef" :label-width="80" :model="form" size="small">
      <n-grid :cols="24" :x-gap="24">
        <n-form-item-gi :span="24" label="输入图片网址">
          <n-input
            type="textarea"
            v-model:value="form.url"
            placeholder="输入文字或者网址"
          />
        </n-form-item-gi>
        <n-form-item-gi :span="24" label="上传图片">
          <n-upload
            list-type="image-card"
            :max="1"
            :on-before-upload="upFileHandle"
          >
            点击上传
          </n-upload>
        </n-form-item-gi>
        <n-form-item-gi :span="24" label="二维码内容">
          <n-input
            type="textarea"
            v-model:value="form.dataUrl"
            placeholder="输入文字或者网址"
          />
        </n-form-item-gi>
        <n-form-item-gi :span="24" label="base64预览">
          <img class="preview" :src="form.dataUrl" alt="" />
        </n-form-item-gi>
        <n-form-item-gi :span="24">
          <n-button @click="downloadImg" type="primary" block>下载</n-button>
        </n-form-item-gi>
        <n-form-item-gi :span="24">
          <n-button @click="copy(form.dataUrl)" type="primary" block>
            {{ copied ? '已复制' : '复制图片base64编码' }}
          </n-button>
        </n-form-item-gi>
      </n-grid>
    </n-form>
  </page>
</template>

<style scoped lang="less">
  img {
    width: 200px;
  }
</style>


<route lang="yaml">
meta:
  title: 图片base64生成器
  sort: 7
</route>
