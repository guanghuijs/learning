<script setup lang="ts">
  import routes from '~pages';
  import { useRouter, useRoute } from 'vue-router';

  const [router, route] = [useRouter(), useRoute()];
  const navHandle = (path: string) => {
    router.push(path);
  };
</script>

<template>
  <div class="content flex-star">
    <div class="left menus">
      <div
        v-for="{ name, path } in routes"
        :key="path"
        class="menu"
        :class="route.path === path ? 'act' : ''"
        @click="navHandle(path)"
      >
        {{ name }}
      </div>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .content {
    width: 100vw;
    height: 100vh;
    border-top: 1px solid #eee;
    overflow: hidden;
    .left {
      width: 300px;
      height: 100vh;
      overflow-y: scroll;
      background: white;
      border-right: 1px solid #eee;
      &::-webkit-scrollbar {
        display: none;
      }

      .menu {
        padding: 10px 20px;
        cursor: pointer;
        &.act {
          color: white;
          background: pink;
        }
      }
    }
    .right {
      flex: 1;
      height: 100vh;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
</style>
