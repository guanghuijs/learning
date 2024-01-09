<script setup lang="ts">
  import type { RouteRecordRaw } from 'vue-router';
  import fs from 'node:fs';
  import path from 'node:path';
  import { useRouter, useRoute } from 'vue-router';
  const [_route, _router] = [useRoute(), useRouter()];
  console.log(path.resolve(), '---------');
  const files = fs.readFileSync(path.resolve());
  defineProps<{
    routes: RouteRecordRaw;
  }>();
</script>

<template>
  <div class="content flex-star">
    <div class="left">
      <div
        class="route-item"
        v-for="({ name }, index) in routes"
        :class="_route.name === name ? 'act' : ''"
        @click="_router.push({ name })"
        :key="index"
      >
        {{ name }}
      </div>
    </div>
    <div class="right">
      <router-view />
    </div>
  </div>
</template>
<style lang="less" scoped>
  .content {
    width: 100vw;
    height: 100vh;
    .left {
      width: 300px;
      height: 100vh;
      padding: 10px 0;
      overflow-y: scroll;
      .route-item {
        padding: 10px 0 10px 20px;
        color: #333;
      }
      .route-item.act {
        color: white;
        background: pink;
      }
    }
    .right {
      width: calc(100% - 300px);
      height: 100vh;
      padding: 20px;
      overflow-y: scroll;
    }
  }
</style>
