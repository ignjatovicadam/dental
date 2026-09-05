<template>
  <div class="hero">
    <img :src="img" alt="Stomatolog Lukić — ordinacija u Beogradu" srcset="" loading="eager"/>
    <div class="hero-overlay"></div>
    <div class="container">
      <div class="hero-content">
        <h1>Posetite našu ordinaciju u Beogradu</h1>
        <p>
          Pružamo vrhunsku stomatološku negu za vas i vašu porodicu. Zakažite svoj termin još danas!
        </p>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import img from '@/assets/images/2.png'
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
