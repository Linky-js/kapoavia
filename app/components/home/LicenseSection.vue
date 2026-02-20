<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Fancybox } from "@fancyapps/ui";
import { onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  license: {
    type: Array,
    default: () => []
  }
});

onMounted(() => {
  Fancybox.bind("[data-fancybox='licenses']", {
    Thumbs: false,
    Toolbar: {
      display: [
        "zoom",
        "close",
      ],
    },
    Image: {
      zoom: true,
      click: "zoom",
      wheel: "slide",
    },
  });
});

onBeforeUnmount(() => {
  Fancybox.destroy();
});
</script>

<template>
  <section class="license block">
    <NuxtImg format="auto" src="/images/bgLicense.png" alt="" class="background" />
    <div class="container">
      <div class="license__content">
        <div class="labelSection">
          <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="3" r="3" fill="#2469A6" />
          </svg>
          Правовая база
        </div>
        <h2 class="head-h2">Лицензии и сертификаты</h2>
        <div class="license_dop-info">
          <p>АО «КАПО Авиа» осуществляет деятельность на основании действующих лицензий <br> и сертификатов, выданных
            уполномоченными органами</p>
          <NuxtLink to="/license" class="btn_blue">
            Лицензии и сертификаты
            <svg width="31" height="12" viewBox="0 0 31 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30.5303 6.05328C30.8232 5.76039 30.8232 5.28551 30.5303 4.99262L25.7574 0.219648C25.4645 -0.073245 24.9896 -0.073245 24.6967 0.219648C24.4038 0.512542 24.4038 0.987415 24.6967 1.28031L28.9393 5.52295L24.6967 9.76559C24.4038 10.0585 24.4038 10.5334 24.6967 10.8263C24.9896 11.1191 25.4645 11.1191 25.7574 10.8263L30.5303 6.05328ZM0 5.52295V6.27295H30V5.52295V4.77295H0V5.52295Z"
                fill="white" />
            </svg>
          </NuxtLink>
        </div>
        <Swiper :slides-per-view="1.2" :space-between="20" :loop="true" :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }" :speed="600" :pagination="{
            clickable: true
          }" :navigation="true" :breakpoints="{
          '768': {
            slidesPerView: 4,
            spaceBetween: 20,
          }
        }" :modules="modules" class="license__items">
          <SwiperSlide v-for="(item, index) in props.license" :key="index">
            <div class="license__item">
              <a :href="item.image" data-fancybox="licenses" :data-caption="item.title" class="license_image">
                <NuxtImg format="auto" :src="item.image" :alt="item.title" />
              </a>
              <p class="description">{{ item.title }}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>
<style scoped>
.license {
  position: relative;
  padding: 100rem 0;
  background: rgba(21, 25, 37, 0.8);
  height: 942rem;
}

.license::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(21, 25, 37, 0.8) 0%, rgba(21, 25, 37, 0.9) 100%);
  z-index: 1;
}

.license .background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.license__content {
  display: flex;
  flex-direction: column;
  gap: 26rem;
  z-index: 3;
  position: relative;
}

.head-h2 {
  color: #fff;
}

.labelSection {
  color: #6B6E78;
}

.license_dop-info {
  display: flex;
  gap: 40rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 22rem;
}

.license__items {
  width: 100%;
  margin-top: 34rem;
}

.license__item {
  display: flex;
  flex-direction: column;
  gap: 20rem;
  width: 308rem;
}

.license_image {
  height: 445rem;
}

.license_image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.description {
  color: #fff;
  font-size: 14rem;
}

@media screen and (max-width: 768px) {
  .license {
    padding: 80px 0;
    height: max-content;
  }

  .license__content {
    gap: 30px;
  }

  .license_dop-info {
    flex-direction: column;
    gap: 20px;
    text-align: center;
    font-size: 16px;
  }

  .license__items {
    margin-top: 10px;
  }

  .license__item {
    width: 100%;
    gap: 20px;
    width: 100%;
  }

  .license_image {
    height: auto;
  }

  .description {
    font-size: 12px;
  }
}
</style>