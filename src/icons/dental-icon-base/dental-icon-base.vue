<template>
  <div class="dental-icon">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style scoped>
.dental-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
