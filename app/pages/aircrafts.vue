<script setup>
import Header from '~/components/Header.vue';
import MainSection from '~/components/aircrafts/MainSection.vue';
import VesselsSection from '~/components/aircrafts/VesselsSection.vue';
import AdditionalWork from '~/components/AdditionalWork.vue';
import Footer from '~/components/Footer.vue';

useHead({
  title: 'Обслуживаемые типы воздушных судов — КАПО Авиа',
  meta: [
    { name: 'description', content: 'Перечень обслуживаемых типов воздушных судов: Ил-62М, Ил-76, Ан-26, Ту-214, Ту-204 и другие.' }
  ]
})

const vessels = [
  { name: "Ил-62М (МГр)", image: "/images/vessels/1.png" },
  { name: "Ил-76ТД (МД)", image: "/images/vessels/2.png" },
  { name: "Ан-26 и его модификации", image: "/images/vessels/3.png" },
  { name: "Ил-80", image: "/images/vessels/4.png" },
  { name: "Ту-214 и его модификации", image: "/images/vessels/5.png" },
  { name: "Ту-204-300", image: "/images/vessels/6.png" }
];
const items = [
  'Техническое обслуживание в регламентных объёмах',
  'Восстановление исправности систем и агрегатов',
  'Ремонт авиационных агрегатов (включая агрегаты с сотовым заполнителем)',
  'Оценку технического состояния авиационной техники',
  'Диагностические и контрольные мероприятия',
  'Выполнение бюллетеней и доработок',
  'Мероприятия по продлению ресурсов (сроков службы) в пределах допусков'
]
</script>
<template>
  <div class="">
    <Header />
    <MainSection />
    <VesselsSection :vessels="vessels" :dopInfo="false" />
    <AdditionalWork :title="'Дополнительные виды работ'"
      :description="'В рамках основной деятельности АО «КАПО Авиа» также выполняются следующие виды работ:'"
      :items="items"
      :dopInfo="'Перечень выполняемых работ определяется действующими допусками, эксплуатационной и конструкторской документацией, а также программами технического обслуживания'" />
    <Footer />
  </div>
</template>
<style scoped></style>