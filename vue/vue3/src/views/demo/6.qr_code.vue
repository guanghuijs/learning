<script setup lang="ts">
  import { onMounted, reactive, ref, unref, watch } from 'vue';
  //  @ts-ignore
  import * as QRCode from 'easyqrcodejs';
  import logoImg from '/public/logo.webp';
  import {
    NInput,
    NButton,
    NUpload,
    NForm,
    NGrid,
    NFormItemGi,
    NSwitch,
    NColorPicker,
  } from 'naive-ui';
  import { refDebounced } from '@vueuse/core';

  import { useSysStoreRefs } from '@/stores/sys';

  const { primaryColor } = useSysStoreRefs();

  const qrcode = ref<HTMLDivElement>();
  const codeUrl = ref('');

  const form = reactive({
    text: 'gh_learning',
    logo: logoImg,
    bg: logoImg,
    autoColor: true,
    colorDark: unref(primaryColor),
    colorLight: 'rgba(255,255,255,0.8)',
    logoBackgroundTransparent: false,
  });

  // 二维码text输入防抖
  const text = ref('gh_learning');
  const debounceText = refDebounced(text, 1500);
  watch(debounceText, (value) => {
    form.text = value;
  });

  watch(form, (value) => {
    console.log(value);
    createQrCode();
  });

  onMounted(() => {
    createQrCode();
  });

  // 生成二维码
  const createQrCode = () => {
    qrcode.value!.innerHTML = '';
    new QRCode(qrcode.value, {
      text: form.text,
      width: 270,
      height: 270,
      quietZone: 15,
      logo: form.logo,
      logoBackgroundTransparent: form.logoBackgroundTransparent,
      backgroundImage: form.bg,
      autoColor: form.autoColor,
      backgroundImageAlpha: 0.8,
      colorDark: form.colorDark,
      colorLight: form.colorLight,
      onRenderingEnd(_: any, url: string) {
        codeUrl.value = url;
      },
    });
  };

  // 下载二维码
  const downloadQrCode = () => {
    const a = document.createElement('a');
    a.href = unref(codeUrl);
    a.download = 'qrCode.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // 二维码logo回调
  const logoFileHandle = (res: any) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      form.logo = e.target!.result as string;
    };
    reader.readAsDataURL(res.file.file);
  };

  // 二维码背景回调
  const bgFileHandle = (res: any) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      form.bg = e.target!.result as string;
    };
    reader.readAsDataURL(res.file.file);
  };
</script>

<template>
  <div class="container">
    <div class="code" ref="qrcode"></div>
    <div class="option">
      <n-form ref="formRef" :label-width="80" :model="form" size="small">
        <n-grid :cols="24" :x-gap="24">
          <n-form-item-gi :span="12" label="二维码内容">
            <n-input
              type="textarea"
              v-model:value="text"
              placeholder="输入文字或者网址"
            />
          </n-form-item-gi>
          <n-form-item-gi :span="6" label="logo">
            <n-upload
              list-type="image-card"
              :max="1"
              :on-before-upload="logoFileHandle"
            >
              点击上传
            </n-upload>
          </n-form-item-gi>
          <n-form-item-gi :span="6" label="二维码背景">
            <n-upload
              list-type="image-card"
              :max="1"
              :on-before-upload="bgFileHandle"
            >
              点击上传
            </n-upload>
          </n-form-item-gi>
          <n-form-item-gi :span="6" label="自动颜色">
            <n-switch v-model:value="form.autoColor">
              <template #checked> 怎能见彩虹 </template>
              <template #unchecked> 不经历风雨 </template>
            </n-switch>
          </n-form-item-gi>
          <n-form-item-gi :span="6" label="暗色">
            <n-color-picker
              v-model:value="form.colorDark"
              :show-alpha="false"
            />
          </n-form-item-gi>
          <n-form-item-gi :span="6" label="亮色">
            <n-color-picker
              v-model:value="form.colorLight"
              :show-alpha="false"
            />
          </n-form-item-gi>
          <n-form-item-gi :span="24">
            <n-button type="primary" size="large" block @click="downloadQrCode">
              下载二维码
            </n-button>
          </n-form-item-gi>
        </n-grid>
      </n-form>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .container {
    padding-top: 10px;
    .code {
      width: 300px;
      height: 300px;
      margin: 0 auto;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
    }
  }
</style>
