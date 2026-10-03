<template>
  <dental-contact-hero />
  <section>
    <div class="container">
      <div class="contact-card">
        <div class="contact-info">
          <h2>Stupite u kontakt</h2>
          <p>
            Tu smo da odgovorimo na sva vaša pitanja i pomognemo vam da zakažete svoj sledeći
            termin. Pišite nam, pozovite nas ili nas posetite — vaš novi osmeh počinje ovde.
          </p>

          <ul class="contact-list">
            <li>
              <span class="contact-label">Telefon</span>
              <a class="contact-option" href="tel:+381112571224">011 257 12 24</a>
            </li>
            <li>
              <span class="contact-label">E-mail</span>
              <a class="contact-option" href="mailto:kontakt@stomatologlukic.rs"
                >kontakt@stomatologlukic.rs</a
              >
            </li>
            <li>
              <span class="contact-label">Adresa</span>
              <span class="contact-option">Titova 14, Beograd</span>
            </li>
          </ul>
        </div>

        <div class="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2834.539919918962!2d20.3704827!3d44.7290005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6dec07cb2c59%3A0x7f048d4e521091d4!2sDr%20Lukic!5e0!3m2!1sen!2srs!4v1791025194568!5m2!1sen!2srs"
            title="Dental clinic location"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import DentalContactHero from './dental-contact-hero.vue'
</script>

<style scoped>
section {
  padding-block: var(--section-padding-y);
}

.contact-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--grid-gap-lg);
  border-radius: var(--radius-2xl);
  overflow: hidden;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.contact-info h2 {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-bold);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
  color: var(--gray-900);
}

.contact-info > p {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  font-weight: var(--weight-regular);
  line-height: var(--leading-relaxed);
  color: var(--gray-700);
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.contact-list li {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.contact-label {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-wider);
  color: var(--gray-900);
}

.contact-option {
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-regular);
  line-height: var(--leading-normal);
  color: var(--gray-500);
  transition: var(--transition-base);
}

a.contact-option:hover {
  color: var(--teal-300);
}

.contact-map {
  border-radius: var(--radius-lg);
  overflow: hidden;
  min-height: 280px;
}

.contact-map iframe {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 280px;
  border: 0;
}

@media (min-width: 768px) {
  .contact-card {
    grid-template-columns: 1fr 1fr;
  }

  .contact-map {
    min-height: 360px;
  }

  .contact-map iframe {
    min-height: 360px;
  }
}
</style>
