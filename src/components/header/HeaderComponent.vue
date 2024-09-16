<script lang="ts" setup>
  import { ref, toRefs, watch } from 'vue';
  import { IconMenu, IconCloseMenu } from '../icons';
  const props = defineProps(['width', 'closed']);
  const emit = defineEmits(['open-menu-tablet', 'close-menu-tablet']);

  const isOpen = ref<boolean>(false);

  const { width, closed } = toRefs(props)

  function openMenu() {
    emit('open-menu-tablet');
    isOpen.value = true;
  }
  function closeMenu() {
    emit('close-menu-tablet');
    isOpen.value = false;
  }

  watch(()=>[width?.value, closed?.value], (newData)=>{
    if(newData[0] > 724) isOpen.value = false;
    if(!newData[1]) isOpen.value = false;
  });

</script>


<template>
  <div class="relative">
    <header 
      v-if="props.width > 724"
      class="w-full h-16 flex justify-between items-center px-16 bg-azul-arga-600"
    >
      <div>
        <router-link :to="{path: '/'}">
          <img class="w-[6rem]" src="../../assets/img/logo.png" alt="ArgA">
        </router-link>
      </div>
      <nav 
        class="flex flex-row font-purista"
      >
        <router-link class="text-xl py-4 px-3 uppercase font-bold text-white hover:bg-amarillo-arga-500 transition-colors" to="/">Historia</router-link>
        <router-link class="text-xl py-4 px-3 uppercase font-bold text-white hover:bg-amarillo-arga-500 transition-colors" to="/">Miembros</router-link>
        <router-link class="text-xl py-4 px-3 uppercase font-bold text-white hover:bg-amarillo-arga-500 transition-colors" to="/">Eventos</router-link>
        <router-link class="text-xl py-4 px-3 uppercase font-bold text-white hover:bg-amarillo-arga-500 transition-colors" to="/">Blog</router-link>
        <a class="text-xl py-4 px-3 uppercase font-bold text-white hover:bg-amarillo-arga-500" href="#">Foro</a>
      </nav>
    </header>
    <header 
      v-else
      class="fixed z-50 w-full h-16 flex justify-center items-center px-16 bg-azul-arga-600"
    >
      <div>
        <router-link :to="{path: '/'}">
          <img class="w-[6rem]" src="../../assets/img/logo.png" alt="ArgA">
        </router-link>
      </div>
      <div class="absolute left-10">
        <icon-menu
          v-if="!isOpen" 
          @click="openMenu"
          size="28px" color="#fff"
        />
        <icon-close-menu
          v-if="isOpen" 
          @click="closeMenu"
          size="28px" color="#fff"
        />
      </div>
    </header>
  </div>
</template>
