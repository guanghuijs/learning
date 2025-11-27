<script setup lang="ts">
  import { Page } from '@packages/components';
  import smart from 'address-smart-parse';
  import { computed, ref } from 'vue';
  const text = ref(
    '张三 15188889999 云南省昆明市呈贡区斗南街道纳源路与彩龙街交叉口西南100米实力·蝶锦台'
  );
  const result = computed<string>(() => smart(text.value));
</script>

<template>
  <page title="地址智能识别">
    <textarea v-model="text"></textarea>
    <pre>{{ result }}</pre>
  </page>
</template>

<style scoped lang="scss">
  textarea {
    border-radius: 10px;
    padding: 10px;
    height: 100px;
    width: 100%;
    outline: none;
    border: 1px solid #eee;
  }
</style>


<route lang="yaml">
meta:
  title: 地址解析
  sort: 16
</route>
