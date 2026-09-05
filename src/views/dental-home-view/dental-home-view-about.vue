<template>
  <section>
    <div class="container">
      <div class="about-content">
        <h2 v-reveal>Vaš stomatolog od poverenja u Beogradu</h2>
        <p>
          Posvećeni smo pružanju vrhunske stomatološke nege u prijatnom, sigurnom i opuštenom okruženju. Naš stručni i iskusni tim tu je da brine o zdravlju vaših zuba i pomogne vam da sačuvate lep i zdrav osmeh dugi niz godina.
        </p>
      </div>
      <div class="dental-clinic-photo">
        <img :src="img" alt="Dental Clinic Photo" />
      </div>
    </div>
  </section>
</template>

<script setup>
import img from '@/assets/images/dental-clinic-photo.png'
</script>

<style scoped>
section {
  padding-block: var(--section-padding-y);
  background-color: var(--gray-50);
}

.about-content {
  max-width: 680px;
}

.about-content h2 {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-bold);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
  color: var(--gray-900);
}

.about-content p {
  margin-top: var(--space-5);
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  font-weight: var(--weight-regular);
  line-height: var(--leading-relaxed);
  color: var(--gray-700);
}

.dental-clinic-photo {
  margin-top: var(--space-7);
  border-radius: var(--radius-3xl);
  overflow: hidden;
}

.dental-clinic-photo img {
  display: block;
  width: 100%;
  object-fit: cover;
}
</style>
