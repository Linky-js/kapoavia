<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { useDeviceType } from '../useDeviceType';
const props = defineProps({
  vessels: {
    type: Array,
    required: true
  },
  dopInfo: {
    type: Boolean,
    required: false,
    default: true
  }
});
const { isMobile } = useDeviceType();
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
        <h2 class="head-h2">Типы воздушных судов</h2>
        <p class="description">
          АО «КАПО Авиа» выполняет работы по техническому обслуживанию и ремонту следующих типов воздушных судов:
        </p>

        <ul class="vessels__items desktop" v-if="!isMobile">
          <li class="vessels__item" v-for="(item, index) in vessels" :key="index">
            <div class="vessels__image">
              <NuxtImg format="auto" :src="item.image" :alt="item.name" preset="default" />
            </div>
            <span>{{ item.name }}</span>
          </li>
        </ul>
        <Swiper v-if="isMobile" :slides-per-view="1.2" :space-between="20" :loop="true" :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }" :speed="600" :pagination="{
          clickable: true
        }" :navigation="true" :modules="modules" class="mySwiper mobile">
          <SwiperSlide class="Slides_slide" v-for="(slide, index) in vessels" :key="index">
            <div class="vessels__image">
              <NuxtImg format="auto" :src="slide.image" alt="slide" preset="default" />
            </div>
            <span>{{ slide.name }}</span>
          </SwiperSlide>
        </Swiper>

        <div v-if="dopInfo" class="_dop-info">
          <div class="_dop-info--text">
            Работы выполняются в соответствии с действующими допусками и эксплуатационной документацией
          </div>

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

.vessels_dop-info {
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

  .vessels_dop-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 20px;
  }
}
</style>