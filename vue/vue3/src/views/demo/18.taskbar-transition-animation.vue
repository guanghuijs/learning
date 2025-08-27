<script setup lang="ts">
  import { ref } from 'vue';
  import { NIcon, NButton } from 'naive-ui';
  import { MdSunny } from '@vicons/ionicons4';
  import { Random } from 'mockjs';

  const cont = ref(Random.integer(5, 15));
  const flag = ref(true);

  import { useElementSize } from '@vueuse/core';
  import { useTemplateRef } from 'vue';

  const el = useTemplateRef('el');
  const { width } = useElementSize(el);
</script>

<template>
  <div class="opt">
    <NButton @click="cont = Random.integer(5, 15)">随机个数{{ cont }}</NButton>
    <NButton @click="flag = !flag"> {{ flag ? '左' : '居中' }}对齐 </NButton>
  </div>
  <div class="content" ref="el">
    <div
      class="item"
      v-for="i in cont"
      :key="i"
      :style="{
        transform: flag
          ? `translateX(calc(${width / 2}px - ${(cont * 50 + (cont - 1) * 5) / 2}px))`
          : 'translateX(0)',
        color: Random.color(),
        // transition: `all 0.25s ease-in ${(flag ? 15 - i : i) * 0.01}s`,
        transition: `all 0.25s ease ${(flag ? cont - i : i) * 0.02}s`,
      }"
    >
      <NIcon size="40px">
        <md-sunny></md-sunny>
      </NIcon>
    </div>
  </div>
  <div class="content" style="margin-top: 10px; text-align: center">
    <div class="item" v-for="i in cont" :key="i" style="color: white">
      <NIcon size="40px">
        <md-sunny></md-sunny>
      </NIcon>
    </div>
  </div>
</template>

<style scoped lang="less">
  .opt {
    margin: 10px 0;
  }
  .content {
    height: 50px;
    background: rebeccapurple;

    .item {
      width: 50px;
      height: 50px;
      margin-right: 5px;
      text-align: center;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    & .item:last-child {
      margin-right: 0;
    }
  }
</style>
