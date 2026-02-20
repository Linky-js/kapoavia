<script setup>
const props = defineProps({
  production: {
    type: Array,
    required: true
  }
});
</script>
<template>
  <section class="production block">
    <div class="container">
      <div class="production__content">
        <div class="labelSection">
          <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="3" r="3" fill="#2469A6" />
          </svg>
          Производство
        </div>
        <div class="production__info">
          <div class="production__head">
            <h2 class="head-h2">Производственная база <br> и инфраструктура</h2>
            <p class="description">
              АО «КАПО Авиа» располагает производственной базой, включающей:
            </p>
          </div>
         
        </div>
        <div class="production__items">
          <div class="production__item" v-for="(item, index) in production" :key="index">
            <div class="production__image">
              <img :src="item.image" alt="production">
            </div>
            <div class="production__item-info">
              <h3 class="head-h3">{{ item.title }}</h3>
              <ul class="production__list">
                <li class="production__list-item" v-for="(listItem, listIndex) in item.list" :key="listIndex">
                  {{ listItem }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.production{
  padding: 130rem 0;
  background-color: #fff;
}
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
  gap: 16rem;
}

.production__item {
  display: flex;
  padding: 10rem;
  background-color: #f6f8fd;
}

.production__image {
  width: 524rem;
  height: 300rem;
  flex-shrink: 0;
  overflow: hidden;
}

.production__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.production__item-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20rem;
  padding: 40rem;
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
  .production{
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
  }

  .production__image {
    width: 100%;
    height: auto;
  }

  .production__item-info {
    padding: 20px;
    gap: 30px;
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