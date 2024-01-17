<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router';
  import { NIcon, NColorPicker } from 'naive-ui';
  import { MdSunny, MdMoon, LogoGithub } from '@vicons/ionicons4';
  import { useSysStoreRefs } from '@/stores/sys';

  import router from '@/router';
  import { unref, watch } from 'vue';

  const [_route, _router] = [useRoute(), useRouter()];

  const { mode, primaryColor } = useSysStoreRefs();

  watch(mode, (value) => {
    if (value === 'dark') {
      document.querySelector('body')!.classList.add('dark');
    } else {
      document.querySelector('body')!.classList.remove('dark');
    }
  });

  const toggleMode = () => {
    if (unref(mode) === 'light') {
      mode.value = 'dark';
    } else {
      mode.value = 'light';
    }
  };
</script>

<template>
  <div class="header flex-star">
    <img src="/logo.webp" alt="" />
    <div class="logo">Learning</div>
    <div class="nav flex-star">
      <div
        v-for="{ redirect, name, path } in router.options.routes.slice(1)"
        :key="path"
        class="menu-item"
        :class="_route.path.startsWith(path) ? 'act' : ''"
        @click="_router.replace(redirect as string)"
      >
        {{ name }}
      </div>
    </div>
    <div class="right flex-star">
      <div class="mode">
        <NIcon>
          <md-sunny v-show="mode === 'light'" @click="toggleMode"></md-sunny>
          <md-moon v-show="mode === 'dark'" @click="toggleMode"></md-moon>
        </NIcon>
      </div>
      <NColorPicker
        size="small"
        :modes="['hex']"
        :swatches="[
          '#18A058',
          '#2080F0',
          '#F0A020',
          '#FFC0CB',
          '#ef82a0',
          '#951c48',
          '#1177b0',
          '#1a94bc',
          '#12aa9c',
          '#45b787',
          '#fed71a',
          '#fbda41',
          '#fa5d19',
          '#f68c60',
        ]"
        class="color-picker"
        v-model:value="primaryColor"
      ></NColorPicker>
      <a href="https://github.com/guanghuijs/learning" target="_blank">
        <n-icon>
          <logo-github></logo-github>
        </n-icon>
      </a>
    </div>
  </div>
</template>

<style scoped lang="less">
  .header {
    padding: 0 20px;
    height: 50px;
    img {
      width: 30px;
    }
    .logo {
      font-weight: bold;
      font-size: 20px;
    }
    .nav {
      flex: 1;
      overflow-x: scroll;
      .menu-item {
        padding: 0 10px;
        margin-left: 20px;
        font-size: 16px;
        cursor: pointer;
        &.act {
          color: v-bind(primaryColor);
        }
      }
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .right {
      font-size: 20px;
      > * {
        margin-left: 10px;
        cursor: pointer;
        i {
          margin-top: 7px;
        }
      }
      .color-picker {
        width: 20px;
        height: 20px;
        :deep(.n-color-picker-trigger__value) {
          display: none !important;
        }
      }
    }
  }
</style>
