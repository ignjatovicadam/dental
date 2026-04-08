<template>
  <button :class="['button', { primary }]">
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  primary: {
    type: Boolean,
    default: false,
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
