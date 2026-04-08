<template>
  <header>
    <div class="container">
      <div class="header-content flex align-items-center justify-content-between">
        <div class="header-logo">
          <span class="logo-text">Dental</span>
        </div>

        <nav class="header-nav hidden-on-mobile">
          <dental-nav-list />
        </nav>

        <dental-mobile-button :open="open" @click="open = !open" />
        <dental-mobile-menu :open="open" />
        <div class="hidden-on-mobile">
          <dental-button primary>Book Now</dental-button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { DentalButton } from '@/components'
import DentalMobileMenu from './dental-mobile-menu.vue'
import DentalMobileButton from './dental-mobile-button.vue'
import DentalNavList from './dental-nav-list.vue'

const open = ref(false)
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: var(--shadow-xs);
  z-index: var(--z-sticky);
}

.header-content {
  min-height: var(--nav-height);
}

.logo-text {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: var(--weight-bold);
  color: var(--white);
}

@media (min-width: 768px) {
  header {
    background: unset;
    backdrop-filter: unset;
    -webkit-backdrop-filter: unset;
    box-shadow: unset;
    padding: var(--space-4) 0;
  }

  .header-content {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: var(--shadow-xs);
    padding: 0 var(--space-6);
    border-radius: var(--radius-xl);
  }
}
</style>
