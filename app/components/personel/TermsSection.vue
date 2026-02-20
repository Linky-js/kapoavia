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
            Условия
          </div>
          <div class="head-h2">Условия труда <br> и охрана труда</div>

          <div class="description mtAuto">На предприятии созданы условия, обеспечивающие выполнение производственных
            задач с соблюдением требований охраны труда и промышленной безопасности. <br><br>
            В структуре предприятия предусмотрены административные и вспомогательные помещения, раздевалки и иные
            объекты, необходимые для организации рабочего процесса и обеспечения условий труда персонала.</div>
        </div>
        <div class="slider">
          <NuxtImg src="/images/personnel/3.png" alt="" />
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
  justify-content: space-between;
}

.mtAuto {
  margin-top: auto;
}

.slider {
  width: 632rem;
  flex-shrink: 0;
  height: 420rem;

}

.slider img {
  width: 100%;
  height: 100%;
  object-fit: cover;

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

.description {
  font-weight: 300;
  font-size: 18rem;
  line-height: 140%;
  color: rgba(38, 45, 63, 0.7);
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

  .description {
    font-size: 12px;
  }
}
</style>