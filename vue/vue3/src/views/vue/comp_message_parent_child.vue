<template>
  <Parent
    msg="父组件消息"
    :wgh="{ name: 'wgh', age: 18 }"
    :title="title"
    @getInputVal="(msg: string) => childInput = msg"
    @getChildMsg="(msg: string) => childMsg = msg"
  />
  <h3>展示子组件的消息</h3>
  <div>{{ childMsg }}</div>
  <div>{{ childInput }}</div>
</template>

<script lang="ts" setup>
  import Parent from '@/components/Parent.vue';
  import { ref } from 'vue';
  const title = ref('父传子通讯');
  const childMsg = ref<string>('');
  const childInput = ref<string>('');
</script>

<route lang="yaml">
meta:
  title: 父子组件通信
  sort: 15
</route>
