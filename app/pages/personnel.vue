<script setup>
import Header from '~/components/Header.vue';
import MainSection from '~/components/personel/MainSection.vue';
import ActivitySection from '~/components/personel/ActivitySection.vue';
import SpecialistsSection from '~/components/personel/SpecialistsSection.vue';
import PoliticSection from '~/components/personel/PoliticSection.vue';
import TermsSection from '~/components/personel/TermsSection.vue';
import ContactsSection from '~/components/personel/ContactsSection.vue';
import Footer from '~/components/Footer.vue';

const vessels = [
  { name: "Ил-62М (МГр)", image: "/images/vessels/1.png" },
  { name: "Ил-76ТД (МД)", image: "/images/vessels/2.png" },
  { name: "Ан-26 и его модификации", image: "/images/vessels/3.png" },
  { name: "Ил-80", image: "/images/vessels/4.png" },
  { name: "Ту-214 и его модификации", image: "/images/vessels/5.png" },
  { name: "Ту-204-300", image: "/images/vessels/6.png" }
];

</script>
<template>
  <div class="">
    <Header />
    <MainSection />
    <ActivitySection />
    <SpecialistsSection />
    <PoliticSection />
    <TermsSection />
    <ContactsSection />
    <Footer />
  </div>
</template>
<style scoped>
 
</style>