<script setup lang="ts">
  import { ref, unref, watch } from 'vue';
  import { MdCopy } from '@vicons/ionicons4';
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
    NIcon,
  } from 'naive-ui';

  import { useSysStoreRefs } from '@/stores/sys';

  import CodeMirror from './CodeMirror.vue';
  import NHeader from './Header.vue';

  const { mode, primaryColor } = useSysStoreRefs();

  const [_route, _router] = [useRoute(), useRouter()];
  const allCode = import.meta.glob('../../../views/**/**.vue', {
    as: 'raw',
    eager: true,
  });

  defineProps<{
    routes: RouteRecordRaw[];
  }>();

  const activeKey = ref(_route.path);
  const code = ref(allCode[`../../../views${unref(activeKey)}.vue`]);

  // 代码复制功能
  import { useClipboard } from '@vueuse/core';
  const { copy } = useClipboard({ source: code });

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

  import { useWindowSize, useDebounceFn } from '@vueuse/core';
  // 侧边栏折叠相关
  const { width } = useWindowSize();
  const rightCollapsed = ref(true);
  watch(
    width,
    useDebounceFn(() => {
      rightCollapsed.value = width.value <= 900;
    }, 500),
    {
      immediate: true,
    }
  );
</script>
<template>
  <n-config-provider
    :theme="mode === 'dark' ? darkTheme : null"
    :theme-overrides="themeOverrides"
  >
    <div class="layout-container">
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
              :width="width > 900 ? '40%' : '100%'"
              v-model:collapsed="rightCollapsed"
              :native-scrollbar="false"
            >
              <div class="left">
                <div class="copy" @click="copy(code)">
                  <n-icon>
                    <md-copy></md-copy>
                  </n-icon>
                </div>
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
      //padding: 10px 20px;
      &::-webkit-scrollbar {
        display: none;
      }
      //&:has(.goods-cart, .mySwiper) {
      //  padding: 0;
      //}
    }
    .footer {
      height: 50px;
      text-align: center;
      line-height: 50px;
    }
  }

  .copy {
    position: fixed;
    top: 70px;
    right: 20px;
    background: white;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    text-align: center;
    border-radius: 4px;
    z-index: 10;
    cursor: pointer;
    opacity: 0.1;
    width: 30px;
    height: 30px;
    padding-top: 6px;
    transition: opacity 0.25s;
    svg {
      fill: #999;
      width: 16px;
      height: 16px;
    }
    &:hover {
      opacity: 1;
    }
  }

  .n-layout-sider--left-placement {
    z-index: 2;
  }

  /* 屏幕宽度在0 - 300像素之间的样式 */
  @media screen and (max-width: 900px) {
    .n-layout-sider--left-placement {
      position: absolute;
      width: 50vw !important;
      z-index: 10;
    }
    .n-layout-sider--right-placement {
      position: absolute;
      right: 0;
      width: 0;
      z-index: 11;
    }
  }
</style>
