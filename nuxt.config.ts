// https://nuxt.com/docs/api/configuration/nuxt-config
const siteName = 'Капо Авиа'
const siteUrl = 'https://капо-авиа.рф'
const siteDescription = 'Техническое обслуживание и ремонт авиационной техники — КАПО Авиа'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxt/image'],
  devtools: { enabled: true },
  css: [
    'swiper/css',
    'swiper/css/pagination',
    '@/assets/css/style.css',
    '@fancyapps/ui/dist/fancybox/fancybox.css',
  ],
  app: {
    head: {
      title: siteName,
      titleTemplate: `%s — ${siteName}`,
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: siteDescription },
        { name: 'theme-color', content: '#ffffff' },
        { property: 'og:site_name', content: siteName },
        { property: 'og:title', content: siteName },
        { property: 'og:description', content: siteDescription },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: siteUrl },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: siteName },
        { property: 'twitter:description', content: siteDescription },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: siteUrl },
      ],
    },
  },
  image: {
    provider: 'static'
  }
})
