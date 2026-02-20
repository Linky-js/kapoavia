<script setup>


</script>
<template>
  <section class="AddinationalWork">
    <div class="container">
      <div class="AddinationalWork__content">
        <div class="labelSection">
          <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="3" r="3" fill="#2469A6" />
          </svg>
          Система менеджмента
        </div>
        <h2 class="head-h2">Связь с системой менеджмента качества</h2>
        <p class="description">Сертификаты и лицензии АО «КАПО Авиа» являются неотъемлемой частью системы менеджмента
          качества предприятия. <br><br>
          Наличие действующей разрешительной документации обеспечивает соответствие выполняемых работ установленным
          требованиям, нормативам и эксплуатационной документации разработчиков авиационной техники.<br><br>
          Контроль качества и приёмка выполняемых работ осуществляются с участием группы 264 военного представительства
          Министерства обороны Российской Федерации.</p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.AddinationalWork {
  padding-top: 30rem;
  background-color: #fff;
}

.description {
  font-size: 18rem;
}

.AddinationalWork__content {
  display: flex;
  flex-direction: column;
  gap: 26rem;
  padding-bottom: 130rem;
}

.AddinationalWork__items {
  display: flex;
  flex-wrap: wrap;
  gap: 16rem;
  margin: 14rem 0;
}

.AddinationalWork__item {
  width: 416rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 35rem;
  backdrop-filter: blur(30px);
  background: rgba(38, 45, 63, 0.05);
  padding: 30rem;
  font-weight: 300;
  font-size: 18rem;
  line-height: 140%;
  color: #262d3f;
}

@media screen and (max-width: 768px) {
  .description {
    font-size: 14px;
  }

  .AddinationalWork__content {
    gap: 30px;
    padding-bottom: 50px;
  }

  .AddinationalWork__items {
    gap: 16px;
    display: grid;
    grid-template-columns: 1fr;
    margin: 14px 0;
  }

  .AddinationalWork__item {
    width: 100%;
    gap: 30px;
    padding: 15px;
    font-size: 14px;
  }
}
</style>