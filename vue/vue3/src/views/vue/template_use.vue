<template>
  <input ref="input" />
  <Children ref="children"></Children>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import Children from '@/components/Children.vue';

  const children = ref(null);
  const input = ref<HTMLInputElement>();

  onMounted(() => {
    console.log(children.value);
    (input.value as HTMLInputElement).focus();
  });
</script>

<route lang="yaml">
meta:
  title: 模板引用
  sort: 13
</route>
