<script setup>
const production = [
  {
    text: 'Создание условий для стабильной и продолжительной трудовой деятельности персонала'
  },
  {
    text: 'Участие работников предприятия в спортивных и корпоративных мероприятиях',
    image: '/images/personnel/2.png'
  },
  {
    text: 'Развитие корпоративной культуры и поддержание благоприятного социального климата в коллективе',
  }
]
</script>
<template>
  <section class="production block">
    <div class="container">
      <div class="production__content">
        <div class="labelSection">
          <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="3" r="3" fill="#2469A6" />
          </svg>
          Политика
        </div>
        <div class="production__info">
          <div class="production__head">
            <h2 class="head-h2">Социальная политика предприятия</h2>
            <p class="description">
              Социальная политика АО «КАПО Авиа» направлена на создание благоприятных условий труда, формирование
              стабильной корпоративной среды и поддержание социального климата в коллективе.
            </p>
            <div class="head-h3">В рамках социальной политики реализуются следующие направления:</div>
          </div>

        </div>
        <div class="production__items">
          <div class="production__item" v-for="(item, index) in production" :key="index">
            <div class="production__item-info">
              {{ item.text }}
            </div>
            <div v-if="item.image" class="production__image">
              <img :src="item.image" alt="production">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.production__content {
  display: flex;
  flex-direction: column;
  gap: 26rem;
}

.production__info {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.production__head {
  display: flex;
  flex-direction: column;
  gap: 26rem;
}

.production__items {
  margin-top: 14rem;
  display: flex;
  flex-direction: column;
  gap: 8rem;
}

.production__item {
  display: flex;
  padding: 40rem;
  background: rgba(38, 45, 63, 0.05);
  display: flex;
  align-items: center;
  gap: 60rem;
}

.production__image {
  width: 400rem;
  height: 240rem;
  flex-shrink: 0;
  overflow: hidden;
}

.production__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.production__item-info {
  font-weight: 500;
  font-size: 22rem;
  line-height: 100%;
  color: #262d3f;
}

.head-h3 {
  font-weight: 500;
  font-size: 26rem;
  line-height: 100%;
  color: #262d3f;
}

.production__list {
  padding-left: 20rem;
}

.production__list-item {
  list-style: disc;
  font-weight: 300;
  font-size: 16rem;
  line-height: 130%;
  color: rgba(38, 45, 63, 0.7);
}

@media screen and (max-width: 768px) {
  .production {
    padding: 80px 0;
  }

  .production__content {
    gap: 30px;
  }

  .production__info {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .production__head {
    gap: 20px;
  }

  .production__items {
    gap: 20px;
    margin-top: 20px;
  }

  .production__item {
    flex-direction: column;
    padding: 10px;
    gap: 30px;
  }

  .production__image {
    width: 100%;
    height: auto;
  }

  .production__item-info {

    font-size: 18px;
  }

  .head-h3 {
    font-size: 20px;
  }

  .production__list {
    padding-left: 15px;
  }

  .production__list-item {
    font-size: 14px;
  }
}
</style>