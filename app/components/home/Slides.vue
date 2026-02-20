<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
const props = defineProps({
  slides: {
    type: Array,
    required: true
  }
});
</script>
<template>
  <div class="block">
    <Swiper :slides-per-view="'auto'" :space-between="0" :loop="true" :centeredSlides="true" :autoplay="{
      delay: 3000,
      disableOnInteraction: false
    }" :speed="600" :pagination="{
      clickable: true
    }" :navigation="true" :modules="modules" class="mySwiper">
      <SwiperSlide class="Slides_slide" v-for="(slide, index) in slides" :key="index">
        <img :src="slide" alt="slide">
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<style scoped>
.Slides_slide {
  width: 848rem;
  height: 490rem;
  margin-right: 16rem;
}
.Slides_slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media screen and (max-width: 768px) {
  .Slides_slide {
    width: 300px;
    height: 200px;
    margin-right: 8px;
  }
  
}
</style>