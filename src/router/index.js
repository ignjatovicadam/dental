import { createRouter, createWebHistory } from 'vue-router'
import { DentalHomeView } from '@/views/dental-home-view'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DentalHome',
      component: DentalHomeView,
    },
  ],
})

export default router
