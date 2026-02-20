<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import breadcrumbs from "../breadcrumbs.vue";
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
        <img src="~/assets/img/1.png" alt="slide">
      </SwiperSlide>
      <SwiperSlide class="Main_slide">
        <img src="~/assets/img/1.png" alt="slide">
      </SwiperSlide>
    </Swiper>
    <div class="container">
      <breadcrumbs :links="[{ title: 'Главная', link: '/' }, { title: 'Производственная база', link: '' }]">
      </breadcrumbs>
      <div class="Main_info">

        <h1 class="Main__title">Производственная база <br> и инфраструктура</h1>
        <p class="Main__text">
          АО «КАПО Авиа» располагает собственной специализированной производственной базой, предназначенной для
          выполнения полного комплекса работ по техническому обслуживанию и ремонту авиационной техники. <br><br>
          Производственная структура включает специализированные цеха технического обслуживания, лаборатории, участки
          диагностики и вспомогательную инфраструктуру, обеспечивающие выполнение регламентных и восстановительных работ
          в соответствии с действующими нормативными требованиями.
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.Main {
  position: relative;
  padding-top: 123rem;
  padding-bottom: 177rem;
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
  padding-top: 129rem;
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
    padding-top: 100px;
    height: auto;
    padding-bottom: 50px;
  }

  .Main_info {
    gap: 30px;
    padding-top: 50px;
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