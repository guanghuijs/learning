<script setup lang="ts">
  import router from '@/router';
  import { useRoute, useRouter } from 'vue-router';
  const [_route, _router] = [useRoute(), useRouter()];
</script>

<template>
  <div class="header flex-star">
    <div class="logo">Learning</div>
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
</template>

<style scoped lang="less">
  .header {
    padding: 0 20px;
    height: 50px;
    .logo {
      font-weight: bold;
      font-size: 20px;
    }
    .menu-item {
      padding: 0 10px;
      margin-left: 20px;
      font-size: 16px;
      cursor: pointer;
      &.act {
        color: pink;
      }
    }
  }
</style>
