<script lang="ts" setup>

  //const bgHero = import.meta.url + 'src/assets/img/nosotros.png';
  
  function getImageUrl(name: string, ext: string = 'png') {
    if(ext === 'png') return new URL(`../../../../assets/img/${name}.png`, import.meta.url).href;
    if(ext === 'jpg') return new URL(`../../assets/img/${name}.jpg`, import.meta.url).href;
  }
</script>

<template>
  <div>
    <div class="relative w-full pt-[60%] md:pt-[35%] bg-fixed bg-bottom bg-auto lg:bg-center md:bg-cover bg-no-repeat bg-opacity-10" :style="'background-image:url('+getImageUrl('nosotros')+');'">
      <div class="font-purista text-white absolute bottom-0 w-full backdrop-blur-md">
        <h2 class="text-4xl font-bold py-4 text-center md:text-left md:pl-4 uppercase"><span class="text-azul-arga-500">mi</span>embr<span class="text-azul-arga-500">os</span></h2>
      </div>
    </div>
  </div>
</template>