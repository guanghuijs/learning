<script setup lang="ts">
  import { onMounted, reactive, ref, unref } from 'vue';
  //  @ts-ignore
  import * as QRCode from 'easyqrcodejs';
  import logoImg from '/public/logo.webp';
  import { NInput, NButton, NUpload, NForm, NFormItem } from 'naive-ui';

  import { useSysStoreRefs } from '@/stores/sys';

  const { primaryColor } = useSysStoreRefs();

  const qrcode = ref<HTMLDivElement>();
  const codeUrl = ref('');

  const form = reactive({
    text: 'gh_learning',
    logo: logoImg,
    bg: logoImg,
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
      // logoBackgroundTransparent: true,
      backgroundImage: form.bg,
      autoColor: true,
      backgroundImageAlpha: 0.8,
      colorDark: unref(primaryColor),
      colorLight: 'rgba(255,255,255,0.8)',
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
      <n-form inline ref="formRef" :label-width="80" :model="form" size="small">
        <n-form-item label="二维码内容">
          <n-input
            type="textarea"
            v-model:value="form.text"
            placeholder="输入文字或者网址"
          />
        </n-form-item>
        <n-form-item label="logo">
          <n-upload
            list-type="image-card"
            :max="1"
            :on-before-upload="logoFileHandle"
          >
            点击上传
          </n-upload>
        </n-form-item>
        <n-form-item label="二维码背景">
          <n-upload
            list-type="image-card"
            :max="1"
            :on-before-upload="bgFileHandle"
          >
            点击上传
          </n-upload>
        </n-form-item>
        <n-form-item label="生成二维码">
          <n-button type="primary" @click="createQrCode">生成二维码</n-button>
        </n-form-item>
        <n-form-item label="下载二维码">
          <n-button type="primary" @click="downloadQrCode">下载二维码</n-button>
        </n-form-item>
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
