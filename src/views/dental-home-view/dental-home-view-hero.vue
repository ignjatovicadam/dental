<template>
<section class="hero">
    <img :src="img" alt="Dentist app welcome image woman smiling" />
    <div class="hero-overlay"></div>
    <div class="container">
      <div class="hero-content">
        <h1 class="text-hero">Welcome to our Dental Clinic</h1>
        <p>We provide top-notch dental care for you and your family. Book an appointment today!</p>
        <div>
          <dental-button primary>Book Now</dental-button>
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

.hero img {
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
  letter-spacing: var(--tracking-tight);
}

.hero-content p {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  font-weight: var(--weight-regular);
  line-height: var(--leading-relaxed);
  color: rgba(255, 255, 255, 0.85);
}

@media (min-width: 768px) {
  .hero {
    min-height: 900px;
    align-items: center;
  }
}
</style>
