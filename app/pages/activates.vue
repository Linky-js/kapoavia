<script setup>
import Header from '~/components/Header.vue';
import MainSection from '~/components/activates/MainSection.vue';
import ActivitySection from '~/components/activates/ActivitySection.vue';
import AdditionalWork from '~/components/AdditionalWork.vue';
import Footer from '~/components/Footer.vue';

const items = [
  'Проведение работ по установлению и продлению ресурсов (сроков службы) авиационной техники',
  'Капитальный, средний и текущий ремонт авиационной техники',
  'Разработка конструкторской и ремонтной документации',
  'Измерение массы и определение положения центра массы воздушных судов',
  'Противокоррозионная защита конструкции самолётов с оформлением паспорта коррозионного состояния на предприятии промышленности',
  'Подготовка и проведение лётных испытаний',
  'Техническое обслуживание воздушных судов в период проведения лётных испытаний',
  'Лабораторная проверка и ремонт изделий авиационного радиоэлектронного оборудования (АиРЭО)',
  'Расшифровка и анализ полётной информации',
  'Работы по подготовке производства и обеспечению технического обслуживания'
]
</script>
<template>
  <div class="">
    <Header />
    <MainSection />
    <ActivitySection />
    <AdditionalWork :title="'Дополнительные виды работ'" :description="'В рамках основной деятельности АО «КАПО Авиа» также выполняются следующие виды работ:'" :items="items" />
    <Footer />
  </div>
</template>
<style scoped>

</style>