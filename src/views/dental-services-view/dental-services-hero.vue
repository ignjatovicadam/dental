<template>
  <div class="hero">
    <img :src="img" alt="Dental clinic hero image" srcset="" />
    <div class="hero-overlay"></div>
    <div class="container">
      <div class="hero-content">
        <h1>Whitening Services</h1>
        <p>We provide top-notch dental care for you and your family. Book an appointment today!</p>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import img from '@/assets/images/hero-background.jpg'
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 360px;
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
  font-size: var(--text-h1);
  font-weight: var(--weight-bold);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
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
    align-items: center;
    min-height: 460px;
  }
}
</style>
