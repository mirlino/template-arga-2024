<script lang="ts" setup>
  import HeaderComponent from '@/components/header/HeaderComponent.vue';
  import FooterComponent from '@/components/footer/FooterComponent.vue';
</script>

<template>
  <div>
    <header-component class="z-20" />
    <div class="z-10">
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
    <footer-component class="z-20" />
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

