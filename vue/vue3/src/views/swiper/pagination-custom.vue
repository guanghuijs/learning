<template>
  <Page title="自定义分页器">
    <swiper
      :pagination="pagination"
      :modules="[Pagination]"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(color, i) in Array.from(
          { length: 10 },
          () => mock('@color'),
        )"
        :style="{ background: color }"
        :key="i"
      >
        Slide {{ i + 1 }}
      </swiper-slide>
    </swiper>
  </Page>
</template>
<script setup lang="ts">
  import { mock } from 'mockjs';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Page } from '@packages/components';

  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Pagination } from 'swiper/modules';

  const pagination = {
    clickable: true,
    renderBullet(i, className) {
      return `<span class="${className}">${i + 1}</span>`;
    },
  };
</script>

<style lang="less" scoped>
  .mySwiper {
    width: 100%;
    height: 100%;
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #444;

      /* Center slide text vertically */
      display: flex;
      justify-content: center;
      align-items: center;
    }

    :deep(.swiper-pagination-bullet) {
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      font-size: 12px;
      color: #000;
      opacity: 1;
      background: rgba(0, 0, 0, 0.2);
    }

    :deep(.swiper-pagination-bullet-active) {
      color: #fff;
      background: #007aff;
    }
  }
</style>

<route lang="yaml">
meta:
  title: 自定义分页器
  sort: 3
</route>
