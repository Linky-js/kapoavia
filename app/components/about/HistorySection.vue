<script setup>
const props = defineProps({
  history: {
    type: Array,
    required: true
  },
  dopInfo: {
    type: String,
    required: true
  }
});
</script>
<template>
  <section class="history block">
    <div class="container">
      <div class="history__content">
        <div class="labelSection">
          <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="3" r="3" fill="#2469A6" />
          </svg>
          О компании
        </div>
        <div class="history__info">
          <div class="history__head">
            <h2 class="head-h2">История АО «КАПО Авиа»</h2>
            <div class="head-h4">АО «КАПО Авиа» осуществляет деятельность с 1994 года.</div>
            <p class="description">
              В процессе развития предприятия последовательно расширялся перечень обслуживаемых типов воздушных судов,
              наращивались производственные мощности и формировалась специализированная инфраструктура для выполнения
              технического обслуживания и ремонта авиационной техники, в том числе в рамках выполнения работ по
              государственным контрактам.
            </p>
          </div>
        </div>
        <div class="head-history__items">Ключевые этапы развития предприятия:</div>
        <div class="history__items">
          <div class="history__item" v-for="(item, index) in history" :key="index">
            <div class="history__item-info">
              <h3 class="head-h3" v-html="item.date"></h3>
              <ul class="history__list">
                <p class="history__list-item" v-html="item.text">
                </p>
              </ul>
            </div>
          </div>
        </div>
        <div class="head-h2">Сегодня АО «КАПО Авиа»</div>
        <div  class="_dop-info">
          <div class="_dop-info--text" v-html="dopInfo"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.history {
  padding: 130rem 0;
  background-color: #fff;
}

.history__content {
  display: flex;
  flex-direction: column;
  gap: 26rem;
}

.history__info {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.history__head {
  display: flex;
  flex-direction: column;
  gap: 26rem;
}

.history__items {
  margin-top: 14rem;
  display: flex;
  flex-direction: column;
  gap: 16rem;
  margin-bottom: 40rem;
}

.history__item {
  display: flex;
  background-color: #f6f8fd;
}

.history__image {
  width: 524rem;
  height: 300rem;
  flex-shrink: 0;
  overflow: hidden;
}

.history__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.history__item-info {
  display: grid;
  grid-template-columns: 240rem 1fr;
  align-items: center;

  padding: 30rem 40rem;
}

.head-h3 {
  font-weight: 500;
  font-size: 26rem;
  line-height: 100%;
  color: #262d3f;
}

.history__list {
  padding-left: 20rem;
}

.history__list-item {
  list-style: disc;
  font-weight: 300;
  font-size: 16rem;
  line-height: 130%;
  color: rgba(38, 45, 63, 0.7);
}

.head-history__items {
  font-weight: 500;
  font-size: 42rem;
  line-height: 95%;
  color: #262d3f;
  margin-top: 34rem;
}

@media screen and (max-width: 768px) {
  .history {
    padding: 80px 0;
  }

  .history__content {
    gap: 30px;
  }

  .history__info {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .history__head {
    gap: 20px;
  }

  .history__items {
    gap: 20px;
    margin-top: 20px;
  }

  .history__item {
    flex-direction: column;
    padding: 10px;
  }

  .history__image {
    width: 100%;
    height: auto;
  }

  .history__item-info {
    padding: 20px;

    grid-template-columns: 140px 1fr;
  }

  .head-h3 {
    font-size: 20px;
    width: max-content;
  }

  .history__list {
    padding-left: 15px;
  }

  .history__list-item {
    font-size: 14px;
  }

  .head-history__items {
    font-size: 24px;
    margin-top: 14px;
  }
}
</style>