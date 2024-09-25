<script lang="ts" setup>
  import { ref } from 'vue';

  const bgHero = ref('/src/assets/img/nosotros.png');
</script>


<template>
  <div class="background-hero">

  </div>
</template>
<style lang="scss" scoped>
.background-hero {
  background-image: url(v-bind("bgHero"));
}
</style>


