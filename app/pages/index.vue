<script setup>
import Header from '~/components/Header.vue';
import MainSection from '~/components/home/MainSection.vue';
import AboutSection from '~/components/home/AboutSection.vue';
import Slides from '~/components/home/Slides.vue';
import VesselsSection from '~/components/home/VesselsSection.vue';
import ProductionSection from '~/components/home/ProductionSection.vue';
import ControlSystemSection from '~/components/home/ControlSystemSection.vue';
import QualitySection from '~/components/home/QualitySection.vue';
import LicenseSection from '~/components/home/LicenseSection.vue';
import Footer from '~/components/Footer.vue';

useHead({
  title: 'Техническое обслуживание и ремонт авиационной техники — КАПО Авиа',
  meta: [
    { name: 'description', content: 'КАПО Авиа — техническое обслуживание и ремонт авиационной техники: Ил-62М, Ил-76, Ан-26, Ту-214 и др.' }
  ]
})

const licenseItems = [
  {
    image: "/images/license/1.png",
    title: "Лицензия № 00000 на осуществление деятельности по техническому обслуживанию и ремонту воздушных судов",
  },
  {
    image: "/images/license/1.png",
    title: "Лицензия № 00000 на осуществление деятельности по техническому обслуживанию и ремонту авиационных двигателей",
  },
  {
    image: "/images/license/1.png",
    title: "Лицензия № 00000 на осуществление деятельности по техническому обслуживанию и ремонту авиационных двигателей",
  },
  {
    image: "/images/license/1.png",
    title: "Сертификат № 00000 соответствия системы менеджмента качества требованиям ГОСТ Р ИСО 9001-2015",
  },
];

const controlImages = [
  "/images/control-system/1.png",
  "/images/control-system/2.png",
  "/images/control-system/3.png",
];

const productionItems = [
  {
    image: "/images/production/1.png",
    title: "Цеха технического обслуживания:",
    list: [
      "цеха технического обслуживания воздушных судов;",
      "цех подготовки производства;",
      "лётно-испытательную станцию (ЛИС);",
      "лаборатории и специализированные участки."
    ]
  },
  {
    image: "/images/production/2.png",
    title: "Лаборатории и участки:",
    list: [
      "участок технической диагностики и неразрушающего контроля;",
      "участок расшифровки и анализа полётной информации;",
      "участок слесарно-механических и малярных работ;",
      "участок ремонта интерьера воздушных судов.",
    ]
  },
  {
    image: "/images/production/3.png",
    title: "АО «КАПО Авиа» располагается на территории ОАО «Международный аэропорт „Казань“», инфраструктура которого обеспечивает:",
    list: [
      "стоянки воздушных судов;",
      "взлётно-посадочные полосы и рулёжные дорожки;",
      "транспортную, энергетическую и инженерную инфраструктуру;",
      "обеспечение авиационной и транспортной безопасности.",
    ]
  }
];

const vessels = [
  { name: "Ил-62М (МГр)", image: "/images/vessels/1.png" },
  { name: "Ил-76ТД (МД)", image: "/images/vessels/2.png" },
  { name: "Ан-26 и его модификации", image: "/images/vessels/3.png" },
  { name: "Ил-80", image: "/images/vessels/4.png" },
  { name: "Ту-214 и его модификации", image: "/images/vessels/5.png" },
  { name: "Ту-204-300", image: "/images/vessels/6.png" }
];

const slides = [
  '/images/11.png',
  '/images/12.png',
  '/images/13.png',
  '/images/11.png',
  '/images/12.png'
];
</script>
<template>
  <div class="home">
    <Header />
    <MainSection />
    <AboutSection />
    <Slides :slides="slides" />
    <VesselsSection :vessels="vessels" />
    <ProductionSection :production="productionItems" />
    <ControlSystemSection :images="controlImages" />
    <QualitySection />
    <LicenseSection :license="licenseItems" />
    <Footer />
  </div>
</template>
<style scoped></style>