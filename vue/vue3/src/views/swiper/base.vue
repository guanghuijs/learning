<template>
  <page title="swiper基础配置">
    <swiper
      ref="mySwiperRef"
      class="mySwiper"
      :speed="500"
      :grabCursor="true"
      v-bind="config"
      :modules="[
        Pagination,
        EffectCube,
        EffectFade,
        EffectCoverflow,
        EffectFlip,
        EffectCards,
        Autoplay,
      ]"
      :cubeEffect="{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }"
    >
      <swiper-slide
        v-for="(color, i) in swiperList"
        :key="color"
      >
        <div class="item" :style="{ background: color }">
          {{ i + 1 }}
        </div>
      </swiper-slide>
    </swiper>
    <h2>swiper基础配置</h2>
    <configurationForm v-model:value="config" />
    <pre>
      {{ config }}
    </pre>
  </page>
</template>
<script setup lang="ts">
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/effect-cube';
  import 'swiper/css/effect-cards';
  import 'swiper/css/navigation';
  // import required modules
  import { Swiper, SwiperSlide } from 'swiper/vue';

  import { Page } from '@packages/components';
  import { swiperList } from './data';

  import {
    EffectCube,
    EffectFade,
    EffectCoverflow,
    EffectFlip,
    EffectCards,
    Pagination,
    Autoplay,
  } from 'swiper/modules';

  import { ref, unref } from 'vue';
  import configurationForm from './components/BaseForm.vue';
  import { useSysStoreRefs } from '@/stores/sys';
  const { effect } = useSysStoreRefs();

  const config = ref<{
    autoplay: boolean;
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
  }>({
    autoplay: true,
    navigation: true,
    loop: true,
    pagination: true,
    direction: 'horizontal',
    effect: unref(effect),
  });
</script>
<style lang="less" scoped>
  .mySwiper {
    width: 200px;
    height: 300px;
    .item {
      overflow: hidden;
      border-radius: 20px;
      width: 100%;
      line-height: 300px;
      font-size: 100px;
      font-weight: bold;
      color: #fff;
      text-align: center;
    }
  }
</style>

<route lang="yaml">
meta:
  title: 基础配置
  sort: 1
</route>
