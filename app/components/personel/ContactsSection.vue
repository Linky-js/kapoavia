<script setup>
const production = [
  {
    label: 'Телефон:',
    text: '+7 (843) 518-36-30'
  },
  {
    label: 'E-mail:',
    text: 'office@kapo-avia.ru'
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
          Контакты
        </div>
        <div class="production__info">
          <div class="production__head">
            <h2 class="head-h2">Контакты отдела кадров</h2>
            <p class="description">
              По вопросам трудоустройства и кадровой политики можно обращаться:
            </p>
            <div class="head-h3">Отдел кадров АО «КАПО Авиа»</div>
          </div>

        </div>
        <div class="production__items">
          <div class="production__item" v-for="(item, index) in production" :key="index">
            <div class="label">
              {{ item.label }}
            </div>
            <a :href="item.label === 'E-mail:' ? 'mailto:' + item.text : 'tel:' + item.text" class="link">{{ item.text
            }}</a>
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
  padding-bottom: 100rem;
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
  gap: 8rem;
  flex-wrap: wrap;
}

.production__item {
  display: flex;
  padding: 30rem;
  background: rgba(38, 45, 63, 0.05);
  display: flex;
  flex-direction: column;
  gap: 20rem;
  width: 632rem;
}

.head-h3 {
  font-weight: 500;
  font-size: 26rem;
  line-height: 100%;
  color: #262d3f;
}

.link {
  font-weight: 500;
  font-size: 26rem;
  line-height: 100%;
  color: #262d3f;
}

.label {
  font-weight: 300;
  font-size: 16rem;
  line-height: 130%;
  color: rgba(38, 45, 63, 0.7);
}

@media screen and (max-width: 768px) {
  .label {
    font-size: 14px;
  }
  .link {
    font-size: 18px;
  }

  .production__content {
    gap: 30px;
    padding-bottom: 50px;
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
    gap: 20px;
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