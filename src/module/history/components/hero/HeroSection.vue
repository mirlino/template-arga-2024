<script lang="ts" setup>
  import { ref } from 'vue';

  const bgHero = import.meta.url + 'src/assets/img/nosotros.png';
  
  function getImageUrl(name: string, ext: string = 'png') {
    if(ext === 'png') return new URL(`../../../../assets/img/${name}.png`, import.meta.url).href;
    if(ext === 'jpg') return new URL(`../../assets/img/${name}.jpg`, import.meta.url).href;
  }
</script>


<template>
  <div>
    <div class="relative w-full pt-[60%] md:pt-[35%] bg-fixed bg-bottom bg-auto lg:bg-center md:bg-cover bg-no-repeat bg-opacity-10" :style="'background-image:url('+getImageUrl('nosotros')+');'">
      <div class="font-purista text-white absolute bottom-0 w-full backdrop-blur-md">
        <h2 class="text-4xl font-bold py-4 text-center md:text-left md:pl-4 uppercase"><span class="text-azul-arga-500">Cl</span>an ar<span class="text-azul-arga-500">ga</span></h2>
      </div>
    </div>
    <div class="bg-[#f1f1f1] flex flex-col justify-center items-center font-purista w-full py-36 backdrop-blur-sm">
      <div class="text-center text-xl w-[45%]">
        
        <p class="pt-10 leading-10">
          ArgA, con más de 10 años de historia, es uno de los clanes con más experiencia en simulación militar de Latinoamérica. Uno de los clanes mas sólidos y con una buena idea sobre misiones a diseñar.
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
            
            Las primeras participaciones de los miembros fundadores se realizó para ese entonces en el juego llamado ArmA Free, realizando estos tan buenos combates, captaron la atención de varios usuarios quienes buscaban una experiencia más realista y organizada; organizándose tiempo después lo que sería el comienzo y fundación del clan ArgA.<br/><br/>
            En base a esa búsqueda de realismo y simulación, el alto mando para ese entonces toma la decisión motivas a sus miembros a cambiar de Arma free a ArmA 2, ya que, viendo las capacidades de simulación que ofrecía la nueva versión de este simulador en ese entonces era posible expandir aún mas la forma en como el clan iba tomando curso.<br/><br/>
            Es en esta plataforma donde el clan comienza a generar las primeras estructuras que necesariamente organizaban el esfuerzo y aporte de cada uno de sus miembros.<br/><br/> 
            Se ejecutan los primeros entrenamientos, se determinan las primeras profesiones a enseñar a los nuevos miembros mediante un sistema de evaluaciones interno, para así saber quienes cumplían esta condición y quienes necesitaban mejorar sus habilidades antes de pasar a un siguiente renglón.<br/><br/>
            Como toda comunidad ordenada, el clan tuvo sus altos y bajos, conformidades y diferencias entre sus miembros, pero la idea ArgA siempre se mantuvo en el tiempo.<br/><br/>
            Luego de unos años de simulación por parte de estos primeros miembros fundadores, llego el momento en el que algunos miembros históricos cesan su actividad, delegando así a su siguiente generación de miembros lo necesario para continuar manteniendo vivo el ideal ArgA y quienes preparados por sus predecesores heredan la pasión de continuar este legado de lo que una vez para estos antiguos miembros fue lo que unió a muchos de los que hoy son mas que solo jugadores, sino mas bien, excelentes amigos.<br/><br/>
            
          </p>
        </div>
        
      </div>
      <div class="my-16">
        <img :src="getImageUrl('estrellaclass')" alt="star">
      </div>
      <div class="w-full flex flex-col lg:flex-row-reverse justify-center lg:items-center gap-8">
        <div class="w-full lg:w-1/2 px-2">
          <img :src="getImageUrl('historyTwo')" alt="history">
        </div>
        <div class="w-full lg:w-1/2 px-2">
          <p class="whitespace-pre-line text-xl">
            ArgA a desarrollado misiones y campañas especiales las cuales solo miembros experimentados pueden hacer, se genera una imagen gráfica diseñada propia y se comienza a registrar toda actividad, noticia y organización. Para entonces el clan adopta la nueva versión de la plataforma ArmA 3, que potencia todas las cualidades generadas hasta el momento.<br/><br/>
            Los esfuerzos colectivos y el conocimiento de la simulación militar con el tiempo a generando una calidad superior a medida que los entrenamientos semanales se suceden.<br/><br/>
            Tomando como base bibliográfica los ejércitos del mundo y principalmente el Ejército Argentino para adquirir nociones tácticas, estratégicas y prácticas que aumentan la inmersión y profesionalismo de los miembros, con el pasar del tiempo ArgA decide abrirse a otros horizontes en conjunto con otras comunidades.<br/><br/>
            Siendo esta principal organizadora de la primera agrupación de comunidades conocida en Latinoamérica como: Proyecto MilSim Unido (PMU).<br/><br/>
            En 2018/19 fue uno de los clanes organizadores de la Federación Americana de Milsim (FAM), ente que hizo el papel de "naciones unidas" para los clanes latinoamericanos para ese entonces.<br/><br/>
            Actualmente, ArgA es invitado por las comunidades más destacadas de ArmA 3 y se encuentra sin duda alguna entre una de las comunidades de mayor experiencia en cuanto a simulación y realismo táctico militar conocido.
          </p>
        </div>
        
      </div>
    </div> 
  </div>
</template>



