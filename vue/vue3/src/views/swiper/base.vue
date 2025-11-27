<template>
  <page title="swiper基础配置">
    <swiper ref="mySwiperRef" class="mySwiper" :speed="500" :navigation="true">
      <swiper-slide v-for="img in swiperList" :key="img">
        <div class="item">
          <img :src="img" alt="" />
        </div>
      </swiper-slide>
    </swiper>
  </page>
</template>
<script setup lang="ts">
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  // import required modules
  import { Swiper, SwiperSlide } from 'swiper/vue';

  import { Page } from '@packages/components';
  import { swiperList } from './data';
</script>
<style lang="less" scoped>
  .mySwiper {
    height: 300px;
    .item {
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

