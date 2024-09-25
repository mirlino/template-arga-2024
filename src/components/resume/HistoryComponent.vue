<script lang="ts" setup>
  import type { History } from '@/interfaces/HistoryResume.interface';
  const props = defineProps<History>();

  

  function getImageUrl(name:any) {
    return new URL(`../../assets/img/${name}.png`, import.meta.url).href
  }
</script>

<template>
  <div class="w-full my-20"> 
    <div 
      class="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 font-purista" 
    >
      <img class="w-[15rem] text-white" :src="getImageUrl(props.resume.img)" :alt="`${props.resume.title}`">
      <article class="w-1/2 text-wrap text-white">
        <h2 class="text-5xl sm:text-6xl lg:text-8xl text-center md:text-left font-bold uppercase tracking-[-0.4rem] lg:tracking-[-0.6rem]">{{ props.resume.title }}</h2>
        <h3 class="text-2xl lg:text-4xl text-center md:text-left pt-2 pb-6" >{{ props.resume.slogan }}</h3>
        <p class="text-lg lg:text-xl text-center md:text-left font-thin pb-8" v-html="props.resume.paragraph"></p>
        <div class="pt-8 flex justify-center md:justify-start">
          <router-link class="text-white text-2xl ring-1 ring-amarillo-arga-500 hover:ring-0 hover:bg-amarillo-arga-500 transition-colors py-4 px-6" :to="{path: props.resume.link}">Leer más...</router-link>
        </div>
      </article>
    </div>
  </div>
</template>
