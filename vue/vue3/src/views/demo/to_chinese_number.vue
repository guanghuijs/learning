<script setup lang="ts">
  import { Page } from '@packages/components';
  import { computed, ref } from 'vue';
  import { NInput } from 'naive-ui';

  const value = ref('123456789');

  const toChineseNumber = computed(() => (num: string | number) => {
    const numStr = num
      .toString()
      .replace(/(?=(\d{4})+$)/g, ',')
      .split(',')
      .filter(Boolean);

    const chars = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    const units = ['', '十', '百', '千'];
    const bigUnits = ['', '万', '亿'];

    function _transform(n: string) {
      let result = '';
      for (let i = 0; i < n.length; i++) {
        const c = chars[+n[i]];
        let u = units[n.length - 1 - i];
        if (c === chars[0]) {
          if (result[result.length - 1] !== chars[0]) {
            result += c;
          }
        } else {
          result += c + u;
        }
      }
      if (result[result.length - 1] === chars[0]) {
        result = result.slice(0, -1);
      }
      return result;
    }

    let result = '';
    for (let i = 0; i < numStr.length; i++) {
      const part = numStr[i];
      const c = _transform(part);
      const u = c ? bigUnits[numStr.length - 1 - i] : '';
      result += c + u;
    }
    return result;
  });
</script>

<template>
  <page title="数组转中文(参考渡一教育)">
    <NInput type="text" placeholder="请输入数字" v-model:value="value"></NInput>
    <div>这是转义后的文字: {{ toChineseNumber(value) }}</div>
  </page>
</template>

<style scoped lang="scss"></style>

<route lang="yaml">
meta:
  title: 数字转中文
  sort: 17
</route>
