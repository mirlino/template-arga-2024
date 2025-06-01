import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layout/MainLayout.vue';
import HomeView from '@/pages/HomePage.vue';
import HistoryView from '@/module/history/pages/HistoryPage.vue';
import MembersView from '@/module/members/pages/MembersPage.vue';
import HomeEventView from '@/module/events/pages/EventPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      redirect: {name: 'home'},
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'historia',
          name: 'nosotros',
          component: HistoryView,
        },
        {
          path: 'miembros',
          name: 'members',
          component: MembersView
        },
        {
          path: 'eventos',
          name: 'events',
          component: HomeEventView
        }
      ],
      
    },
  ]
})

export default router
