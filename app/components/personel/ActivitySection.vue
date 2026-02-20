<script setup>
const items = [
  'Обучение и повышение квалификации специалистов в установленном порядке',
  'Поддержание и актуализацию профессиональных знаний и практических навыков персонала',
  'Подготовку специалистов для выполнения работ в специализированных цехах, лабораториях и на производственных участках;',
  'Допуск персонала к выполнению работ в пределах действующих квалификационных требований и нормативной документации'
]
</script>
<template>
  <section class="AddinationalWork block">
    <div class="container">
      <div class="AddinationalWork__content">
        <div class="labelSection">
          <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="3" r="3" fill="#2469A6" />
          </svg>
          Деятельность
        </div>
        <h2 class="head-h2">Подготовка и развитие кадров</h2>
        <p class="description">Подготовка специалистов АО «КАПО Авиа» осуществляется в соответствии с требованиями, предъявляемыми к персоналу, выполняющему работы по техническому обслуживанию и ремонту авиационной техники.</p>
        <div class="head-h3">Подготовка и развитие кадров включают:</div>
        <div class="AddinationalWork__items">
          <div v-for="item in items" class="AddinationalWork__item">
            <div class="icon">
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.3333 1L5.16667 10.1667L1 6" stroke="#2897F8" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
            <div class="text" v-html="item">
            </div>
          </div>
        </div>
        <div  class="_dop-info">
          <div class="_dop-info--text">
            Кадровый состав предприятия обеспечивает выполнение регламентных, восстановительных и ремонтных работ в рамках действующих допусков, нормативных требований и программ технического обслуживания.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.AddinationalWork__content {
  display: flex;
  flex-direction: column;
  gap: 26rem;
  padding-bottom: 50rem;
}

.AddinationalWork__items {
  display: flex;
  flex-wrap: wrap;
  gap: 16rem;
  margin: 14rem 0;
}

.AddinationalWork__item {
  width: 632rem;
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