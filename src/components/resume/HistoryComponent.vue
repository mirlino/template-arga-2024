<script lang="ts" setup>
  const resumeHistory = [
    {
      title: "Clan Arga",
      slogan: "Únete a nuestra comunidad",
      paragraph: `Clan ArgA sitúa su origen a finales de Octubre del año 2011. <br><br>Sus tres miembros fundadores: ZePp, Reo y Kosteleta comenzaron a interactuar y efectuar publicaciones en foros y sitios de encuentro de jugadores con la intención de crear una comunidad que jugara de una forma mas ordenada y seria.`,
      img: 'badge-logo.png',
      link: '',
    }
  ]
</script>


<template>
  <div class="w-full my-20"> 
    <div class="flex flex-row flex-wrap justify-center items-center gap-8 font-purista" v-for="(resume, index) in resumeHistory" :key="index">
      <img class="w-[15rem]" :src="`src/assets/img/${resume.img}`" :alt="`${resume.title}`">
      <article class="w-1/2 text-wrap text-white">
        <h2 class="text-9xl font-bold uppercase tracking-[-0.98rem]">{{ resume.title }}</h2>
        <h3 class="text-4xl pt-2 pb-6" >{{ resume.slogan }}</h3>
        <p class="text-xl font-thin pb-8" v-html="resume.paragraph"></p>
        <div class="pt-8">
          <router-link class="text-white text-2xl ring-1 ring-amarillo-arga-500 hover:ring-0 hover:bg-amarillo-arga-500 transition-colors py-4 px-6" to="">Leer más...</router-link>
        </div>
      </article>
    </div>
  </div>
</template>
