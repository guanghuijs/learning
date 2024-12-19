<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import html2canvas from 'html2canvas';
  import { Page } from '@packages/components';

  const targetRef = ref<HTMLElement | null>();

  const url = ref('');

  onMounted(() => {
    targetRef.value?.addEventListener('mouseover', (e) => {
      html2canvas(targetRef.value!).then((res) => {
        url.value = res.toDataURL('image/jpeg', 1.0);
      });
    });
  });
</script>

<template>
  <page title="元素转换img">
    <div ref="targetRef" style="background: red" class="target">
      <div>112</div>
      <p>337</p>
      <h1 style="text-align: center; color: blueviolet">999</h1>
    </div>
    <img :src="url" alt="" />
  </page>
</template>

<style scoped lang="less"></style>
