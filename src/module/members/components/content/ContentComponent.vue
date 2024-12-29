<script lang="ts" setup>
  import TheAccordion from '../accordion/TheAccordion.vue';
  
  //Images render function
  function getImageUrl(name: string, ext: string = 'png') {
    if(ext === 'png') return new URL(`../../../../assets/img/${name}.png`, import.meta.url).href;
    if(ext === 'jpg') return new URL(`../../assets/img/${name}.jpg`, import.meta.url).href;
  }
  
</script>

<template>
  <div class="flex flex-col items-center py-36">
    <div class="font-purista">
      <h3 class="text-3xl md:text-5xl text-center font-semibold uppercase">LISTADO DE PERSONAL DENTRO DEL CLAN</h3>
    </div>
    <div class="my-10">
      <img :src="getImageUrl('estrellaclass2')" alt="star">
    </div>
    <!--Accordion-->
    <div class="w-full max-w-[70rem]">
      <the-accordion />
    </div>
  </div>
</template>
