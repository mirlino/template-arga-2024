<script lang="ts" setup>
  import type { Award } from '@/interfaces/award.interface';
  
  const props = defineProps<Award>();

</script>

<template>
  <div>
    <div class="flex flex-col items-center pb-12 font-purista text-white" >
      <h2 class="text-4xl uppercase font-bold">{{ props.title }}</h2>
      <p>{{ props.subtitle }}</p>
    </div>
    <div class="flex flex-row flex-wrap gap-4 items-center justify-center">
      <article 
        class="w-[30rem] flex justify-center relative ring-2 ring-azul-arga-500 font-purista text-white hover:-translate-y-2 transition-transform"  
        v-for="(award, index) in props.duty" :key="index"
      >
        <div class="">
          <img class="w-[10rem] absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20" :src="`/src/assets/img/path/${award.img}`" alt="patch">
          <img class="bg-cover brightness-[.3] z-10" :src="`/src/assets/img/${award.background}`" alt="patch">
        </div>
        <div>
          <h2 class="absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">{{ award.player }}</h2>
          <p class="absolute top-[65%] left-0 transform -translate-y-1/2 px-4 text-center font-thin">{{ award.description }}</p>
        </div>
      </article>
    </div>
  </div>
</template>
