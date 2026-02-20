<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  },
  dopInfo: {
    type: String,
    required: false,
    default: 'Все работы выполняются в пределах действующих допусков и в соответствии с нормативной, эксплуатационной и конструкторской документацией'
  },
  dopInfoBoolean : {
    type: Boolean,
    required: false,
    default: true
  }
})

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
        <h2 class="head-h2" v-html="title"></h2>
        <p class="description" v-html="description"></p>
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
        <div v-if="dopInfoBoolean" class="_dop-info">
          <div class="_dop-info--text" v-html="dopInfo">
            
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