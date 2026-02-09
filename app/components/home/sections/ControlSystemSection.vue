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
              <img :src="image" :alt="`slide ${index + 1}`">
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="control-system__dop-info">
          <p>Деятельность АО «КАПО Авиа» осуществляется в рамках действующей системы менеджмента качества, направленной
            на обеспечение соответствия выполняемых работ требованиям нормативной, эксплуатационной и ремонтной
            документации.
          </p>
          <NuxtLink to="/control-system" class="btn_blue">
            Система менеджмента качества
            <svg width="31" height="12" viewBox="0 0 31 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30.5303 6.05328C30.8232 5.76039 30.8232 5.28551 30.5303 4.99262L25.7574 0.219648C25.4645 -0.073245 24.9896 -0.073245 24.6967 0.219648C24.4038 0.512542 24.4038 0.987415 24.6967 1.28031L28.9393 5.52295L24.6967 9.76559C24.4038 10.0585 24.4038 10.5334 24.6967 10.8263C24.9896 11.1191 25.4645 11.1191 25.7574 10.8263L30.5303 6.05328ZM0 5.52295V6.27295H30V5.52295V4.77295H0V5.52295Z"
                fill="white" />
            </svg>
          </NuxtLink>
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