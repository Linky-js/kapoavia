<script setup></script>
<template>
  <div class="quality block">
    <div class="container">
      <div class="quality__content">
        <div class="quality__image">
          <img src="/images/quality/1.png" alt="quality">
        </div>
        <div class="quality__head">
          <div class="labelSection">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3" cy="3" r="3" fill="#2469A6" />
            </svg>
            Качество
          </div>
          <h2 class="head-h2">Контроль качества выполнения работ</h2>
          <p class="description">Контроль качества результатов выполненных работ осуществляется <br> в установленном
            порядке</p>
          <div class="quality_dop-info">
            <div class="quality_dop-info-title">
              Функции контроля качества закреплены:
            </div>
            <ul class="quality_dop-info-list">
              <li>За отделом технического контроля АО «КАПО Авиа»;</li>
              <li>За группой 264 Военного представительства Министерства обороны <br> Российской Федерации.</li>
            </ul>
          </div>
          <NuxtLink to="/quality" class="btn_blue">
            Контроль качества
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
.quality__content {
  display: flex;
  gap: 60rem;
}

.quality__image {
  width: 416rem;
  height: 593rem;
  flex-shrink: 0;
}

.quality__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.quality__head {
  display: flex;
  flex-direction: column;
  gap: 26rem;
  justify-content: space-between;
}

.quality_dop-info {
  margin-top: 14rem;
  border: 1px solid rgba(38, 45, 63, 0.05);
  padding: 34rem;
  display: flex;
  flex-direction: column;
  gap: 26rem;
}

.quality_dop-info-title {
  font-weight: 500;
  font-size: 26rem;
  line-height: 100%;
  color: #262d3f;
}

.quality_dop-info-list {
  padding-left: 20rem;
}

.quality_dop-info-list li {
  list-style: disc;
  font-weight: 300;
  font-size: 18rem;
  line-height: 140%;
  color: #262d3f;
}
.btn_blue{
  margin-top: auto;
}
@media screen and (max-width: 768px) {
  .quality__content {
    flex-direction: column;
    gap: 30px;
  }
  .quality__image {
    width: 100%;
    height: auto;
    display: none;
  }
  .quality_dop-info {
    padding: 20px;
    gap: 20px;
    margin-top: 30px;
  }
  .quality__head {
    gap: 20px;
  }
  .quality_dop-info-title {
    font-size: 20px;
  }
  .quality_dop-info-list {
    padding-left: 20px;
  }
  .quality_dop-info-list li {
    font-size: 16px;
  }
}
</style>