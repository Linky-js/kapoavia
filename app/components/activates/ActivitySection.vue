<script setup>
import { useDeviceType } from '../useDeviceType';
import { Swiper, SwiperSlide } from "swiper/vue";
const { isMobile } = useDeviceType();
const items = [
  {
    id: 1,
    name: "Техническое обслуживание воздушных судов",
    img: '/images/activity/1.png'
  },
  {
    id: 1,
    name: "Восстановление исправности систем самолёта",
    img: '/images/activity/1.png'
  },
  {
    id: 1,
    name: "Ремонт авиационных агрегатов",
    img: '/images/activity/1.png'
  },
  {
    id: 1,
    name: "Оценка технического состояния и устранение неисправностей",
    img: '/images/activity/1.png'
  }
]

</script>
<template>
  <section class="Activity">
    <div class="container">
      <div class="Activity_content">
        <div class="labelSection">
          <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="3" r="3" fill="#2469A6" />
          </svg>
          Правовая база
        </div>
        <div class="head-h2">
          Основные направления деятельности
        </div>
        <div class="activity__items desktop" v-if="!isMobile">
          <div v-for="item in items" :key="item.id" class="activity__item">
            <div class="activity__item_image">
              <NuxtImg :src="item.img" alt="" preset="default" />
            </div>
            <div class="activity__item__head">
              {{ item.name }}
            </div>
          </div>
        </div>
        <Swiper v-if="isMobile" :slides-per-view="1.2" :space-between="20" :loop="true" :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }" :speed="600" :pagination="{
          clickable: true
        }" :navigation="true" :modules="modules" class="mySwiper mobile">
          <SwiperSlide v-for="item in items" :key="item.id" class="activity__item">
            <div class="activity__item_image">
              <NuxtImg :src="item.img" alt="" preset="default" />
            </div>
            <div class="activity__item__head">
              {{ item.name }}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>
<style scoped>
.Activity {
  background-color: #fff;
  padding: 100rem 0;
}

.mySwiper {
  width: 100%;
}

.Activity_content {
  display: flex;
  flex-direction: column;
  gap: 26rem;
}

.activity__items {
  margin-top: 14rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16rem;
}

.activity__item {
  display: flex;
  flex-direction: column;
  background: #f6f8fd;
}

.activity__item_image {
  width: 416rem;
  height: 260rem;
  flex-shrink: 0;
  overflow: hidden;
}

.activity__item_image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.activity__item__head {
  font-weight: 500;
  font-size: 22rem;
  line-height: 100%;
  color: #262d3f;
  padding: 32rem;

}

@media screen and (max-width: 768px) {
  .Activity {
    padding: 50px 0;
  }

  .activity__items {
    display: none;
  }

  .activity__item {
    height: auto;
  }

  .mobile {
    display: block;
  }

  .activity__item_image {
    width: 100%;
    height: 200px;
  }

  .Activity_content {
    gap: 20px;
  }

  .activity__item__head {
    font-size: 18px;
    padding: 20px;
  }

}
</style>