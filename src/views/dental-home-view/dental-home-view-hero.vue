<template>
  <section class="hero">
    <img
      :src="img"
      alt="Dentist app welcome image woman smiling"
      class="hero-img"
      loading="eager"
    />
    <div class="hero-overlay"></div>
    <div class="container">
      <div class="hero-content">
        <h1 v-reveal class="text-hero">Kompletna stomatološka nega</h1>
        <p v-reveal="200">
          Brinemo o zdravlju i lepoti vašeg osmeha kroz savremenu stomatologiju, stručan pristup i pažljivo odabrane tretmane prilagođene vašim potrebama
        </p>
        <div v-reveal="350">
          <dental-button primary :to="{ name: 'DentalContact' }">Zakažite pregled</dental-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import img from '@/assets/images/2.png'
import { DentalButton } from '@/components'

</script>

<style scoped>
.hero {
  position: relative;
  min-height: 660px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}

.hero-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: var(--z-base);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.6));
  z-index: var(--z-raised);
}

.hero .container {
  position: relative;
  z-index: var(--z-raised);
  padding-top: calc(var(--nav-height) + var(--space-8));
  padding-bottom: var(--space-9);
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  max-width: 560px;
}

.hero-content h1 {
  font-family: var(--font-display);
  color: var(--white);
}

.hero-content p {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  font-weight: var(--weight-regular);
  line-height: var(--leading-relaxed);
  color: var(--gray-300);
}

@media (min-width: 768px) {
  .hero {
    min-height: 900px;
    align-items: center;
  }
}
</style>
