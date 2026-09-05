<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-text">
          <h3>Stomatolog Lukić</h3>
          <p>Kontaktirajte nas telefonom</p>
        </div>
        <div class="footer-quick-links">
          <div class="footer-col">
            <h3>Brzi linkovi</h3>
            <ul>
              <li><router-link :to="{ name: 'DentalHome' }">Početna</router-link></li>
              <li><router-link :to="{ name: 'DentalContact' }">Kontakt</router-link></li>
            </ul>
          </div>
          <div class="footer-col">
            <h3>Usluge</h3>
            <ul>
              <li>
                <router-link :to="{ name: 'DentalServicesAestheticDentistry' }">
                  Estetska stomatologija
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'DentalServicesOralSurgery' }">
                  Oralna hirurgija i implantologija
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'DentalServicesPeriodontology' }">
                  Parodontologija
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'DentalServicesProsthetics' }">
                  Protetika
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'DentalServicesOrthodontics' }">
                  Ortodoncija
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy">&copy; {{ currentYear }} Stomatolog Lukić. Sva prava zadržana.</span>
        <ul class="footer-policy-links">
          <li><router-link to="/politika-privatnosti">Politika privatnosti</router-link></li>
          <li><router-link to="/uslovi-koriscenja">Uslovi korišćenja</router-link></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
footer {
  padding-block: var(--space-9);
  background-color: #eff5f8;
}

.footer-text h3 {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: var(--weight-bold);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
  color: var(--gray-900);
}

.footer-text p {
  margin-top: var(--space-3);
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  font-weight: var(--weight-regular);
  line-height: var(--leading-relaxed);
  color: var(--gray-700);
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
  }
}

.footer-quick-links {
  display: flex;
  gap: var(--space-9);
}

.footer-col h3 {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-bold);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-wider);
  color: var(--gray-900);
}

.footer-col ul {
  margin-top: var(--space-4);
  list-style: none;
  padding: 0;
}

.footer-col ul li {
  margin-bottom: var(--space-2);
}

.footer-col ul li a {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--weight-regular);
  line-height: var(--leading-relaxed);
  color: var(--gray-500);
  text-decoration: none;
}

.footer-col ul li a:hover {
  color: var(--teal-600);
}

.footer-bottom {
  margin-top: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  border-top: 1px solid var(--gray-300);
  padding-top: var(--space-4);
}

@media (min-width: 768px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
  }
}

.footer-policy-links {
  list-style: none;
  display: flex;
  gap: var(--space-4);
  padding: 0;
}

.footer-copy {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--weight-regular);
  line-height: var(--leading-relaxed);
  color: var(--gray-600);
}

.footer-policy-links li a {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--weight-regular);
  line-height: var(--leading-relaxed);
  color: var(--gray-500);
  text-decoration: underline;
}

.footer-policy-links li a:hover {
  color: var(--teal-600);
}
</style>
