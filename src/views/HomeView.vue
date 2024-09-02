<script setup lang="ts">
  import TheSlide from '@/components/slide/TheSlide.vue';
  import CardComponent from '@/components/card/CardComponent.vue';
  import HistoryComponent from '@/components/resume/HistoryComponent.vue';
  import EventComponent from '@/components/events/EventComponent.vue';
  import AwardComponent from '@/components/award/AwardComponent.vue';
  import AlliancesComponent from '@/components/alliances/AlliancesComponent.vue';

  const fotos = [
    {
      img: 'fondo.jpeg',
      titulo: 'Titulo extendido para prueba 01',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum odit, dolorem vitae nobis aperiam repellat temporibus nulla cum ullam minus pariatur repudiandae excepturi sequi nemo quo saepe natus quis earum at? Officia nisi blanditiis ipsa similique earum, harum unde magni recusandae ea officiis? Reiciendis officiis quo quaerat ad qui.',
      link: '#',
    },
    {
      img: 'fondoDos.png',
      titulo: 'Titulo 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum odit, dolorem vitae nobis aperiam repellat temporibus nulla cum ullam minus pariatur repudiandae excepturi sequi nemo quo saepe natus quis earum at? Officia nisi blanditiis ipsa similique earum, harum unde magni recusandae ea officiis? Reiciendis officiis quo quaerat ad qui.',
      link: '#',
    },
    {
      img: 'fondoTres.png',
      titulo: 'Titulo 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum odit, dolorem vitae nobis aperiam repellat temporibus nulla cum ullam minus pariatur repudiandae excepturi sequi nemo quo saepe natus quis earum at? Officia nisi blanditiis ipsa similique earum, harum unde magni recusandae ea officiis? Reiciendis officiis quo quaerat ad qui.',
      link: '#',
    },
    
  ];

  const cards = [
  {
    title: "Nuestros Entrenamientos",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam non quae adipisci? Harum cupiditate id nihil iusto exercitationem, nulla fugit et soluta? Totam cumque ut optio consectetur dignissimos sed at natus soluta. Sint illum autem, totam assumenda labore pariatur velit vero neque qui eum aliquam. Veniam possimus placeat unde libero!",
    img: 'reclutamiento.jpg',
    link: '',
  },
  {
    title: "Misiones Oficiales",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam non quae adipisci? Harum cupiditate id nihil iusto exercitationem, nulla fugit et soluta? Totam cumque ut optio consectetur dignissimos sed at natus soluta. Sint illum autem, totam assumenda labore pariatur velit vero neque qui eum aliquam. Veniam possimus placeat unde libero!",
    img: 'fondoTres.png',
    link: '',
  },
  {
    title: "Eventos Semanales",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam non quae adipisci? Harum cupiditate id nihil iusto exercitationem, nulla fugit et soluta? Totam cumque ut optio consectetur dignissimos sed at natus soluta. Sint illum autem, totam assumenda labore pariatur velit vero neque qui eum aliquam. Veniam possimus placeat unde libero!",
    img: 'historyOne.png',
    link: '',
  }
  ];

  const resumeHistory = {
    title: "Clan Arga",
    slogan: "Únete a nuestra comunidad",
    paragraph: `Clan ArgA sitúa su origen a finales de Octubre del año 2011. <br><br>Sus tres miembros fundadores: ZePp, Reo y Kosteleta comenzaron a interactuar y efectuar publicaciones en foros y sitios de encuentro de jugadores con la intención de crear una comunidad que jugara de una forma mas ordenada y seria.`,
    img: 'badge-logo.png',
    link: '/',
  };

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
  ];

  const alliances = [
    {
      img: 'BR4.png',
      description: '',
      link: '#',
    },
    {
      img: 'CE.png',
      description: '',
      link: '#',
    },
    {
      img: 'CR.png',
      description: '',
      link: '#',
    },
    {
      img: 'CTU.png',
      description: '',
      link: '#',
    },
    {
      img: 'A2.png',
      description: '',
      link: '#',
    },
    {
      img: 'BAS.png',
      description: '',
      link: '#',
    },
    {
      img: 'CS.png',
      description: '',
      link: '#',
    },
    {
      img: 'CMPC.png',
      description: '',
      link: '#',
    },
    {
      img: 'DH.png',
      description: '',
      link: '#',
    },
    {
      img: 'SFS.png',
      description: '',
      link: '#',
    },
    {
      img: 'EGV.png',
      description: '',
      link: '#',
    },
    {
      img: 'ZR.png',
      description: '',
      link: '#',
    },
  ];
  
</script>

<template>
  <div>
    <!--Slide-->
    <section class="z-20">
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
      class="w-full bg-fixed flex flex-col justify-center items-center py-10" 
      style="background-image: url('src/assets/img/bg.jpg');"
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
      style="background-image: url('src/assets/img/bg.jpg');"
    >
      <award-component
      title="Condecoraciones"
      subtitle="Ultimas condecoraciones a Jugadores"
      :duty="recentAwards"
      ></award-component>
      <router-link class="bg-azul-arga-500 text-white font-purista uppercase py-4 px-6 my-8 hover:scale-105 transition-transform" to="/">Ver mas Condecoraciones</router-link>
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
