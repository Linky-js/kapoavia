<script setup>

const items = [
  'Сертификаты соответствия на выполнение работ по техническому обслуживанию и ремонту авиационной техники'
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
          Документы
        </div>
        <h2 class="head-h2">Действующие разрешительные документы</h2>
        <p class="description">В числе действующих разрешительных документов АО «КАПО Авиа»:</p>
        <div class="AddinationalWork__items">
          <div v-for="item in items" class="AddinationalWork__item">

            <div class="text" v-html="item">
            </div>
            <div class="icon">
              <svg width="51" height="12" viewBox="0 0 51 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M50.5303 6.05328C50.8232 5.76039 50.8232 5.28551 50.5303 4.99262L45.7574 0.219648C45.4645 -0.073245 44.9896 -0.073245 44.6967 0.219648C44.4038 0.512542 44.4038 0.987415 44.6967 1.28031L48.9393 5.52295L44.6967 9.76559C44.4038 10.0585 44.4038 10.5334 44.6967 10.8263C44.9896 11.1191 45.4645 11.1191 45.7574 10.8263L50.5303 6.05328ZM0 5.52295V6.27295H50V5.52295V4.77295H0V5.52295Z"
                  fill="#2897F8" />
              </svg>
            </div>
          </div>
        </div>
        <div v-if="dopInfoBoolean" class="_dop-info">
          <div class="_dop-info--text" v-html="dopInfo">

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.AddinationalWork{
  padding-top: 100rem;
  background-color: #fff;
}
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
  width: 416rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 42rem;
  backdrop-filter: blur(30px);
  background: rgba(40, 151, 248, 0.1);
  padding: 30rem;
  font-weight: 500;
  font-size: 22rem;
  line-height: 100%;
  color: #2897f8;
}

.icon{
  align-self: flex-end;
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