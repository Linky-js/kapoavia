<script setup></script>
<template>
  <section class="about-section block">
    <div class="container">
      <div class="about-section__content">
        <div class="labelSection">
          <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="3" r="3" fill="#2469A6" />
          </svg>
          История предприятия
        </div>
        <div class="about-section__text">
          <h2 class="head-h2">с 1994 года АО «КАПО Авиа» осуществляет деятельность </h2>
          <p class="about-section__description">
            В процессе развития предприятие последовательно расширяло перечень обслуживаемых типов воздушных судов,
            развивало производственную базу и наращивало компетенции в области технического обслуживания и ремонта
            авиационной техники, в том числе при выполнении работ по государственным контрактам.
          </p>
          <NuxtLink to="/about" class="btn_blue">Подробнее о компании
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
.about-section__content {
  display: flex;
  gap: 16rem;

}

.labelSection {
  width: 416rem;
  flex-shrink: 0;
}

.about-section__text {
  display: flex;
  flex-direction: column;
  gap: 40rem;
}

.about-section__description {
  font-weight: 300;
  font-size: 18rem;
  line-height: 140%;
  color: rgba(38, 45, 63, 0.7);
}
@media screen and (max-width: 768px) {
  .about-section__content {
    flex-direction: column;
    gap: 30px;
  }
  .labelSection {
    width: 100%;
  }
   .about-section__description {
    font-size: 16px;
  }
  .about-section__text {
    gap: 20px;
  }
}
</style>