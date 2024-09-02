<script setup lang="ts">
  import TheSlide from '@/components/slide/TheSlide.vue';
  import CardComponent from '@/components/card/CardComponent.vue';
  import HistoryComponent from '@/components/resume/HistoryComponent.vue';
  import EventComponent from '@/components/events/EventComponent.vue';
  import AwardComponent from '@/components/award/AwardComponent.vue';

  const recentEvents = [
    {
      date: '13 septiembre 2024',
      category: 'Misión',
      title: 'Neptuno',
      logo: 'badge-logo.png',
      img: 'historyOne.png',
      link: '#',
    },
    {
      date: '13 septiembre 2024',
      category: 'Misión',
      title: 'Asalto a la Catedral',
      logo: 'badge-logo.png',
      img: 'historyOne.png',
      link: '#',
    },
    {
      date: '13 septiembre 2024',
      category: 'Misión',
      title: 'Mercedez',
      logo: 'badge-logo.png',
      img: 'historyOne.png',
      link: '#',
    }
  ];

  const recentNews = [
    {
      date: '13 septiembre 2024',
      category: 'Blog',
      title: 'Mercedez',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptas sed, incidunt quidem et iusto eveniet est beatae neque molestias quo earum alias accusantium laudantium maiores aliquam cupiditate saepe rem consequatur provident! Tenetur nihil quaerat quo impedit dicta, quidem ex iusto, reprehenderit rerum autem at libero odio ratione consequatur nulla?',
      logo: 'badge-logo.png',
      img: 'fondoTres.png',
      link: '#',
    },
    {
      date: '13 septiembre 2024',
      category: 'Blog',
      title: 'Mercedez',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptas sed, incidunt quidem et iusto eveniet est beatae neque molestias quo earum alias accusantium laudantium maiores aliquam cupiditate saepe rem consequatur provident! Tenetur nihil quaerat quo impedit dicta, quidem ex iusto, reprehenderit rerum autem at libero odio ratione consequatur nulla?',
      logo: 'badge-logo.png',
      img: 'fondoTres.png',
      link: '#',
    },
    {
      date: '13 septiembre 2024',
      category: 'Blog',
      title: 'Mercedez',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptas sed, incidunt quidem et iusto eveniet est beatae neque molestias quo earum alias accusantium laudantium maiores aliquam cupiditate saepe rem consequatur provident! Tenetur nihil quaerat quo impedit dicta, quidem ex iusto, reprehenderit rerum autem at libero odio ratione consequatur nulla?',
      logo: 'badge-logo.png',
      img: 'fondoTres.png',
      link: '#',
    },
  ];

  const recentAwards = [
    {
      player: 'BlackBurn',
      description: 'Por haber demostrado experiencia de mando hacia con la misión en la que tuvo que manejar su propio equipo de combate.',
      img: '26_zps1c7d5ccc.png',
      background: 'fondo.jpeg',
      link: '/',
    },
    {
      player: 'BlackBurn',
      description: 'Por haber demostrado experiencia en combate y haber sobrevivido a la feroz amenaza enemiga.',
      img: '16_zpsf2ca749b.png',
      background: 'fondo.jpeg',
      link: '/',
    },
    {
      player: 'BlackBurn',
      description: 'Por haber demostrado experiencia en manejar la situación cuando era necesario, tomando control de cada orden recibida.',
      img: '07_zps96ce2b44.png',
      background: 'fondo.jpeg',
      link: '/',
    },
  ]
  
</script>

<template>
  <div>
    <section class="z-20">
      <the-slide /> <!--Slide-->
    </section>
    
    <section class="py-10 font-purista bg-[#181818]" >
      <card-component /> <!--Cards-->
      <history-component /> <!--Briefing resume-->
    </section>
   
    <!--Eventos-->
    <section 
      class="w-full bg-fixed flex flex-col justify-center items-center py-10" 
      style="background-image: url('../src/assets/img/bg.jpg');"
    >
      <event-component 
        title="Eventos Mas recientes"
        sub-title="Últimos eventos agregados"
        :has-logo="true"
        :information="recentEvents"

      ></event-component> 
      <router-link class="bg-azul-arga-500 text-white font-purista uppercase py-4 px-6 my-8 hover:scale-105 transition-transform" to="/">Ver mas Eventos</router-link>
    </section>
    
    <!--BLOG-->
    <section class="w-full bg-fixed flex flex-col justify-center items-center py-10 font-purista bg-[#181818]">
      <event-component 
        title="Noticias Mas recientes"
        sub-title="Ultimas noticias agregadas"
        :has-logo="false"
        :information="recentNews"
      ></event-component> 
      <router-link class="bg-azul-arga-500 text-white font-purista uppercase py-4 px-6 my-8 hover:scale-105 transition-transform" to="/">Ver mas Noticias</router-link>
    </section>
    
    <!--Condecoraciones-->
    <section
      class="w-full bg-fixed flex flex-col justify-center items-center py-10" 
      style="background-image: url('../src/assets/img/bg.jpg');"
    >
      <award-component
      title="Condecoraciones"
      subtitle="Ultimas condecoraciones a Jugadores"
      :duty="recentAwards"
      ></award-component>
      <router-link class="bg-azul-arga-500 text-white font-purista uppercase py-4 px-6 my-8 hover:scale-105 transition-transform" to="/">Ver mas Condecoraciones</router-link>
    </section>
  </div>
</template>
