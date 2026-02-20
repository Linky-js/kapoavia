<script setup>

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
            Документация
          </div>
          <div class="head-h2">Использование разрешительной документации</div>

          <div class="description mtAuto">Сертификаты, лицензии и разрешительные документы используются при выполнении работ по техническому обслуживанию и ремонту авиационной техники, а также при взаимодействии с заказчиками и контролирующими организациями.</div>
        </div>
        <div class="slider">
          <img src="/images/license/5.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.Base {
  padding: 130rem 0;
}
.description {
  font-size: 18rem;
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

@media screen and (max-width: 768px) {
  .Base {
    padding: 80px 0;
  }
  .description {
    font-size: 14px;
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