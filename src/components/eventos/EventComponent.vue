<script lang="ts" setup>
  interface Article {
    title?:     string;
    subTile?:   string;
    hasLogo:    boolean;
    information?:  string[];
  }
  
  const props = withDefaults(defineProps<Article>(), {
    title: 'Eventos Mas recientes',
    subTitle: 'Últimos eventos agregados',
    hasLogo: true,    
  });

  const recentEvents = [
    {
      date: '13 septiembre 2024',
      title: 'Neptuno',
      category: 'Misión',
      logo: 'badge-logo.png',
      img: 'historyOne.png',
      link: '#',
    },
    {
      date: '13 septiembre 2024',
      title: 'Asalto a la Catedral',
      category: 'Misión',
      logo: 'badge-logo.png',
      img: 'historyOne.png',
      link: '#',
    },
    {
      date: '13 septiembre 2024',
      title: 'Mercedez',
      category: 'Misión',
      logo: 'badge-logo.png',
      img: 'historyOne.png',
      link: '#',
    }
  ];
  
</script>

<template>
  <div class="py-10 font-purista text-white">
    <div class="flex flex-col items-center pb-12" >
      <h2 class="text-4xl uppercase font-bold">{{ props.title }}</h2>
      <p>{{ props.subTitle }}</p>
    </div>
    <!--:style="'background-image:url('+`../src/assets/img/${event.img}`+');'"-->
    <div class="flex flex-row flex-wrap gap-4 items-center justify-center">
      <div class="relative w-[30rem] hover:-translate-y-2 transition-transform"  v-for="(event, index) in recentEvents" :key="index">
        <img class="bg-cover brightness-50 z-10" :src="`src/assets/img/${event.img}`" :alt="`${event.title}`">
        <span class="absolute uppercase top-0 left-0 bg-azul-arga-600 py-4 px-6 z-20">{{ event.date }}</span>
        <div class="absolute flex flex-row justify-center items-center gap-8 top-[25%] px-4 left-[10%]">
          <div v-if="props.hasLogo">
            <img class="w-[7rem]" :src="`src/assets/img/${event.logo}`" alt="arga">
          </div>
          <div>
            <span class="font-bold text-lg uppercase text-amarillo-arga-300">{{ event.category }}</span>
            <h2 class="text-4xl font-bold uppercase">{{ event.title.length > 15 ? `${event.title.slice(1,15)}...` : event.title }}</h2>
            <p 
              v-if="!props.hasLogo && props.information"
              class="text-white text-base font-thin"
            >{{ props.information[0].length > 100 ? `${props.information[0].slice(1,100)}...` : props.information[0]}}</p>
          </div>
        </div>
        <a class="absolute bottom-0 right-0 font-thin text-md px-6 py-4 bg-azul-arga-600 hover:px-8 hover:py-6 transition-all" href="">Saber más...</a>
      </div>
    </div>
  </div>
</template>
