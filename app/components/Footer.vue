<script setup></script>
<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__column">
          <div class="footer__label">
            Связаться с нами
          </div>
          <div class="footer__items">

            <a class="phone" href="tel:+7 (843) 518-36-30">+7 (843) 518-36-30</a>
            <div class="times">
              <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3" cy="3" r="3" fill="#2469A6" />
              </svg>
              ПН-ПТ, 9:00-18:00
            </div>
            <a class="links__item email" href="mailto:office@kapo-avia.ru">office@kapo-avia.ru</a>

          </div>
        </div>
        <div class="footer__column">
          <div class="footer__label">
            Юридический адрес
          </div>
          <div class="footer__items">
            <p class="links__item">420127, Россия, РТ, г. Казань,<br> ул. Дементьева, д.70А, офис 213</p>
          </div>
        </div>
        <div class="footer__column">
          <div class="footer__label">
            Меню
          </div>
          <div class="footer__items">
            <NuxtLink to="/contacts" class="links__item">Контакты</NuxtLink>
            <NuxtLink to="/about" class="links__item">Общая информация</NuxtLink>
            <NuxtLink to="/personnel" class="links__item">Кадры и социальная политика</NuxtLink>
            <NuxtLink to="/license" class="links__item">Сертификаты и лицензии</NuxtLink>
            <NuxtLink to="/activates" class="links__item">Виды деятельности</NuxtLink>
            <NuxtLink to="/aircrafts" class="links__item">Обслуживаемые воздушные суда</NuxtLink>
            <NuxtLink to="/base" class="links__item">Производственная база</NuxtLink>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__column">
          <div class="logo">
            АО «КАПО Авиа»
          </div>
        </div>
        <div class="footer__column">
          <NuxtLink class="copyrightLInk" to="/license">
            Политика конфиденциальности
          </NuxtLink>
        </div>
        <div class="footer__column">
          <NuxtLink class="copyrightLInk" to="/license">
            Согласие на обработку данных
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  padding: 60rem 0 40rem;
  background: #262d3f;
}

.footer__content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16rem;
}

.footer__column {
  display: flex;
  flex-direction: column;
  gap: 30rem;
}

.footer__label {
  font-weight: 300;
  font-size: 16rem;
  line-height: 130%;
  color: rgba(255, 255, 255, 0.5);
}

.footer__items {
  display: flex;
  flex-direction: column;
  gap: 12rem;
}

.email {
  margin-top: 18rem;
}

.footer__bottom {
  margin-top: 90rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 30rem 0rem 0rem;
  width: 1280rem;
  height: 57rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16rem;
}

@media screen and (max-width: 768px) {
  .footer{
    padding: 40px 0;
  }
  .footer__content, .footer__bottom {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .footer__column{
    gap: 20px;
    width: 100%;
  }
  .footer__label{
    font-size: 14px;
  }
  .footer__items{
    gap: 16px;
  }
  .email{
    margin-top: 10px;
  }
  .links__item, .times , .phone{
    color: #fff;
  }
  .footer__bottom{
    padding: 20px 0 0;
    width: 100%;
    height: max-content;
    margin-top: 40px;
  }
}

</style>
