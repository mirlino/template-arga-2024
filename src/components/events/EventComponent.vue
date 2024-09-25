<script lang="ts" setup>
  import type { Article } from '@/interfaces/events.interface';
  
  const props = withDefaults(defineProps<Article>(), {
    title: 'Eventos Mas recientes',
    subTitle: 'Últimos eventos agregados',
    hasLogo: true,
  });

  function getImageUrl(name:any) {
    return new URL(`../../assets/img/${name}.png`, import.meta.url).href
  }
</script>

<template>
  <div class="py-10 font-purista text-white">
    <div class="flex flex-col items-center pb-12" >
      <h2 class="text-4xl uppercase text-center font-bold">{{ props.title }}</h2>
      <p>{{ props.subTitle }}</p>
    </div>
    <!--:style="'background-image:url('+`../src/assets/img/${event.img}`+');'"-->
    <div class="flex flex-row flex-wrap gap-4 items-center justify-center">
      <div class="relative max-w-[30rem] hover:-translate-y-2 transition-transform"  v-for="(event, index) in props.information" :key="index">
        <img class="bg-cover brightness-50 z-10" :src="getImageUrl(event.img)" :alt="`${event.title}`">
        <span class="absolute uppercase top-0 left-0 bg-azul-arga-600 py-4 px-6">{{ event.date }}</span>
        <div class="absolute flex flex-row justify-center items-center gap-8 top-[25%] px-4 left-[10%]">
          <div v-if="props.hasLogo">
            <img class="w-[7rem]" :src="getImageUrl(event.logo)" alt="arga">
          </div>
          <div>
            <span class="font-bold text-lg uppercase text-amarillo-arga-300">{{ event.category }}</span>
            <h2 class="text-4xl font-bold uppercase">{{ event.title.length > 15 ? `${event.title.slice(1,15)}...` : event.title }}</h2>
            <p 
              v-if="!props.hasLogo && event.paragraph"
              class="text-white text-base font-thin"
            >{{ event.paragraph.length > 100 ? `${event.paragraph.slice(1,100)}...` : event.paragraph}}</p>
          </div>
        </div>
        <router-link class="absolute bottom-0 right-0 font-thin text-md px-6 py-4 bg-azul-arga-600 hover:px-8 hover:py-6 transition-all" :to="{name: ''}">Saber más...</router-link>
      </div>
    </div>
  </div>
</template>
