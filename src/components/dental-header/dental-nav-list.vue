<template>
  <ul class="nav-list">
    <li class="nav-item"><router-link to="/">Home</router-link></li>
    <li class="nav-item"><router-link to="/services/teeth-whitening">Services</router-link></li>
    <li class="nav-item"><router-link to="/prices">Prices</router-link></li>
    <li class="nav-item"><router-link to="/contact">Contact</router-link></li>
  </ul>
</template>

<script setup></script>

<style scoped>
.nav-list {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  list-style: none;
}

.nav-item a {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: var(--gray-300);
  text-decoration: none;
  transition: var(--transition-base);
}

.nav-item a:hover {
  color: var(--teal-300);
}
</style>
