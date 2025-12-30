<script setup lang="ts">
  import {
    NForm,
    NFormItemGi,
    NGrid,
    NSwitch,
    NSelect,
  } from 'naive-ui';

  const form = defineModel<{
    navigation: boolean;
    loop: boolean;
    pagination: boolean;
    direction?: 'horizontal' | 'vertical';
    effect:
      | 'cube'
      | 'fade'
      | 'coverflow'
      | 'flip'
      | 'cards';
  }>('value', {
    default: {
      navigation: true,
      loop: true,
      pagination: false,
      direction: 'vertical',
      effect: 'fade',
    },
  });

  import { useSysStoreRefs } from '@/stores/sys';
  const { effect } = useSysStoreRefs();

  const effectChange = (_effect: typeof effect.value) => {
    effect.value = _effect;
    window.history.go();
  };
</script>

<template>
  <n-form
    ref="formRef"
    :label-width="80"
    :model="form"
    size="small"
  >
    <n-grid :cols="4" :x-gap="20" item-responsive>
      <n-form-item-gi
        span="0:2 900:2 900:1"
        label="navigation(导航)"
      >
        <n-switch v-model:value="form.navigation" />
      </n-form-item-gi>
      <n-form-item-gi
        span="0:2 900:2 900:1"
        label="loop(循环轮播)"
      >
        <n-switch v-model:value="form.loop" />
      </n-form-item-gi>
      <n-form-item-gi
        span="0:2 900:2 900:1"
        label="pagination(分页器)"
      >
        <n-switch v-model:value="form.pagination" />
      </n-form-item-gi>
      <n-form-item-gi
        span="0:2 900:2 900:1"
        label="vertical(垂直轮播)"
      >
        <n-select
          v-model:value="form.direction"
          :options="
            ['horizontal', 'vertical'].map((_) => ({
              label: _,
              value: _,
            }))
          "
        />
      </n-form-item-gi>
      <n-form-item-gi
        span="0:2 900:2 900:1"
        label="effect(效果)"
      >
        <n-select
          v-model:value="form.effect"
          @change="effectChange"
          :options="
            [
              'cube',
              'fade',
              'coverflow',
              'flip',
              'cards',
            ].map((v) => ({ value: v, label: v }))
          "
        />
      </n-form-item-gi>
    </n-grid>
  </n-form>
</template>

<style scoped></style>
