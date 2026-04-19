<template>
  <section class="section-pad">
    <div class="container">
      <div class="content-grid">
        <div class="info-col">
          <h2 class="text-h1 fw-bold font-display text-gray-900">Teeth Whitening</h2>
          <p class="description font-body text-gray-700">
            Our professional teeth whitening service is designed to give you a brighter, more
            confident smile. Using advanced bleaching techniques and safe, clinically tested
            materials, we carefully remove years of stains caused by coffee, tea, wine, and everyday
            wear. The treatment is performed in a comfortable, relaxed environment by our
            experienced dental team, ensuring both safety and effectiveness. Whether you're
            preparing for a special occasion or simply want to refresh your appearance, our
            whitening procedure delivers visible results in just one visit. We also provide
            personalized aftercare advice to help you maintain your new radiant smile for as long as
            possible.
          </p>
        </div>

        <div class="services-col">
          <dental-card>
            <h3 class="text-h3 fw-semibold font-display text-gray-900">Other Services</h3>
            <ul class="services-list flex flex-col">
              <li v-for="service in otherServices" :key="service.name">
                <a :href="service.href" class="service-link flex align-items-center">
                  <span class="service-dot"></span>
                  <span class="font-body text-gray-700">{{ service.name }}</span>
                </a>
              </li>
            </ul>
          </dental-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { DentalCard } from '@/components'

const otherServices = [
  { name: 'Dental Cleaning', href: '#' },
  { name: 'Cavity Repair', href: '#' },
  { name: 'Dental Alignment', href: '#' },
  { name: 'Dental Implants', href: '#' },
  { name: 'Orthodontics', href: '#' },
  { name: 'Root Canal', href: '#' },
]
</script>

<style scoped>
.content-grid {
  display: grid;
  gap: var(--grid-gap-lg);
}

.description {
  margin-top: var(--space-5);
  font-size: var(--text-body-lg);
  line-height: var(--leading-relaxed);
}

.services-list {
  list-style: none;
  gap: var(--space-3);
}

.service-link {
  gap: var(--space-3);
  text-decoration: none;
  padding: var(--space-2) 0;
  transition: var(--transition-base);
}

.service-link:hover span:last-child {
  color: var(--accent);
}

.service-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--teal-400);
  flex-shrink: 0;
}

.service-link:hover .service-dot {
  background: var(--teal-600);
}

@media (min-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr 320px;
    gap: var(--grid-gap-xl);
    align-items: start;
  }
}
</style>
