<script lang="ts" setup>
import { useRenderingImage } from "@/composables/useRenderingImage.composable";
import type { Events } from "@/interfaces/events.interface";

const props = defineProps<Events>();
const fullImageUrl = useRenderingImage();

</script>

<template>
  <div
    class="relative max-w-[30rem] hover:-translate-y-2 transition-transform shadow-lg shadow-gray-400 font-purista text-white"
  >
    <img
      class="bg-cover brightness-50 min-h-72 z-10"
      :src="fullImageUrl.getImageUrl('news_img', information.img)"
      :alt="`${information.title}`"
    />
    <span class="absolute uppercase top-0 left-0 bg-azul-arga-600 py-4 px-6">{{
      information.date
    }}</span>
    <div
      class="absolute flex flex-row justify-center items-center gap-8 top-[25%] px-4 left-[10%]"
    >
      <div v-if="hasLogo">
        <img class="w-[6rem]" :src="fullImageUrl.getImageUrl('news_img', information.logo!)" alt="arga" />
      </div>
      <div>
        <span class="font-bold text-lg uppercase text-amarillo-arga-300">{{
          information.category
        }}</span>
        <h2 class="text-4xl font-bold uppercase">
          {{
            information.title.length > 20
              ? `${information.title.slice(1, 15)}...`
              : information.title
          }}
        </h2>
        <p
          v-if="!props.hasLogo && information.paragraph"
          class="text-white text-base font-thin"
        >
          {{
            information.paragraph.length > 100
              ? `${information.paragraph.slice(1, 100)}...`
              : information.paragraph
          }}
        </p>
      </div>
    </div>
    <router-link
      class="absolute bottom-0 right-0 font-thin text-md px-6 py-4 bg-azul-arga-600 hover:px-8 hover:py-6 transition-all"
      :to="{ name: '' }"
      >Ver detalles...</router-link
    >
  </div>
  <!-- <div id="card" class="min-w-[400px] min-h-[200px] rounded-lg shadow-md border border-gray-600 font-purista" :style="'background-image:url('+fullImageUrl.getImageUrl('news_img','fondoTres')+');'">
    <div class="text-white">información</div>
  </div> -->
</template>
<style lang="css">
#card {
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
