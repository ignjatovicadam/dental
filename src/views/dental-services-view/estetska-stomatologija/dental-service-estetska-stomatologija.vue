<template>
  <div class="hero">
    <img :src="heroImg" alt="Estetska stomatologija" loading="eager" />
    <div class="hero-overlay"></div>
    <div class="container">
      <div class="hero-content">
        <h1>Estetska stomatologija</h1>
        <p>Prirodna belina i harmonija osmeha uz savremene estetske tehnike.</p>
      </div>
    </div>
  </div>

  <section class="section-pad">
    <div class="container">
      <div class="content-grid">
        <div class="info-col">
          <p class="description font-body text-gray-700">
            Estetska stomatologija spaja umetnost i nauku kako biste dobili osmeh koji
            volite.
          </p>

          <h3 class="sub-title text-h3 fw-semibold font-display text-gray-900">
            Šta nudimo
          </h3>
          <ul class="sub-services">
            <li>
              <strong>Keramičke fasete</strong>
              <span>Tanki keramički ljuspići koji trajno menjaju oblik i boju zuba.</span>
            </li>
            <li>
              <strong>Kompozitne fasete i bondovanje</strong>
              <span>Brza estetska korekcija u jednoj poseti, bez brušenja.</span>
            </li>
            <li>
              <strong>Estetske plombe</strong>
              <span>Beli kompozitni ispuni koji se ne razlikuju od prirodnog zuba.</span>
            </li>
            <li>
              <strong>Korekcija oblika i dužine zuba</strong>
              <span>Fino modeliranje ivica i proporcija za skladan osmeh.</span>
            </li>
            <li>
              <strong>Smile makeover</strong>
              <span>Kompletna estetska transformacija po individualnom digitalnom planu.</span>
            </li>
          </ul>
        </div>

        <div class="services-col">
          <dental-card>
            <h3 class="text-h3 fw-semibold font-display text-gray-900">Ostale usluge</h3>
            <ul class="other-list flex flex-col">
              <li>
                <router-link :to="{ name: 'DentalServicesOralSurgery' }" class="other-link flex align-items-center">
                  <span class="dot"></span>
                  <span class="font-body text-gray-700">Oralna hirurgija i implantologija</span>
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'DentalServicesPeriodontology' }" class="other-link flex align-items-center">
                  <span class="dot"></span>
                  <span class="font-body text-gray-700">Parodontologija</span>
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'DentalServicesProsthetics' }" class="other-link flex align-items-center">
                  <span class="dot"></span>
                  <span class="font-body text-gray-700">Protetika</span>
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'DentalServicesOrthodontics' }" class="other-link flex align-items-center">
                  <span class="dot"></span>
                  <span class="font-body text-gray-700">Ortodoncija</span>
                </router-link>
              </li>
            </ul>
          </dental-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroImg from '@/assets/images/hero-background.jpg'
import { DentalCard } from '@/components'
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

.content-grid {
  display: grid;
  gap: var(--grid-gap-lg);
}
.description {
  margin-top: var(--space-5);
  font-size: var(--text-body-lg);
  line-height: var(--leading-relaxed);
}
.sub-title {
  margin-top: var(--space-7);
}
.sub-services {
  list-style: none;
  padding: 0;
  margin-top: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}
.sub-services li {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}
.sub-services strong {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  color: var(--gray-900);
}
.sub-services span {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--gray-500);
  line-height: var(--leading-normal);
}

.other-list {
  list-style: none;
  gap: var(--space-3);
}
.other-link {
  gap: var(--space-3);
  text-decoration: none;
  padding: var(--space-2) 0;
  transition: var(--transition-base);
}
.other-link:hover span:last-child {
  color: var(--accent);
}
.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--teal-400);
  flex-shrink: 0;
}
.other-link:hover .dot {
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
