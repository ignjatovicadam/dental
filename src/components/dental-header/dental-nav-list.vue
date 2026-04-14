<template>
  <ul class="nav-list">
    <li class="nav-item"><a href="#">Home</a></li>
    <li class="nav-item"><a href="#">Services</a></li>
    <li class="nav-item"><a href="#">About Us</a></li>
    <li class="nav-item"><a href="#">Prices</a></li>
    <li class="nav-item"><router-link to="/contact" class="nav-item">Contact</router-link></li>
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
