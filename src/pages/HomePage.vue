<script setup lang="ts">
  import TheSlide from '@/components/slide/TheSlide.vue';
  import CardComponent from '@/components/card/CardComponent.vue';
  import HistoryComponent from '@/components/resume/HistoryComponent.vue';
  import EventComponent from '@/components/events/EventComponent.vue';
  import AwardComponent from '@/components/award/AwardComponent.vue';
  import AlliancesComponent from '@/components/alliances/AlliancesComponent.vue';
  import { useWindowSize } from '@vueuse/core';

  const { width } = useWindowSize();
  
  const fotos = [
    {
      img: 'fondoDos',
      titulo: 'Titulo 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum odit, dolorem vitae nobis aperiam repellat temporibus nulla cum ullam minus pariatur repudiandae excepturi sequi nemo quo saepe natus quis earum at? Officia nisi blanditiis ipsa similique earum, harum unde magni recusandae ea officiis? Reiciendis officiis quo quaerat ad qui.',
      link: '#',
    },
    {
      img: 'fondoTres',
      titulo: 'Titulo 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum odit, dolorem vitae nobis aperiam repellat temporibus nulla cum ullam minus pariatur repudiandae excepturi sequi nemo quo saepe natus quis earum at? Officia nisi blanditiis ipsa similique earum, harum unde magni recusandae ea officiis? Reiciendis officiis quo quaerat ad qui.',
      link: '#',
    },
    
  ];

  const cards = [
  {
    title: "Nuestros Entrenamientos",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam non quae adipisci? Harum cupiditate id nihil iusto exercitationem, nulla fugit et soluta? Totam cumque ut optio consectetur dignissimos sed at natus soluta. Sint illum autem, totam assumenda labore pariatur velit vero neque qui eum aliquam. Veniam possimus placeat unde libero!",
    img: 'reclutamiento',
    link: '',
  },
  {
    title: "Misiones Oficiales",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam non quae adipisci? Harum cupiditate id nihil iusto exercitationem, nulla fugit et soluta? Totam cumque ut optio consectetur dignissimos sed at natus soluta. Sint illum autem, totam assumenda labore pariatur velit vero neque qui eum aliquam. Veniam possimus placeat unde libero!",
    img: 'fondoTres',
    link: '',
  },
  {
    title: "Eventos Semanales",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam non quae adipisci? Harum cupiditate id nihil iusto exercitationem, nulla fugit et soluta? Totam cumque ut optio consectetur dignissimos sed at natus soluta. Sint illum autem, totam assumenda labore pariatur velit vero neque qui eum aliquam. Veniam possimus placeat unde libero!",
    img: 'historyOne',
    link: '',
  }
  ];

  const resumeHistory = {
    title: "Clan Arga",
    slogan: "Únete a nuestra comunidad",
    paragraph: `Clan ArgA sitúa su origen a finales de Octubre del año 2011. <br><br>Sus tres miembros fundadores: ZePp, Reo y Kosteleta comenzaron a interactuar y efectuar publicaciones en foros y sitios de encuentro de jugadores con la intención de crear una comunidad que jugara de una forma mas ordenada y seria.`,
    img: 'badge-logo',
    link: '/',
  };

  const recentEvents = [
    {
      date: '13 septiembre 2024',
      category: 'Misión',
      title: 'Neptuno',
      logo: 'badge-logo',
      img: 'historyOne',
      link: '#',
    },
    {
      date: '13 septiembre 2024',
      category: 'Misión',
      title: 'Asalto a la Catedral',
      logo: 'badge-logo',
      img: 'historyOne',
      link: '#',
    },
    {
      date: '13 septiembre 2024',
      category: 'Misión',
      title: 'Mercedez',
      logo: 'badge-logo',
      img: 'historyOne',
      link: '#',
    }
  ];

  const recentNews = [
    {
      date: '13 septiembre 2024',
      category: 'Blog',
      title: 'Nuevos Aliados',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptas sed, incidunt quidem et iusto eveniet est beatae neque molestias quo earum alias accusantium laudantium maiores aliquam cupiditate saepe rem consequatur provident! Tenetur nihil quaerat quo impedit dicta, quidem ex iusto, reprehenderit rerum autem at libero odio ratione consequatur nulla?',
      logo: 'badge-logo',
      img: 'fondoTres',
      link: '#',
    },
    {
      date: '13 septiembre 2024',
      category: 'Blog',
      title: 'Reunión de Clanes',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptas sed, incidunt quidem et iusto eveniet est beatae neque molestias quo earum alias accusantium laudantium maiores aliquam cupiditate saepe rem consequatur provident! Tenetur nihil quaerat quo impedit dicta, quidem ex iusto, reprehenderit rerum autem at libero odio ratione consequatur nulla?',
      logo: 'badge-logo',
      img: 'fondoTres',
      link: '#',
    },
    {
      date: '13 septiembre 2024',
      category: 'Blog',
      title: 'Misiones Entrantes',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptas sed, incidunt quidem et iusto eveniet est beatae neque molestias quo earum alias accusantium laudantium maiores aliquam cupiditate saepe rem consequatur provident! Tenetur nihil quaerat quo impedit dicta, quidem ex iusto, reprehenderit rerum autem at libero odio ratione consequatur nulla?',
      logo: 'badge-logo',
      img: 'fondoTres',
      link: '#',
    },
  ];

  const recentAwards = [
    {
      player: 'BlackBurn',
      description: 'Por haber demostrado experiencia de mando hacia con la misión en la que tuvo que manejar su propio equipo de combate.',
      img: '26_zps1c7d5ccc',
      background: 'fondo',
      link: '/',
    },
    {
      player: 'BlackBurn',
      description: 'Por haber demostrado experiencia en combate y haber sobrevivido a la feroz amenaza enemiga.',
      img: '16_zpsf2ca749b',
      background: 'fondo',
      link: '/',
    },
    {
      player: 'BlackBurn',
      description: 'Por haber demostrado experiencia en manejar la situación cuando era necesario, tomando control de cada orden recibida.',
      img: '07_zps96ce2b44',
      background: 'fondo',
      link: '/',
    },
  ];

  const alliances = [
    {
      img: 'BR4',
      description: '',
      link: '#',
    },
    {
      img: 'CE',
      description: '',
      link: '#',
    },
    {
      img: 'CR',
      description: '',
      link: '#',
    },
    {
      img: 'CTU',
      description: '',
      link: '#',
    },
    {
      img: 'A2',
      description: '',
      link: '#',
    },
    {
      img: 'BAS',
      description: '',
      link: '#',
    },
    {
      img: 'CS',
      description: '',
      link: '#',
    },
    {
      img: 'CMPC',
      description: '',
      link: '#',
    },
    {
      img: 'DH',
      description: '',
      link: '#',
    },
    {
      img: 'SFS',
      description: '',
      link: '#',
    },
    {
      img: 'EGV',
      description: '',
      link: '#',
    },
    {
      img: 'ZR',
      description: '',
      link: '#',
    },
  ];


  
</script>

<template>
  <div>
    <!--Slide-->
    <section 
      v-show="width >= 565"
      class="z-20"
    >
      <the-slide 
        :slides="fotos"
      ></the-slide> 
    </section>
    <section class="py-10 font-purista bg-[#181818]" >
      <!--Cards-->
      <card-component 
        :cards="cards"
      /> 
      <!--Briefing resume-->
      <history-component 
      :resume="resumeHistory"
      /> 
    </section>
   
    <!--Eventos-->
    <section 
      class="flex flex-col items-center justify-center w-full py-10 bg-fixed background-arma" 
    
    >
      <event-component 
        title="Eventos Mas recientes"
        sub-title="Últimos eventos agregados"
        :has-logo="true"
        :information="recentEvents"

      ></event-component> 
      <router-link class="px-6 py-4 my-8 text-white uppercase transition-transform bg-azul-arga-500 font-purista hover:scale-105" to="/">Ver mas Eventos</router-link>
    </section>
    
    <!--BLOG-->
    <section class="w-full bg-fixed flex flex-col justify-center items-center py-10 font-purista bg-[#181818]">
      <event-component 
        title="Noticias Mas recientes"
        sub-title="Ultimas noticias agregadas"
        :has-logo="false"
        :information="recentNews"
      ></event-component> 
      <router-link class="px-6 py-4 my-8 text-white uppercase transition-transform bg-azul-arga-500 font-purista hover:scale-105" to="/">Ver mas Noticias</router-link>
    </section>
    
    <!--Condecoraciones-->
    <section
      class="flex flex-col items-center justify-center w-full py-10 bg-fixed background-arma" 
      
    >
      <award-component
      title="Condecoraciones"
      subtitle="Ultimas condecoraciones a Jugadores"
      :duty="recentAwards"
      ></award-component>
      <router-link class="px-6 py-4 my-8 text-white uppercase transition-transform bg-azul-arga-500 font-purista hover:scale-105" to="/">Ver mas Condecoraciones</router-link>
    </section>

    <section class="py-10 font-purista bg-[#292828]">
      <alliances-component
        title="Alianzas Comunitarias"
        subtitle="Nuestros Aliados"
        :alliances="alliances"
      ></alliances-component>
    </section>

    <section class="py-10 font-purista bg-[#181818]"></section>
  </div>
</template>
<style>
  .background-arma {
    background-image: url('../assets/img/bg.jpg');
  }
</style>