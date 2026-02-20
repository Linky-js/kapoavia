<script setup>
import Header from '~/components/Header.vue';
import ContactsSection from '~/components/contacts/ContactsSection.vue';
import Footer from '~/components/Footer.vue';

useHead({
  title: 'Контакты — КАПО Авиа',
  meta: [
    { name: 'description', content: 'Контакты АО «КАПО Авиа»: адреса, телефоны, реквизиты и карта проезда.' }
  ]
})

</script>
<template>
  <div class="">
    <Header />
    <ContactsSection />
    <Footer />
  </div>
</template>
<style scoped></style>