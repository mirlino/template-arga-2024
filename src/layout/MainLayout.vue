<script lang="ts" setup>
  import { ref } from 'vue';
  import HeaderComponent from '@/components/header/HeaderComponent.vue';
  import FooterComponent from '@/components/footer/FooterComponent.vue';
  import AsideLeftComponent from '@/components/aside/AsideLeftComponent.vue';
  import SocialMedia from '@/plugins/utils/socialmedia/SocialMedia.vue';
  import { useWindowSize } from '@vueuse/core';
  import { useRoute } from 'vue-router';

  const route = useRoute();

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
  <div class="relative">
    <!-- Social media -->
     <div v-if="route.name === 'home'">
       <social-media />
     </div>
    
    <header-component 
      :width="width"
      :closed="openMenuTablet" 
      @open-menu-tablet="openMenu"
      @close-menu-tablet="closeMenu"
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

