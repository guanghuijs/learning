<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Page } from '@packages/components';

  import 'swiper/css';
</script>

<template>
  <page title="swiper基础配置">
    <swiper
      ref="mySwiperRef"
      class="mySwiper"
      :speed="500"
      :grabCursor="true"
      slidesPerView="auto"
      :initialSlide="1"
      :resistanceRatio="0"
      :slideToClickedSlide="true"
    >
      <swiper-slide class="slide"> slide </swiper-slide>
      <swiper-slide>
        <div class="content">content</div>
      </swiper-slide>
      <swiper-slide class="slide"> slide </swiper-slide>
    </swiper>
  </page>
</template>

<style scoped lang="scss">
  .mySwiper {
    height: 100%;
    width: 100%;
    .slide {
      height: 100%;
      background: pink;
      min-width: 100px;
      width: 70%;
      max-width: 320px;
    }
    .content {
      height: 100%;
      background: #1aad19;
    }
  }
</style>

<route lang="yaml">
meta:
  title: 侧边栏
  sort: 2
</route>
