<script setup>
import Header from '~/components/Header.vue';
import MainSection from '~/components/license/MainSection.vue';
import AdditionalWork from '~/components/AdditionalWork.vue';
import LicensiesSection from '~/components/license/LicensiesSection.vue';
import ControlSection from '~/components/license/ControlSection.vue';
import ManagmentSection from '~/components/license/ManagmentSection.vue';
import InfoDocSection from '~/components/license/InfoDocSection.vue';
import Footer from '~/components/Footer.vue';

const items = [
  'Техническое обслуживание авиационной техники',
  'Ремонт авиационной техники и авиационных агрегатов',
  'Восстановление исправности систем воздушных судов',
  'Выполнение бюллетеней и доработок авиационной техники',
  'Выполнение лабораторных, диагностических и контрольных работ в рамках технического обслуживания и ремонта',
  'Выполнение работ в рамках системы менеджмента качества предприятия'
]

</script>
<template>
  <div class="">
    <Header />
    <MainSection />
    <AdditionalWork :title="'Перечень сертификатов и лицензий'"
      :description="'АО «КАПО Авиа» располагает действующими сертификатами и лицензиями,<br> подтверждающими право выполнения следующих видов работ:'"
      :items="items" :dopInfoBoolean="false" />
    <LicensiesSection />
    <ControlSection />
    <ManagmentSection />
    <InfoDocSection />
    <Footer />
  </div>
</template>
<style scoped></style>