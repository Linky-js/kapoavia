<script setup>
const props = defineProps({
  links: {
    type: Array,
    required: true
  }
})
</script>
<template>
  <div class="Breadcrumbs">
    <ul class="Breadcrumbs__list">
      <li class="Breadcrumbs__item" v-for="(link, index) in links" :key="index">
        <NuxtLink class="Breadcrumbs__link" :to="link.link" :class="{ last: index === links.length - 1 }">
          {{ link.title }}{{ index != links.length - 1 ? ' /' : '' }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.Breadcrumbs {
  position: relative;
  z-index: 2;
}

.Breadcrumbs__list {
  display: flex;
  align-items: center;
  gap: 10rem;
}

.Breadcrumbs__link {
  font-weight: 300;
  font-size: 14rem;
  line-height: 130%;
  color: #fff;
}

.Breadcrumbs__link.last {
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
}
@media screen and (max-width: 768px) {
  .Breadcrumbs__list{
    gap: 10px;
  }
  .Breadcrumbs__link {
    font-size: 12px;
  }
}
</style>