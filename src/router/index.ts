import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layout/MainLayout.vue';
import HomeView from '@/views/HomeView.vue';
import HistoryView from '@/module/history/views/HistoryView.vue';

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
        }
      ]
    },
  ]
})

export default router
