import { createRouter, createWebHistory } from 'vue-router'
import { DentalHomeView } from '@/views/dental-home-view'
import { DentalContactView } from '@/views/dental-contact-view'
import { DentalServicesTeethWhitening } from '@/views/dental-services-view'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DentalHome',
      component: DentalHomeView,
    },
    {
      path: '/contact',
      name: 'DentalContact',
      component: DentalContactView,
    },
    {
      path: '/services/teeth-whitening',
      name: 'DentalServicesTeethWhitening',
      component: DentalServicesTeethWhitening,
    },
  ],
})

export default router
