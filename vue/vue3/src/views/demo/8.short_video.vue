<template>
  <swiper
    class="mySwiper"
    direction="vertical"
    @swiper="onSwiper"
    @slideChangeTransitionEnd="transitionEnd"
    @slideChange="slideChange"
  >
    <swiper-slide
      v-for="video in [CAT_1, CAT_2, CAT_3, CAT_4, CAT_5]"
      class="swiper-item"
    >
      <video loop>
        <source :src="video" />
      </video>
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/css';
  import CAT_1 from '@/assets/video/cat_1.mp4';
  import CAT_2 from '@/assets/video/cat_2.mp4';
  import CAT_3 from '@/assets/video/cat_3.mp4';
  import CAT_4 from '@/assets/video/cat_4.mp4';
  import CAT_5 from '@/assets/video/cat_5.mp4';
  import { onMounted } from 'vue';

  onMounted(() => {
    const video = document
      .querySelector('.swiper-slide-active')!
      .querySelector('video');
    video!.play();
  });

  const onSwiper = () => {};
  const transitionEnd = (res: any) => {
    const video = document
      .querySelector('.swiper-slide-active')!
      .querySelector('video');
    video!.play();
  };

  const slideChange = () => {
    const video = document
      .querySelector('.swiper-slide-active')!
      .querySelector('video');
    video!.pause();
  };
</script>
<style lang="less" scoped>
  .mySwiper {
    height: 100%;
    background: #333;
    .swiper-item {
      video {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
