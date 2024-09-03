<template>
  <header class="w-full h-16 flex justify-between items-center px-16 bg-azul-arga-600">
    <div>
      <router-link :to="{path: '/'}">
        <img class="w-[6rem]" src="../../assets/img/logo.png" alt="ArgA">
      </router-link>
    </div>
    <nav class="flex flex-row font-purista">
      <router-link class="text-xl py-4 px-3 uppercase font-bold text-white hover:bg-amarillo-arga-500 transition-colors" to="/">Historia</router-link>
      <router-link class="text-xl py-4 px-3 uppercase font-bold text-white hover:bg-amarillo-arga-500 transition-colors" to="/">Miembros</router-link>
      <router-link class="text-xl py-4 px-3 uppercase font-bold text-white hover:bg-amarillo-arga-500 transition-colors" to="/">Eventos</router-link>
      <router-link class="text-xl py-4 px-3 uppercase font-bold text-white hover:bg-amarillo-arga-500 transition-colors" to="/">Blog</router-link>
      <a class="text-xl py-4 px-3 uppercase font-bold text-white hover:bg-amarillo-arga-500" href="#">Foro</a>
    </nav>
  </header>
</template>
