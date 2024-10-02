<script lang="ts" setup>
  import { ref } from 'vue';

  const bgHero = import.meta.env.VITE_APP_BASE_PATH + 'src/assets/img/nosotros.png';
  
  function getImageUrl(name: string, ext: string = 'png') {
    if(ext === 'png') return new URL(`../../../../assets/img/${name}.png`, import.meta.url).href;
    if(ext === 'jpg') return new URL(`../../assets/img/${name}.jpg`, import.meta.url).href;
  }
</script>


<template>
  <div>
    <div class="relative w-full pt-[60%] md:pt-[35%] bg-fixed bg-bottom bg-auto lg:bg-center md:bg-cover bg-no-repeat bg-opacity-10" :style="'background-image:url('+bgHero+');'">
      <div class="font-purista text-white absolute bottom-0 w-full backdrop-blur-md">
        <h2 class="text-4xl font-bold py-4 text-center md:text-left md:pl-4 uppercase"><span class="text-azul-arga-500">Cl</span>an ar<span class="text-azul-arga-500">ga</span></h2>
      </div>
    </div>
    <div class="bg-[#f1f1f1] flex flex-col justify-center items-center font-purista w-full py-36 backdrop-blur-sm">
      <div class="text-center text-xl w-[45%]">
        
        <p class="pt-10 leading-10">
          ArgA, con más de 10 años de historia, es el clan con mas experiencia de latino américa. Mucho tiempo de aprendizaje y con mejoras constantes nos hace un clan muy sólido.
        </p>
        <blockquote class="p-4 mt-10 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500">
            <p class="text-xl italic font-medium leading-relaxed text-gray-600">"Ser Infante es un Honor, ser ArgA un Privilegio."</p>
        </blockquote>
      </div>
      <div class="my-36">
        <img :src="getImageUrl('estrellaclass2')" alt="star">
      </div>
      <div class="font-purista uppercase text-center my-20">
        <h4 class="text-xl">Nosotros como clan, como hermandad, como camaradas</h4>
        <h2 class="text-7xl">Historia</h2>
      </div>
      <div class="w-full flex flex-col lg:flex-row justify-center lg:items-center gap-8">
        <div class="w-full lg:w-1/2 px-2">
          <img :src="getImageUrl('historyOne')" alt="history">
        </div>
        <div class="w-full lg:w-1/2 px-2">
          <p class="whitespace-pre-line text-xl">
            
            Las primeras participaciones de ArgA como clan se efectuaron en ArmA Free, captando miembros que buscaban una experiencia más realista y organizada tratando de acercarse más a lo que en un futuro se llamaría simulación militar virtual.<br/><br/>
            En base a esa búsqueda de realismo y simulación, se toma la decisión de cambiar hacia ArmA 2 viendo las capacidades de simulación que ofrecía la nueva plataforma en ese entonces.<br/><br/>
            Es en esta plataforma donde el clan comienza a generar las primeras estructuras que necesariamente organizaban el esfuerzo y aporte de los miembros.<br/><br/> 
            Como toda comunidad ordenada, el clan tuvo sus altos y bajos, conformidades y diferencias entre sus miembros, pero la idea ArgA siempre se mantuvo en el tiempo, es en este momento donde algunos miembros históricos dejan la actividad, cuando otros futuros miembros históricos la comienzan.<br/><br/>
            Se ejecutan los primeros entrenamientos, se determinan los conocimientos que se brindarían a los nuevos miembros, como también un sistema de evaluaciones.
          </p>
        </div>
        
      </div>
      <div class="my-16">
        <img :src="getImageUrl('estrellaclass')" alt="star">
      </div>
      <div class="w-full flex flex-col lg:flex-row-reverse justify-center lg:items-center gap-8">
        <div class="w-full lg:w-1/2 px-2">
          <img :src="getImageUrl('historyOne')" alt="history">
        </div>
        <div class="w-full lg:w-1/2 px-2">
          <p class="whitespace-pre-line text-xl">
            ArgA comienza a desarrollar sus primeras misiones y campañas, genera una imagen gráfica diseñada y se comienza a registrar toda actividad, noticia y organización en este momento el clan adopta la plataforma ArmA 3, que potencia todas las cualidades generadas al momento.<br/><br/>
            Los esfuerzos colectivos y el conocimiento de la simulación militar va generando una calidad superior a medida que los entrenamientos semanales se suceden.<br/><br/>
            Tomando como base bibliográfica los ejércitos del mundo y principalmente el Ejército Argentino para adquirir nociones tácticas, estratégicas y prácticas que aumentan la inmersión y profesionalismo de los miembros.<br/><br/>
            Con el pasar del tiempo y la experiencia se decide abrir a disfrutar en conjunto con otras comunidades la actividad.<br/><br/>
            Fue parte organizadora de la primera agrupación de comunidades conocida en Latinoamérica llamada Proyecto MilSim Unido (PMU).<br/><br/>
            En 2018/19 es uno de los clanes organizadores de la Federación Americana de Milsim (FAM) ente que nuclea a los clanes latinoamericanos en la actualidad.<br/><br/>
            Actualmente, ArgA es invitado por las comunidades más exigentes de ArmA 3 y se encuentra sin dudas entre las comunidades que mayor experiencia brindan en cuanto a realismo y simulación.
          </p>
        </div>
        
      </div>
    </div> 
  </div>
</template>



