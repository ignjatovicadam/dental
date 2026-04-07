<template>
  <div class="mobile-menu hidden-on-desktop" :class="{ open: open }">
    <div class="container py-4">
      <ul class="flex flex-col gap-4">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Prices</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.mobile-menu {
  position: absolute;
  left: 0;
  top: var(--nav-height);
  width: 100%;
  z-index: 2;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.4s ease;
  background-color: var(--gray-50);
}

.mobile-menu.open {
  max-height: 600px;
}

.mobile-menu ul {
  list-style: none;
}

.mobile-menu ul li {
  border-bottom: var(--border-subtle);
}

.mobile-menu ul li:last-child {
  border-bottom: none;
}

.mobile-menu ul li a {
  text-decoration: none;
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: var(--gray-700);
  transition: var(--transition-base);
}

.mobile-menu ul li a:hover {
  color: var(--accent-hover);
}
</style>
