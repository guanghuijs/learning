<script setup lang="ts">
  import { ref, unref, watch } from 'vue';
  import type { RouteRecordRaw } from 'vue-router';
  import { useRoute, useRouter } from 'vue-router';

  import type { GlobalThemeOverrides } from 'naive-ui';
  import {
    darkTheme,
    NConfigProvider,
    NLayout,
    NLayoutHeader,
    NLayoutSider,
    NLayoutFooter,
    NMenu,
  } from 'naive-ui';

  import { useSysStoreRefs } from '@/stores/sys';

  import CodeMirror from './CodeMirror.vue';
  import NHeader from './Header.vue';

  const { mode, primaryColor } = useSysStoreRefs();

  const [_route, _router] = [useRoute(), useRouter()];
  const allCode = import.meta.glob('../../../views/**/**.vue', { as: 'raw', eager: true });

  defineProps<{
    routes: RouteRecordRaw[];
  }>();

  const activeKey = ref(_route.path);
  const code = ref(allCode[`../../../views${unref(activeKey)}.vue`]);

  watch(activeKey, (key) => {
    code.value = allCode[`../../../views${key}.vue`];
    _router.push({
      path: key,
    });
  });

  const themeOverrides = ref<GlobalThemeOverrides>({
    common: {
      primaryColor: unref(primaryColor),
      primaryColorHover: unref(primaryColor),
    },
  });

  watch(primaryColor, (value) => {
    themeOverrides.value = {
      common: {
        primaryColor: value,
        primaryColorHover: value,
      },
    };
  });
</script>
<template>
  <n-config-provider :theme="mode === 'dark' ? darkTheme : null" :theme-overrides="themeOverrides">
    <div class="layout-container" style="height: 100%">
      <n-layout>
        <n-layout-header bordered>
          <NHeader></NHeader>
        </n-layout-header>
        <n-layout has-sider sider-placement="left">
          <n-layout-sider
            bordered
            show-trigger
            collapse-mode="width"
            :collapsed-width="0"
            :width="300"
            :native-scrollbar="false"
          >
            <div class="left">
              <n-menu
                key-field="path"
                v-model:value="activeKey"
                label-field="name"
                :options="routes as any"
              >
              </n-menu>
            </div>
          </n-layout-sider>
          <n-layout has-sider sider-placement="right">
            <n-layout>
              <div class="layout-main">
                <router-view></router-view>
              </div>
            </n-layout>
            <n-layout-sider
              bordered
              show-trigger
              collapse-mode="width"
              :collapsed-width="0"
              width="50%"
              :native-scrollbar="false"
            >
              <div class="left">
                <CodeMirror :key="mode" :modelValue="code"></CodeMirror>
              </div>
            </n-layout-sider>
          </n-layout>
        </n-layout>
        <n-layout-footer bordered>
          <div class="footer">Copyright © 2024 GHLearning</div>
        </n-layout-footer>
      </n-layout>
    </div>
  </n-config-provider>
</template>
<style lang="less" scoped>
  .layout-container {
    &::-webkit-scrollbar {
      display: none;
    }
    .left {
      height: calc(100vh - 100px);
    }
    .layout-main {
      height: calc(100vh - 100px);
      overflow-y: scroll;
      padding: 10px 20px;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .footer {
      height: 50px;
      text-align: center;
      line-height: 50px;
    }
  }
</style>
