<template>
  <Page title="无限循环列表">
    <swiper
      direction="vertical"
      :initialSlide="0"
      :slidesPerView="10"
      :loop="true"
      class="mySwiper"
      :modules="[Autoplay]"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
    >
      <swiper-slide
        v-for="(color, i) in Array.from(
          { length: 20 },
          () => mock('@color'),
        )"
        :key="color"
        :style="{ backgroundColor: color }"
      >
        <div class="item">{{ i }} - {{ color }}</div>
      </swiper-slide>
    </swiper>
  </Page>
</template>
<script lang="ts" setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { mock } from 'mockjs';

  import { Page } from '@packages/components';

  import { Autoplay } from 'swiper/modules';

  // Import Swiper styles
  import 'swiper/css';
</script>

<style scoped lang="less">
  .mySwiper {
    height: 500px;

    .item {
      line-height: 50px;
      text-align: center;
    }
  }
</style>

<route lang="yaml">
meta:
  title: 循环滚动列表
  sort: 5
</route>
