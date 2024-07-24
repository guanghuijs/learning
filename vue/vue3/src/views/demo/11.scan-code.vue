<script setup lang="ts">
  import { NButton } from 'naive-ui';
  import { Html5Qrcode } from 'html5-qrcode';
  import { ref } from 'vue';

  const qrShow = ref(false);
  const qrCode = () => {
    qrShow.value = true;
    const html5QrCode = new Html5Qrcode(/* element id */ 'reader');
    html5QrCode
      .start(
        { facingMode: 'environment' },
        {
          fps: 10, // Optional, frame per seconds for qr code scanning
          qrbox: { width: 250, height: 250 }, // Optional, if you want bounded box UI%
          aspectRatio: 1.9,
        },
        (decodedText) => {
          qrShow.value = false;
          html5QrCode.stop();
          alert(`扫码成功:${decodedText}`);
        },
        () => {}
      )
      .catch(() => {});
  };
</script>

<template>
  <div>
    <div v-show="qrShow" class="qr-content">
      <div id="reader"></div>
    </div>
    <n-button @click="qrCode">扫码</n-button>
  </div>
</template>

<style scoped lang="less">
  .qr-content {
    position: fixed;
    inset: 0;
    z-index: 1000;
  }
</style>
