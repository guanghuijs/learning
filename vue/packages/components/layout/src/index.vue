<script setup lang="ts">
  import { type RouteRecordRaw, useRoute, useRouter } from 'vue-router';
  defineProps<{
    routes: RouteRecordRaw[];
  }>();

  const route = useRoute();
  const router = useRouter();

  const routeToggle = (path: string) => {
    router.push(path);
  };
</script>

<template>
  <div class="container" v-if="routes">
    <div class="left">
      <div
        class="item"
        :class="route?.path === path ? 'act' : ''"
        v-for="{ path, meta, name } in routes"
        :key="path"
        @click="routeToggle(path)"
      >
        {{ meta ? meta.title : name }}
      </div>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="less">
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    > div {
      height: 100%;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .left {
      width: 240px;
      .item {
        padding: 10px;
        cursor: pointer;
      }
      .item.act {
        background: pink;
        color: white;
      }
    }
    .right {
      width: calc(100% - 240px);
      background: #f2f2f2;
    }
  }
</style>
