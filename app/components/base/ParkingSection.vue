<script setup></script>
<template>
  <section class="Parking block">
    <div class="container">
      <div class="Parking__content">
        <div class="Parking__info">
          <div class="labelSection">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3" cy="3" r="3" fill="#2469A6" />
            </svg>
            Стоянка
          </div>
          <h2 class="head-h2">Места стоянок <br> воздушных судов</h2>
          <p class="description">
            Производственная база включает оборудованные места стоянок воздушных судов, предназначенные для размещения
            авиационной техники в процессе технического обслуживания и ремонта.
          </p>
        </div>
        <div class="Parking__image">
          <img src="/images/parking.png" alt="Parking">
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.Parking__content {
  display: flex;
  gap: 60rem;
  justify-content: space-between;
  padding-bottom: 100rem;
}

.Parking__info {
  display: flex;
  flex-direction: column;
  gap: 26rem;
  justify-content: space-between;
  width: 100%;
  max-width: 588rem;
}

.Parking__image {
  width: 632rem;
  height: 360rem;
  flex-shrink: 0;
}

.Parking__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 768px) {
  .Parking__content{
    padding-bottom: 50px;
    gap: 30px;
    flex-direction: column;
  }
  .Parking__info{
    gap: 30px;
  }
  .Parking__image{
    width: 100%;
    height: 300px;
  }
}
</style>