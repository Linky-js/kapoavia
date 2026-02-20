<script setup></script>
<template>
  <div class="quality block">
    <div class="container">
      <div class="quality__content">
        <div class="quality__image">
          <NuxtImg format="auto" src="/images/quality/1.png" alt="quality" />
        </div>
        <div class="quality__head">
          <div class="labelSection">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3" cy="3" r="3" fill="#2469A6" />
            </svg>
            Качество
          </div>
          <h2 class="head-h2">Контроль качества выполнения работ</h2>
          <p class="description">Контроль качества и приёмка работ, выполняемых при техническом обслуживании и ремонте
            самолётов Ил-76ТД (МД), осуществляются в установленном порядке</p>
          <div class="quality_dop-info">
            <div class="quality_dop-info-title">
              Функции контроля качества закреплены:
            </div>
            <ul class="quality_dop-info-list">
              За группой 264 военного представительства Министерства обороны Российской Федерации, что обеспечивает
              соответствие установленным требованиям и нормативам.
            </ul>
          </div>
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

.btn_blue {
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