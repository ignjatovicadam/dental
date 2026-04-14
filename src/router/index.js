import { createRouter, createWebHistory } from 'vue-router'
import { DentalHomeView } from '@/views/dental-home-view'
import { DentalContactView } from '@/views/dental-contact-view'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DentalHome',
      component: DentalHomeView,
      meta: { darkHeader: true },
    },
    {
      path: '/contact',
      name: 'DentalContact',
      component: DentalContactView,
      meta: { darkHeader: true },
    },
  ],
})

export default router
