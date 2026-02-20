<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

const mainTypes = [
  'Техническое обслуживание и ремонт авиационной техники',
  'Проведение работ по установлению <br> и продлению ресурсов (сроков службы)',
  'Разработка конструкторской <br> и ремонтной документации',
  'Капитальный, средний и текущий ремонт авиационной техники',
  'Выполнение бюллетеней промышленности',
  'Проведение рекламационных работ',
  'Подготовка и проведение лётных испытаний'
]
</script>
<template>
  <section class="Main">
    <Swiper :slides-per-view="1" :space-between="0" :loop="true" :autoplay="{
      delay: 3000,
      disableOnInteraction: false
    }" :speed="1200" :pagination="{
      clickable: true
    }" :navigation="true" :modules="modules" class="mySwiper">
      <SwiperSlide class="Main_slide">
        <NuxtImg :src="'/images/home/1.png'" alt="slide" preset="default" />
      </SwiperSlide>
      <SwiperSlide class="Main_slide">
        <NuxtImg :src="'/images/home/1.png'" alt="slide" preset="default" />
      </SwiperSlide>
    </Swiper>

    <div class="container">
      <div class="Main_info">
        <h1 class="Main__title">Техническое обслуживание <br> и ремонт авиационной техники</h1>
        <p class="Main__text">Акционерное общество «КАПО Авиа» — предприятие, специализирующееся<br>на техническом
          обслуживании и ремонте авиационной техники</p>
      </div>
      <div class="Main_types">
        <div class="main_types_head">
          Основные направления деятельности АО «КАПО Авиа»:
        </div>
        <ul class="main_types_list">
          <li v-for="mainType in mainTypes" :key="mainType" class="main_types_item">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3333 1L5.16667 10.1667L1 6" stroke="#2897F8" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            <span v-html="mainType"></span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<style scoped>
.Main {
  position: relative;
  padding-top: 193rem;
  padding-bottom: 50rem;
}

.Main::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(21, 25, 37, 0.8) 0%, rgba(21, 25, 37, 0.9) 100%);
  z-index: 1;

  background: linear-gradient(180deg, rgba(21, 25, 37, 0.39) 0%, rgba(21, 25, 37, 0.67) 100%);

}

.mySwiper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.mySwiper .swiper-slide {
  text-align: center;
  font-size: 18px;
  height: 100%;
  width: 100%;
}

.mySwiper .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.Main_info {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 40rem;
}

.Main__title {
  font-weight: 500;
  font-size: 68rem;
  line-height: 90%;
  color: #fff;
}

.Main__text {
  font-weight: 300;
  font-size: 22rem;
  line-height: 140%;
  color: #fff;
}

.Main__buttons {
  display: flex;
  gap: 8rem;
}

.Main_types {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 20rem;
  padding-top: 30rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  margin-top: 100rem;
}

.main_types_head {
  font-weight: 500;
  font-size: 22rem;
  line-height: 100%;
  color: #fff;
}


.main_types_item {
  display: flex;
  flex-direction: column;
  gap: 20rem;
  justify-content: space-between;
  padding: 20rem;
  /* width: 314rem; */
  flex-shrink: 0;
  height: 135rem;
  backdrop-filter: blur(30px);
  background: rgba(255, 255, 255, 0.05);
  font-weight: 300;
  font-size: 15rem;
  line-height: 130%;
  color: #fff;
  flex: 0 0 314rem;
}

.main_types_list {
  display: flex;
  gap: 6rem;
  flex-wrap: wrap;
  width: 100%;
}

@media screen and (max-width: 768px) {
  .Main {
    padding-top: 150px;
    height: auto;
    padding-bottom: 50px;
  }

  .Main_info {
    gap: 30px;
  }

  .Main__title {
    font-size: 32px;
  }

  .Main__text {
    font-size: 16px;
  }

  .Main__buttons {
    gap: 10px;
    flex-wrap: wrap;
  }

  .Main_types {
    gap: 10px;
    padding-top: 20px;
    margin-top: 50px;
  }

  .main_types_head {
    font-size: 16px;
  }

  .main_types_item {
    height: auto;
    padding: 15px;
    gap: 10px;
    font-size: 14px;
    width: 100%;
    flex: 0 0 100%;
  }

  .main_types_list {
    gap: 10px;
  }
}
</style>