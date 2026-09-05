import { createRouter, createWebHistory } from 'vue-router'
import { DentalHomeView } from '@/views/dental-home-view'
import { DentalContactView } from '@/views/dental-contact-view'
import {
  DentalServicesAestheticDentistry,
  DentalServicesOralSurgery,
  DentalServicesPeriodontology,
  DentalServicesProsthetics,
  DentalServicesOrthodontics,
} from '@/views/dental-services-view'
import { DentalPrivacyPolicyView } from '@/views/dental-privacy-policy-view'
import { DentalTermsOfUseView } from '@/views/dental-terms-of-use-view'

const SITE_NAME = 'Stomatolog Lukić'
const DEFAULT_DESCRIPTION =
  'Stomatolog Lukić — moderna stomatološka ordinacija. Estetska stomatologija, implantologija, parodontologija, protetika i ortodoncija.'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DentalHome',
      component: DentalHomeView,
      meta: {
        // Home shows just the site name (no prefix)
        title: null,
        description: DEFAULT_DESCRIPTION,
      },
    },
    {
      path: '/kontakt',
      name: 'DentalContact',
      component: DentalContactView,
      meta: {
        title: 'Kontakt',
        description:
          'Zakažite pregled ili nam se obratite — adresa, telefon i radno vreme ordinacije Stomatolog Lukić.',
      },
    },
    {
      path: '/usluge/estetska-stomatologija',
      name: 'DentalServicesAestheticDentistry',
      component: DentalServicesAestheticDentistry,
      meta: {
        title: 'Estetska stomatologija',
        description:
          'Estetska stomatologija — keramičke i kompozitne fasete, izbeljivanje zuba i korekcija oblika za prirodno lep osmeh.',
      },
    },
    {
      path: '/usluge/oralna-hirurgija-i-implantologija',
      name: 'DentalServicesOralSurgery',
      component: DentalServicesOralSurgery,
      meta: {
        title: 'Oralna hirurgija i implantologija',
        description:
          'Ugradnja zubnih implantata, vađenje umnjaka, augmentacija kosti i sinus lift — precizno vođena oralna hirurgija.',
      },
    },
    {
      path: '/usluge/parodontologija',
      name: 'DentalServicesPeriodontology',
      component: DentalServicesPeriodontology,
      meta: {
        title: 'Parodontologija',
        description:
          'Zdrave desni i prevencija paradontopatije — uklanjanje kamenca, dubinsko čišćenje i terapija laserom.',
      },
    },
    {
      path: '/usluge/protetika',
      name: 'DentalServicesProsthetics',
      component: DentalServicesProsthetics,
      meta: {
        title: 'Protetika',
        description:
          'Cirkonijum i metalokeramičke krunice, zubni mostovi, proteze i nadoknade na implantima — prirodan izgled i dugotrajan rezultat.',
      },
    },
    {
      path: '/usluge/ortodoncija',
      name: 'DentalServicesOrthodontics',
      component: DentalServicesOrthodontics,
      meta: {
        title: 'Ortodoncija',
        description:
          'Fiksne i estetske bravice, providne folije (aligneri) i mobilni aparati za decu — diskretno poravnanje zuba.',
      },
    },
    {
      path: '/politika-privatnosti',
      name: 'DentalPrivacyPolicy',
      component: DentalPrivacyPolicyView,
      meta: {
        title: 'Politika privatnosti',
        description:
          'Politika privatnosti ordinacije Stomatolog Lukić — kako prikupljamo, koristimo i štitimo vaše lične podatke.',
      },
    },
    {
      path: '/uslovi-koriscenja',
      name: 'DentalTermsOfUse',
      component: DentalTermsOfUseView,
      meta: {
        title: 'Uslovi korišćenja',
        description:
          'Uslovi korišćenja veb-sajta ordinacije Stomatolog Lukić.',
      },
    },
  ],
  scrollBehavior() {
      return { top: 0 }
  },
})

router.afterEach((to) => {
  const title = to.meta?.title
  document.title = title ? `${title} - ${SITE_NAME}` : SITE_NAME

  const description = to.meta?.description ?? DEFAULT_DESCRIPTION
  let tag = document.querySelector('meta[name="description"]')
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', 'description')
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', description)
})

export default router
