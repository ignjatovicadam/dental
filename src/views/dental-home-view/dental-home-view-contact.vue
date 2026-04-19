<template>
  <section>
    <div class="container">
      <div class="contact-card">
        <div class="contact-info">
          <h2>Get in Touch</h2>
          <p>
            We are here to answer all your questions and schedule your next appointment. Write to
            us, call us, or drop by: your new smile starts here.
          </p>

          <ul class="contact-list">
            <li>
              <span class="contact-label">Phone</span>
              <a class="contact-option" href="tel:+15551234567">+1 (555) 123-4567</a>
            </li>
            <li>
              <span class="contact-label">Email</span>
              <a class="contact-option" href="mailto:hello@dentalclinic.com"
                >hello@dentalclinic.com</a
              >
            </li>
            <li>
              <span class="contact-label">Address</span>
              <span class="contact-option">123 Smile Avenue, Suite 200, New York, NY 10001</span>
            </li>
          </ul>
        </div>

        <div class="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215!2d-73.9857!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1680000000000"
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

<script setup></script>

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
