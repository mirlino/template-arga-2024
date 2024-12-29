<script lang="ts" setup>
  import { ref } from 'vue';
  import { useRenderingImage } from '@/composables/useRenderingImage.composable';

  const imageRender = useRenderingImage();

  const accordionItems = ref([
    {
      title: 'Capitán',
      route: 'rankss',
      image: 'captain',
      type: 'jpg',
      content: [
        {
          id: 1,
          username: 'Jhon Doe',
          specialist: 'Infantería',
          route: 'user_img',
          image: 'plantillaUno',
          type: 'jpg',

        },
        {
          id: 2,
          username: 'Jane Doe',
          specialist: 'Artillería',
          route: 'user_img',
          image: '03-3',
          type: 'jpg',
        },
      ]
    },
    {
      title: 'Teniente',
      route: 'rankss',
      image: '1st-lieutenant',
      type: 'jpg',
      content: [
        {
          id: 1,
          username: 'Jhon Doe',
          specialist: 'Infantería',
          route: 'user_img',
          image: 'plantillaUno',
          type: 'jpg',
        },
        {
          id: 2,
          username: 'Jane Doe',
          specialist: 'Artillería',
          route: 'user_img',
          image: '03-3',
          type: 'jpg',
        },
        {
          id: 3,
          username: 'Mark Doe',
          specialist: 'Caballería',
          route: 'user_img',
          image: '05-3',
          type: 'jpg',
        },
      ]
    },
    {
      title: 'Sargento',
      route: 'rankss',
      image: 'sergeant',
      type: 'jpg',
      content: [
        {
          id: 1,
          username: 'Jhon Doe',
          specialist: 'Infantería',
          route: 'user_img',
          image: 'plantillaUno',
          type: 'jpg',
        },
        {
          id: 2,
          username: 'Jane Doe',
          specialist: 'Artillería',
          route: 'user_img',
          image: '03-3',
          type: 'jpg',
        },
        {
          id: 3,
          username: 'Mark Doe',
          specialist: 'Caballería',
          route: 'user_img',
          image: '05-3',
          type: 'jpg',
        },
      ]
    },
    {
      title: 'Cabo',
      route: 'rankss',
      image: 'corporal',
      type: 'jpg',
      content: [
        {
          id: 1,
          username: 'Jhon Doe',
          specialist: 'Infantería',
          route: 'user_img',
          image: 'plantillaUno',
          type: 'jpg',
        },
        {
          id: 2,
          username: 'Jane Doe',
          specialist: 'Artillería',
          route: 'user_img',
          image: '03-3',
          type: 'jpg',
        },
        {
          id: 3,
          username: 'Mark Doe',
          specialist: 'Caballería',
          route: 'user_img',
          image: '05-3',
          type: 'jpg',
        },
      ]
    },
    {
      title: 'Soldado',
      route: 'rankss',
      image: 'private',
      type: 'jpg',
      content: [
        {
          id: 1,
          username: 'Jhon Doe',
          specialist: 'Infantería',
          route: 'user_img',
          image: 'plantillaUno',
          type: 'jpg',
        },
        {
          id: 2,
          username: 'Jane Doe',
          specialist: 'Artillería',
          route: 'user_img',
          image: '03-3',
          type: 'jpg',
        },
        {
          id: 3,
          username: 'Mark Doe',
          specialist: 'Caballería',
          route: 'user_img',
          image: '05-3',
          type: 'jpg',
        },
        {
          id: 4,
          username: 'Weyn Doe',
          specialist: 'Caballería',
          route: 'user_img',
          image: '05-3',
          type: 'jpg',
        },
      ]
    },
    {
      title: 'Recluta',
      route: 'rankss',
      image: '',
      type: 'jpg',
      content: [
        {
          id: 1,
          username: 'Jhon Doe',
          specialist: 'Infantería',
          route: 'user_img',
          image: 'plantillaUno',
          type: 'jpg',
        },
        {
          id: 2,
          username: 'Jane Doe',
          specialist: 'Artillería',
          route: 'user_img',
          image: '03-3',
          type: 'jpg',
        },
        {
          id: 3,
          username: 'Mark Doe',
          specialist: 'Caballería',
          route: 'user_img',
          image: '05-3',
          type: 'jpg',
        },
        {
          id: 4,
          username: 'Mark Doe',
          specialist: 'Caballería',
          route: 'user_img',
          image: '05-3',
          type: 'jpg',
        },
        {
          id: 5,
          username: 'Carl Doe',
          specialist: 'Caballería',
          route: 'user_img',
          image: '05-3',
          type: 'jpg',
        },
      ]
    },
  ]);

  //Accordion function
  function toggleAccordion(index: number) {
    const content = document.getElementById(`content-${index}`);
     
    // Toggle the content's max-height for smooth opening and closing
    if (content?.style.maxHeight && content.style.maxHeight !== '0px') {
      content.style.maxHeight = '0';
      // icon!.innerHTML = plusSVG;
      
    } else {
      content!.style.maxHeight = content!.scrollHeight + 'px';
      // icon!.innerHTML = minusSVG;
    }
  }


</script>
<template>
  <div>
    <!-- Accordion Item 1 -->
    <div 
      v-for="(rank, index) in accordionItems" 
      :key="rank.title" 
      class="border-b font-purista border-slate-200"
    >
      <button 
        @click="toggleAccordion(index+1)" 
        :class="[index === 0 ? 'rounded-t-md': '', index === accordionItems.length - 1 ? 'rounded-b-md': '']"
        class="w-full flex flex-col gap-2 items-center py-2 border border-gray-300 text-slate-800">
        <span class="uppercase text-2xl font-semibold text-green-700">{{ rank.title }}</span>
        <span class="text-slate-800 transition-transform duration-300">
          <img v-if="rank.image !== ''" class="w-12" :src="imageRender.getImageUrl(rank.route, rank.image, rank.type)" alt="star">
        </span>
      </button>
      <div :id="`content-${index+1}`" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
        <div class="py-5 px-2 text-sm text-slate-500">
          <div 
            
            class="flex flex-row flex-wrap justify-center items-center gap-4"
          >
            <div v-for="user in rank.content" :key="user.id" class="max-w-64 flex flex-col items-center border border-gray-300 pb-2 gap-1">
              <img class="w-full bg-cover bg-center" :src="imageRender.getImageUrl(user.route, user.image, user.type)" alt="star">
              <span class="text-blue-500 font-semibold text-2xl">{{ user.username }}</span>
              <span><img class="w-52 bg-cover bg-center" :src="imageRender.getImageUrl('decorative', 'estrellaclass')" alt="star"></span>
              <span class="text-slate-800 font-medium text-lg">{{ user.specialist }}</span>
              <button class="mt-2 hover:underline">Ver perfil</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

