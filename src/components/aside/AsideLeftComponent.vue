<script lang="ts" setup>
  const props = defineProps({
    openMenu: {
      type: Boolean,
      default: true
    }
  });
  const emit = defineEmits(["close-menu"]);

  function closeMenu() {
    emit('close-menu')
  }
</script>
<template>
  <div>
      <div 
          
        :class="[props.openMenu ? 'translate-x-0 transition-all' : '-translate-x-full transition-all']"
        class="w-1/2 h-screen fixed z-20 bg-[#292828]"
      >
        <nav 
          class="flex flex-col mt-24 pl-4 z-40 font-purista"
        >
          <router-link 
            @click="closeMenu" 
            class="text-xl py-4 px-3 uppercase font-bold text-white hover:bg-amarillo-arga-500 transition-colors" 
            :to="{name:''}"
          >Historia</router-link>
          <router-link 
            @click="closeMenu" 
            class="text-xl py-4 px-3 uppercase font-bold text-white hover:bg-amarillo-arga-500 transition-colors" 
            to="/"
          >Miembros</router-link>
          <router-link 
            @click="closeMenu" 
            class="text-xl py-4 px-3 uppercase font-bold text-white hover:bg-amarillo-arga-500 transition-colors" 
            to="/"
          >Eventos</router-link>
          <router-link 
            @click="closeMenu" 
            class="text-xl py-4 px-3 uppercase font-bold text-white hover:bg-amarillo-arga-500 transition-colors" 
            to="/"
          >Blog</router-link>
          <a 
            class="text-xl py-4 px-3 uppercase font-bold text-white hover:bg-amarillo-arga-500" 
            href="#"
          >Foro</a>
        </nav>
      </div>
      <div 
        v-if="props.openMenu"
        @click="closeMenu"
        class="h-screen w-screen fixed right-0 z-[15] top-0 bg-[#292828] bg-opacity-70"
      >
  </div>
  </div>
</template>
