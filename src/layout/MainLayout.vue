<script lang="ts" setup>
  import HeaderComponent from '@/components/header/HeaderComponent.vue';
  import FooterComponent from '@/components/footer/FooterComponent.vue';
</script>

<template>
  <div>
    <header-component />
    
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>

    <footer-component />
  </div>
</template>
<style lang="css" scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

