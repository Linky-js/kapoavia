<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
const props = defineProps({
  vessels: {
    type: Array,
    required: true
  }
});
</script>
<template>
  <section class="vessels-section block">
    <div class="container">
      <div class="vessels__content">
        <div class="labelSection">
          <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="3" r="3" fill="#2469A6" />
          </svg>
          Воздушные суда
        </div>
        <h2 class="head-h2">Обслуживаемые типы воздушных судов</h2>
        <p class="description">
          АО «КАПО Авиа» выполняет работы по техническому обслуживанию и ремонту следующих типов воздушных судов:
        </p>
        <ul class="vessels__items desktop">
          <li class="vessels__item" v-for="(item, index) in vessels" :key="index">
            <div class="vessels__image"> <img :src="item.image" :alt="item.name"></div>
            <span>{{ item.name }}</span>
          </li>
        </ul>
        <Swiper :slides-per-view="1.2" :space-between="20" :loop="true" :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }" :speed="600" :pagination="{
          clickable: true
        }" :navigation="true" :modules="modules" class="mySwiper mobile">
          <SwiperSlide class="Slides_slide" v-for="(slide, index) in vessels" :key="index">
            <div class="vessels__image">
              <img :src="slide.image" alt="slide">
            </div>
            <span>{{ slide.name }}</span>
          </SwiperSlide>
        </Swiper>

        <div class="vessels_dop-info">
          <div class="vessels_dop-info--text">
            Работы выполняются в соответствии с действующими допусками <br> и эксплуатационной документацией
          </div>
          <NuxtLink to="/services" class="btn btn_blue">
            Обслуживаемые типы воздушных судов
            <svg width="31" height="12" viewBox="0 0 31 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30.5303 6.05328C30.8232 5.76039 30.8232 5.28551 30.5303 4.99262L25.7574 0.219648C25.4645 -0.073245 24.9896 -0.073245 24.6967 0.219648C24.4038 0.512542 24.4038 0.987415 24.6967 1.28031L28.9393 5.52295L24.6967 9.76559C24.4038 10.0585 24.4038 10.5334 24.6967 10.8263C24.9896 11.1191 25.4645 11.1191 25.7574 10.8263L30.5303 6.05328ZM0 5.52295V6.27295H30V5.52295V4.77295H0V5.52295Z"
                fill="white" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.vessels__content {
  display: flex;
  flex-direction: column;
  gap: 26rem;
}

.vessels__items {
  margin-top: 14rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16rem;
}

.vessels__item {
  display: flex;
  flex-direction: column;
  gap: 20rem;
}

.vessels__image {
  width: 632rem;
  height: 360rem;
  flex-shrink: 0;
  overflow: hidden;
}

.vessels__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.vessels__item span {
  font-weight: 500;
  font-size: 22rem;
  line-height: 100%;
  color: #262d3f;
}
.vessels_dop-info{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20rem 20rem 20rem 40rem;
  border: 1px solid rgba(38, 45, 63, 0.05);
}

@media screen and (max-width: 768px) {
  .vessels__items.desktop {
    display: none;
  }

  .vessels__content {
    gap: 30px;
  }

  .vessels__item span {
    font-size: 16px;
  }

  .Slides_slide {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .mySwiper {
    width: 100%;
  }

  .Slides_slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .vessels__image {
    width: 100%;
    height: 250px;
  }
  .vessels_dop-info{
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 20px;
  }
}
</style>