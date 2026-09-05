<template>
  <ul class="nav-list">
    <li class="nav-item">
      <router-link to="/">Početna</router-link>
    </li>

    <li class="nav-item nav-dropdown">
      <span class="nav-dropdown-trigger">Usluge</span>
      <div class="nav-dropdown-menu">
        <router-link
          v-for="service in services"
          :key="service.routeName"
          :to="{ name: service.routeName }"
        >
          <span>
            <strong>{{ service.label }}</strong>
            <small>{{ service.tagline }}</small>
          </span>
        </router-link>
      </div>
    </li>

    <li class="nav-item"><router-link to="/kontakt">Kontakt</router-link></li>
  </ul>
</template>

<script setup>
import { SERVICES_NAV } from '@/views/dental-services-view/services-nav'

const services = SERVICES_NAV
</script>

<style scoped>
.nav-list {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  list-style: none;
}

.nav-item a,
.nav-dropdown-trigger {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: var(--gray-300);
  text-decoration: none;
  transition: var(--transition-base);
  cursor: pointer;
}

.nav-item a:hover,
.nav-dropdown-trigger:hover {
  color: var(--accent);
}

.nav-dropdown {
  position: relative;
}

.nav-dropdown-menu {
  display: none;
  position: absolute;
  top: calc(100% + var(--space-2));
  left: 50%;
  transform: translateX(-50%);
  width: 550px;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-1);
  padding: var(--space-2);
  background: var(--white);
  border: var(--border-subtle);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  z-index: var(--z-dropdown);
}

.nav-dropdown-menu::before {
  content: '';
  position: absolute;
  top: calc(-1 * var(--space-3));
  left: 0;
  right: 0;
  height: var(--space-3);
}

.nav-dropdown:hover .nav-dropdown-menu {
  display: grid;
}

.nav-dropdown-menu a {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3);
  border-radius: var(--radius-md);
  text-decoration: none;
  color: var(--gray-700);
  transition: var(--transition-base);
}

.nav-dropdown-menu a:hover,
.nav-dropdown-menu a.router-link-active {
  background: var(--gray-50);
  color: var(--accent);
}

.nav-dropdown-menu strong {
  display: block;
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: inherit;
}

.nav-dropdown-menu small {
  display: block;
  font-family: var(--font-display);
  font-size: var(--text-label);
  color: var(--gray-500);
  margin-top: 1px;
}
</style>
