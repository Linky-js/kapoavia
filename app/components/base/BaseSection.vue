<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Fancybox } from "@fancyapps/ui";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
const modules = [Autoplay, Pagination, Navigation];
const items = [
  '- цех технического обслуживания ВС Ил-62М;',
  '- цех технического обслуживания Ил-76;',
  '- цех технического обслуживания Ан-26;',
  '- цех технического обслуживания Ту-214;',
  '- цех подготовки производства, в том числе складские помещения (участок промывки фильтров, аккумуляторно-зарядная станция, участок заправки огнетушителей, расходная кладовая);',
  '- участок слесарно-механических работ;',
  '- участок лабораторной проверки и ремонта АиРЭО;',
  '- участок технической диагностики и неразрушающего контроля;',
  '- участок расшифровки и анализа полетной информации.',
  '- административные помещения, раздевалки;',
]
const items2 = [
  '- участок лабораторной проверки и ремонта АиРЭО;',
  '- участок технической диагностики и неразрушающего контроля;',
  '- участок расшифровки и анализа полетной информации.',
  '- административные помещения, раздевалки;',
  '- места стоянок для ВС.',
]

const slides = [
  '/images/base/11.png',
  '/images/base/11.png',
  '/images/base/11.png',
  '/images/base/11.png',
  '/images/base/11.png'
]
onMounted(() => {
  Fancybox.bind("[data-fancybox='gallery']", {
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
  Fancybox.bind("[data-fancybox='gallery2']", {
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
})
</script>
<template>
  <section class="Base">
    <div class="container">
      <div class="Base_content">
        <div class="base__info">
          <div class="labelSection">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3" cy="3" r="3" fill="#2469A6" />
            </svg>
            База
          </div>
          <div class="head-h2">Производственная база</div>
          <div class="description">АО «КАПО Авиа» располагает производственной базой, включающей:</div>
          <div class="head__items">Цеха технического обслуживания</div>
          <ul class="items">
            <li v-for="item in items" :key="item" v-html="item"></li>
          </ul>
        </div>
        <div class="slider">
          <ClientOnly>
            <swiper class="mySwiper" :slides-per-view="1" :space-between="20" :loop="true" :autoplay="{
              delay: 4000,
              disableOnInteraction: false
            }" :speed="1000" :navigation="true" :modules="modules">
              <swiper-slide class="Slides_slide" v-for="(slide, index) in slides" :key="index">
                <a :href="slide" data-fancybox="gallery">
                  <NuxtImg format="auto" :src="slide" alt="slide" preset="default" />
                </a>
              </swiper-slide>
            </swiper>
          </ClientOnly>
        </div>
      </div>
      <div class="labs_content">
        <div class="labs_images">
          <ClientOnly>
            <Swiper :slides-per-view="1" :space-between="0" :loop="true" :centeredSlides="true" :autoplay="{
              delay: 4000,
              disableOnInteraction: false
            }" :speed="1000" :navigation="true" :modules="modules" class="labs_mySwiper">
              <SwiperSlide class="labs_slide" v-for="(slide, index) in slides" :key="index">
                <a :href="slide" data-fancybox="gallery2">
                  <NuxtImg format="auto" :src="slide" alt="slide" preset="default" />
                </a>
              </SwiperSlide>
            </Swiper>
          </ClientOnly>
        </div>
        <div class="labs__info">
          <div class="head__items">Лаборатории и участки</div>
          <ul class="items">
            <li v-for="item in items2" :key="item" v-html="item"></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.Base {
  background-color: #fff;
  padding: 130rem 0;
}

.Base_content {
  display: flex;
  justify-content: space-between;
  gap: 50rem;
}

.base__info {
  display: flex;
  flex-direction: column;
  gap: 26rem;
}

.slider {
  max-width: 632rem;
  width: 100%;
  height: 100%;

}

.Slides_slide {
  height: 771rem;
}

.mySwiper {
  width: 100%;
  height: 100%;
}

.head__items {
  font-weight: 500;
  font-size: 36rem;
  line-height: 95%;
  color: #262d3f;
}

.items {
  font-weight: 300;
  font-size: 18rem;
  line-height: 140%;
  color: #262d3f;
  display: flex;
  flex-direction: column;
  gap: 10rem;
}

.labs_content {
  padding-top: 260rem;
  display: flex;
  justify-content: space-between;
  gap: 50rem;
  align-items: center;
}

.labs_images {
  max-width: 632rem;
  width: 100%;
  height: 100%
}

.labs_slide {
  width: 632rem;
  height: 400rem;
}

.labs_slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.labs__info {
  display: flex;
  flex-direction: column;
  gap: 26rem;
}

@media screen and (max-width: 768px) {
  .Base {
    padding: 80px 0;
  }

  .Base_content {
    flex-direction: column;
    gap: 30px;
  }

  .base__info {
    gap: 20px;
  }

  .slider {
    max-width: 100%;
    width: 100%;
    height: 100%;
  }

  .head__items {
    font-size: 24px;
  }

  .items {
    font-size: 14px;
    gap: 10px;
  }

  .Slides_slide {
    height: 300px;
    width: 100%;
  }

  .Slides_slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .labs_content {
    padding-top: 100px;
    gap: 30px;
    flex-direction: column;
    align-items: flex-start;
  }

  .labs__info {
    gap: 20px;
  }

  .labs_slide {
    width: 100%;
    height: 300px;
  }
}
</style>