<template>
  <page title="swiper基础配置">
    <swiper
      ref="mySwiperRef"
      class="mySwiper"
      :speed="500"
      :grabCursor="true"
      v-bind="config"
      :modules="modules"
      :cubeEffect="{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }"
    >
      <swiper-slide v-for="img in swiperList" :key="img">
        <div class="item">
          <img :src="img" alt="" />
        </div>
      </swiper-slide>
    </swiper>
    <h2>swiper基础配置</h2>
    <configurationForm v-model:value="config" />
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
  } from 'swiper/modules';
  const modules = ref([
    Pagination,
    EffectCube,
    EffectFade,
    EffectCoverflow,
    EffectFlip,
    EffectCards,
  ]);

  import { ref, unref } from 'vue';
  import configurationForm from './components/BaseForm.vue';
  import { useSysStoreRefs } from '@/stores/sys';
  const { effect } = useSysStoreRefs();

  const config = ref<{
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
      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
      }
    }
  }
</style>

<route lang="yaml">
meta:
  title: 基础配置
  sort: 1
</route>
