<template>
  <component
    :is="to ? 'router-link' : 'button'"
    :to="to"
    :class="['button', { primary }]"
  >
    <slot></slot>
  </component>
</template>

<script setup>
defineProps({
  primary: {
    type: Boolean,
    default: false,
  },
  // When set, DentalButton renders as <router-link> instead of <button>.
  // Accepts anything vue-router accepts (path string or a location object).
  to: {
    type: [String, Object],
    default: null,
  },
})
</script>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  padding: var(--space-3) var(--space-5);
  border-radius: var(--radius-pill);
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: var(--transition-base);
}

.button.primary {
  background: var(--accent);
  color: var(--white);
}

.button.primary:hover {
  background: var(--accent-hover);
}
</style>
