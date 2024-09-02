<script setup lang="ts">
  import TheSlide from '@/components/slide/TheSlide.vue';
  import CardComponent from '@/components/card/CardComponent.vue';
  import HistoryComponent from '@/components/resume/HistoryComponent.vue';
  import EventComponent from '@/components/eventos/EventComponent.vue';

  
  
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
    <section 
      class="w-full bg-fixed flex flex-col justify-center items-center" 
      style="background-image: url('../src/assets/img/bg.jpg');"
    >
      <event-component 
        :has-logo="true"         
      /> <!--Eventos-->
    </section>
    <section class="py-10 font-purista bg-[#181818]">
      <event-component 
        title="Noticias Mas recientes"
        sub-title="Ultimas noticias agregadas"
        :has-logo="false"
        :information="['Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptas sed, incidunt quidem et iusto eveniet est beatae neque molestias quo earum alias accusantium laudantium maiores aliquam cupiditate saepe rem consequatur provident! Tenetur nihil quaerat quo impedit dicta, quidem ex iusto, reprehenderit rerum autem at libero odio ratione consequatur nulla?']"
      /> <!--Eventos-->
    </section>
  </div>
</template>
<style>

</style>
