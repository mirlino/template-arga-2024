<script lang="ts" setup>
  import type { History } from '@/interfaces/HistoryResume.interface';
  import { toRefs } from 'vue';
  const props = defineProps<History>();

  const {
    title,
    img,
    slogan,
    paragraph,
    link,
  } = toRefs(props.resume);

  function getImageUrl(name:any) {
    return new URL(`../../assets/img/${name}.png`, import.meta.url).href
  }
</script>

<template>
  <div class="w-full my-20"> 
    <div 
      class="flex flex-row flex-wrap justify-center items-center gap-8 font-purista" 
    >
      <img class="w-[15rem] text-white" :src="getImageUrl(img)" :alt="`${title}`">
      <article class="w-1/2 text-wrap text-white">
        <h2 class="text-9xl font-bold uppercase tracking-[-0.98rem]">{{ title }}</h2>
        <h3 class="text-4xl pt-2 pb-6" >{{ slogan }}</h3>
        <p class="text-xl font-thin pb-8" v-html="paragraph"></p>
        <div class="pt-8">
          <router-link class="text-white text-2xl ring-1 ring-amarillo-arga-500 hover:ring-0 hover:bg-amarillo-arga-500 transition-colors py-4 px-6" :to="{path: link}">Leer más...</router-link>
        </div>
      </article>
    </div>
  </div>
</template>
