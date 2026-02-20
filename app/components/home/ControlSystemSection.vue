<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
const props = defineProps({
  images: {
    type: Array,
    default: () => []
  }
});
</script>
<template>
  <div class="control-system-section block">
    <div class="container">
      <div class="control-system__content">
        <div class="labelSection">
          <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="3" r="3" fill="#2469A6" />
          </svg>
          Менеджмент
        </div>
        <h2 class="head-h2">Система менеджмента качества </h2>
        <Swiper :slides-per-view="1.2" :space-between="20" :loop="true" :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }" :speed="600" :pagination="{
          clickable: true
        }" :navigation="true" :breakpoints="{
          '768': {
            slidesPerView: 3,
            spaceBetween: 20,
          }
        }" :modules="modules" class="mySwiper">
          <SwiperSlide class="Slides_slide" v-for="(image, index) in props.images" :key="index">
            <div class="control-system__image">
              <NuxtImg format="auto" :src="image" :alt="`slide ${index + 1}`" preset="default" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="control-system__dop-info">
          <p>Деятельность АО «КАПО Авиа» осуществляется в рамках действующей системы менеджмента качества, направленной
            на обеспечение соответствия выполняемых работ требованиям нормативной, эксплуатационной и ремонтной
            документации.
          </p>

        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.control-system__content {
  display: flex;
  flex-direction: column;
  gap: 26rem;
}

.mySwiper {
  margin-top: 14rem;
  width: 100%;
}

.Slides_slide {
  margin-right: 16rem;
  height: 290rem;
}

.control-system__image {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.control-system__image img {
  width: 100%;
  height: auto;
}

.control-system__dop-info {
  display: flex;
  align-items: center;
  gap: 20rem;
  justify-content: space-between;
  margin-top: 14rem;
}

.control-system__dop-info p {
  max-width: 824rem;
  font-weight: 300;
  line-height: 140%;
  color: #262d3f;
}

@media screen and (max-width: 768px) {
  .control-system__content {
    gap: 30px;
  }

  .mySwiper {
    margin-top: 30px;
  }

  .Slides_slide {
    margin-right: 0;
    height: 290px;
  }

  .control-system__dop-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-top: 30px;
  }

  .control-system__dop-info p {
    max-width: 100%;
  }
}
</style>