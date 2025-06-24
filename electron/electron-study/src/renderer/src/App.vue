<script lang="ts" setup>
  import { Layout } from '@/components';
  import { ElConfigProvider } from 'element-plus';

  import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
  import en from 'element-plus/dist/locale/en.mjs';
  import zhTw from 'element-plus/dist/locale/zh-tw.mjs';
  import th from 'element-plus/dist/locale/th.mjs';

  const locales = { zhCn, en, zhTw, th };

  import { useSysStoreRefs } from '@/store/sys';
  const { locale } = useSysStoreRefs();
</script>

<template>
  <el-config-provider :locale="locales[locale]">
    <Layout></Layout>
  </el-config-provider>
</template>
