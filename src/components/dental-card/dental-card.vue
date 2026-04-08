<template>
  <div class="dental-card">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style scoped>
.dental-card {
  background: var(--white);
  border: var(--border-subtle);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-card);
}

.dental-card:hover {
  border: var(--border-accent);
  box-shadow: var(--shadow-teal);
  transform: var(--lift-sm);
}
</style>
