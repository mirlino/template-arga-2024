<script setup lang="ts">
  import type { Slide } from '@/interfaces/Slide.interface';
  import { Swiper, SwiperSlide} from 'swiper/vue';
  import { Pagination, EffectFade, Autoplay, Navigation, A11y } from 'swiper/modules';
  import "swiper/css/pagination";
  import 'swiper/css/navigation';
  import 'swiper/css/autoplay';
  import 'swiper/css/effect-fade';

  const props = defineProps<Slide>();

  const onSwiper = (swiper: any) => {
    console.log(swiper);
  };

  const onSlideChange = () => {
    console.log('slide change');
  };

</script>

<template>
  <div>
    <section>
        <swiper 
          :modules="[Pagination, EffectFade, Autoplay, Navigation, A11y]"
          effect="fade"
          :loop="true"
          :autoplay="true"
          :navigation="true"
          Scrollbar
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :pagination="{ clickable: true }"
          :allow-slide-prev="true"
          :allow-slide-next="true"
        >
          <swiper-slide v-for="(foto, index) in props.slides" :key="index">
            <img class="relative brightness-50" :src="`src/assets/img/slide/${foto.img}`" alt="">
            <div class="font-purista w-1/2 absolute flex flex-col gap-4 px-4 py-4 top-1/3 left-28 backdrop-blur-md rounded-lg">
              <h2 class="font-bold text-5xl text-white">{{ foto.titulo.length > 30 ? `${foto.titulo.slice(0,30)}...` : foto.titulo }}</h2>
              <p class="text-white text-xl font-light">{{ foto.description.length > 200 ? `${foto.description.slice(0,200)}...` : foto.description }}</p>
              <a class="z-[40] w-40 text-center py-4 px-6 text-white text-xl ring-1 ring-amarillo-arga-500 hover:bg-amarillo-arga-500 hover:ring-0 transition-colors" :href="`${foto.link}`">Leer más...</a>
            </div>
          </swiper-slide>
        </swiper>
    </section>
  </div>
</template>
<style>
  .swiper-slide img {
    width: 100%;
    height: 100%;
    background-size: cover;
  }
  .swiper-pagination-bullet {
    @apply bg-white w-[1.2rem] h-[1.2rem] opacity-100
  }
  .swiper-pagination-bullet-active {
    @apply bg-azul-arga-600
  }
  .swiper-button-prev {
    @apply text-white
  }
  .swiper-button-next {
    @apply text-white
  }
</style>
