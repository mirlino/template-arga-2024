<script lang="ts" setup>
  import { ref } from 'vue';
  import HeaderComponent from '@/components/header/HeaderComponent.vue';
  import FooterComponent from '@/components/footer/FooterComponent.vue';
  import AsideLeftComponent from '@/components/aside/AsideLeftComponent.vue';
  import { useWindowSize } from '@vueuse/core';

  const openMenuTablet = ref<boolean>(false);

  const { width } = useWindowSize();
  function openMenu() {
    openMenuTablet.value = true;
  }
  function closeMenu() {
    openMenuTablet.value = false;
  }
</script>

<template>
  <div>
    
    <header-component 
      :width="width"
      :closed="openMenuTablet" 
      @open-menu-tablet="openMenu"
      @close-menu-tablet="closeMenu"
      class="z-20" 
    />
    <aside-left-component
      :openMenu="openMenuTablet"
      @close-menu="closeMenu"
    />
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

