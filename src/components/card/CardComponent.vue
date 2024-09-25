<script lang="ts" setup>
  import type { Card } from '@/interfaces/Cards.interface';
  
  const props = defineProps<Card>();

  function getImageUrl(name:any) {
    return new URL(`../../assets/img/${name}.png`, import.meta.url).href
  }
</script>


<template>
  <div class="flex flex-row flex-wrap justify-center gap-8"> 
    <div class="max-w-[25rem] flex flex-col justify-center pb-8 bg-white hover:-translate-y-4 transition-transform" v-for="(card, index) in props.cards" :key="index">
      <img class="max-w-[25rem] h-[15rem]" :src="getImageUrl(card.img)" :alt="`${card.title}`">
      <div class="flex flex-col justify-center items-center p-4">
        <h3 class="text-black uppercase text-2xl font-bold text-center py-4">{{ card.title }}</h3>
        <p class="text-black pb-6 text-[.8rem] font-light text-center">{{ card.paragraph }}</p>
        <a class="w-32 text-black text-center py-4 px-4 ring-1 ring-azul-arga-500 hover:ring-0 hover:bg-azul-arga-500 hover:text-white transition-colors" :href="`${card.link}`">Leer más...</a>
      </div>
    </div>
  </div>
</template>
