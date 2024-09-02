<script lang="ts" setup>
  import type { Ally } from '@/interfaces/alliances.interface';
  const props = defineProps<Ally>();
</script>

<template>
  <div>
    <div class="flex flex-col items-center pb-12 font-purista text-white" >
        <h2 class="text-4xl uppercase font-bold">{{ props.title }}</h2>
        <p class="uppercase">{{ props.subtitle }}</p>
      </div>
      <div class="w-[80%] mx-auto flex flex-row flex-wrap justify-center items-center gap-6">
        <a class="saturate-0 hover:saturate-100 opacity-30 hover:opacity-100 transition-all hover:-translate-y-1" v-for="(ally, index) in props.alliances" :key="index" :href="`${ally.link}`">
          <img class="w-[8rem]" :src="`../../assets/img/friends/${ally.img}`" :alt="`${ally.description}`">
        </a>
      </div>
  </div>  
</template>
