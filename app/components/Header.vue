<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const activeLinks = ref(false);
const headerActive = ref(false);

const onScroll = () => {
  headerActive.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // на случай, если страница уже проскроллена
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>
<template>
  <header class="Header" :class="{ active: headerActive }">
    <div class="container">
      <div class="Header__content">
        <NuxtLink to="/" class="logo">
          КАПО Авиа
        </NuxtLink>
        <nav class="Header__nav" :class="{ active: activeLinks }">
          <ul class="Header__list">
            <li class="Header__item">
              <NuxtLink class="links__item" to="/">Виды деятельности</NuxtLink>
            </li>
            <li class="Header__item">
              <NuxtLink class="links__item" to="/services">Обслуживаемые воздушные суда</NuxtLink>
            </li>
            <li class="Header__item">
              <NuxtLink class="links__item" to="/about">Производственная база</NuxtLink>
            </li>
          </ul>
          <div class="Header__buttons mobile">
            <div class="company_info">
              <a class="phone" href="tel:+79999999999">+7 999 999 99 99</a>
              <div class="times">
                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="3" cy="3" r="3" fill="#2469A6" />
                </svg>
                ежедневно, 9:00-22:00
              </div>
            </div>
            <NuxtLink class="btn_gray">Консультация</NuxtLink>
          </div>
        </nav>
        <div class="Header__buttons desktop">
          <div class="company_info">
            <a class="phone" href="tel:+79999999999">+7 999 999 99 99</a>
            <div class="times">
              <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3" cy="3" r="3" fill="#2469A6" />
              </svg>
              ежедневно, 9:00-22:00
            </div>
          </div>
          <NuxtLink class="btn_gray">Консультация</NuxtLink>
        </div>
        <div class="burger" :class="{ active: activeLinks }" @click="activeLinks = !activeLinks">
          <svg width="31" height="21" viewBox="0 0 31 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line class="line line-1" y1="0.5" x2="31" y2="0.5" />
            <line class="line line-2" x1="8.65073" y1="10.4359" x2="31.0002" y2="10.4359" />
            <line class="line line-3" y1="20.5" x2="31" y2="20.5" />
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
.Header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20rem 0;
  background: #41465000;
  z-index: 100;
  transition: all 0.3s ease;
}
.Header.active {
  backdrop-filter: blur(30px);
  background: rgba(0, 0, 0, 0.26);
}

.Header__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 63rem;
  white-space: nowrap;
}

.Header__nav {
  display: flex;
  align-items: center;
}

.Header__list {
  display: flex;
  align-items: center;
  gap: 22rem;
}

.Header__buttons {
  display: flex;
  gap: 20rem;
  align-items: center;
}

.btn_gray {
  min-width: 160rem;
  width: 160rem;
  padding: 16rem 26rem;
}



.company_info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.burger {
  display: none;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .burger {
    display: block;
    position: relative;
    z-index: 9;
    width: 31px;
    height: 20px;
  }

  .burger .line {
    stroke: #fff;
    stroke-width: 1;
    transition: transform 0.3s ease, opacity 0.2s ease;
    transform-origin: center;
  }

  /* Активное состояние */
  .burger.active .line-1 {
    transform: translateY(10px) rotate(45deg);
  }

  .burger.active .line-2 {
    opacity: 0;
  }

  .burger.active .line-3 {
    transform: translateY(-10px) rotate(-45deg);
  }

 

  .Header {
    padding: 20px 0;
    backdrop-filter: blur(30px);
    background: rgba(255, 255, 255, 0.15);
  }

  .Header__content {
    gap: 20px;
  }

  .Header__nav {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    transition: all 0.3s ease;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    padding: 30px;
    flex-direction: column;
  }

  .Header__nav.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
    gap: 50px;
  }

  .Header__list {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .Header__buttons.mobile {
    display: flex !important;
    gap: 10px;
  }

  .btn_gray {
    padding: 12px 20px;
    font-size: 14px;
    width: 150px;
    min-width: auto;
  }
}
</style>