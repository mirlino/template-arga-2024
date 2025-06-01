<script lang="ts" setup>
  import HeroSection from '../components/hero/HeroSection.vue'
  import CardSectionComponent from '../components/content/CardSection.component.vue';

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
      title: 'Mercedes',
      logo: 'badge-logo',
      img: 'historyOne',
      link: '#',
    },
     {
      date: '13 septiembre 2024',
      category: 'Misión',
      title: 'Mercedes',
      logo: 'badge-logo',
      img: 'historyOne',
      link: '#',
    },
     {
      date: '13 septiembre 2024',
      category: 'Misión',
      title: 'Mercedes',
      logo: 'badge-logo',
      img: 'historyOne',
      link: '#',
    },
     {
      date: '13 septiembre 2024',
      category: 'Misión',
      title: 'Mercedes',
      logo: 'badge-logo',
      img: 'historyOne',
      link: '#',
    },
     {
      date: '13 septiembre 2024',
      category: 'Misión',
      title: 'Mercedes',
      logo: 'badge-logo',
      img: 'historyOne',
      link: '#',
    }
  ];
</script>

<template>
  <div>
    <header>
      <HeroSection />
    </header>
    <section class="w-full min-h-80 flex flex-row flex-wrap gap-4  justify-center items-start py-6 px-4">
      <CardSectionComponent
        v-for="item in recentEvents" :key="item.date"
        :has-logo="true"
        :information="item"
       />
      
    </section>
  </div>
</template>
