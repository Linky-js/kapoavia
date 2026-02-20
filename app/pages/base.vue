<script setup>
import Header from '~/components/Header.vue';
import MainSection from '~/components/base/MainSection.vue';
import BaseSection from '~/components/base/BaseSection.vue';
import QualitySection from '~/components/base/QualitySection.vue';
import ProductionSection from '~/components/base/ProductionSection.vue';
import AdditionalWork from '~/components/AdditionalWork.vue';
import ParkingSection from '~/components/base/ParkingSection.vue';
import Footer from '~/components/Footer.vue';

useHead({
  title: 'Производственная база и инфраструктура — КАПО Авиа',
  meta: [
    { name: 'description', content: 'Производственная база АО «КАПО Авиа»: цеха, лаборатории, участки технического обслуживания и ремонта.' }
  ]
})

const productionItems = [
  {
    image: "/images/production/1.png",
    title: "Лаборатория проверки и ремонта АиРЭО",
    text: 'Проведение лабораторных проверок и восстановительного ремонта изделий авиационного радиоэлектронного оборудования'
  },
  {
    image: "/images/production/2.png",
    title: "Участок технической диагностики <br> и неразрушающего контроля",
    text: 'Выполнение работ по диагностике технического состояния авиационной техники с применением методов неразрушающего контроля'
  },
  {
    image: "/images/production/3.png",
    title: "Участок расшифровки и анализа полётной информации",
    text: 'Расшифровка и анализ полётной информации для оценки технического состояния воздушных судов и выявления возможных отклонений'
  },
  {
    image: "/images/production/3.png",
    title: "Участок слесарно-механических работ",
    text: 'Выполнение слесарно-механических работ в рамках технического обслуживания и ремонта авиационной техники'
  }
];
const items = [
  'Складские помещения и расходная кладовая',
  'Аккумуляторно-зарядная станция',
  'Участок промывки фильтров',
  'Участок заправки огнетушителей',
  'Административные и вспомогательные помещения'
]
</script>
<template>
  <div class="">
    <Header />
    <MainSection />
    <BaseSection />
    <QualitySection />
    <ProductionSection :production="productionItems" />
    <AdditionalWork :title="'Подготовка производства'"
      :description="'В рамках подготовки производства и обеспечения технического обслуживания используются следующие объекты инфраструктуры:'"
      :items="items" :dopInfoBoolean="false" />
    <ParkingSection />
    <Footer />
  </div>
</template>
<style scoped></style>