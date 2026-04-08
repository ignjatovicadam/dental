<template>
  <div class="mobile-menu-button flex align-items-center justify-content-center hidden-on-desktop">
    <div :class="['hamburger', { open: open }]">
      <span></span>
      <span></span>
      <span></span>
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
.mobile-menu-button {
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger {
  width: 20px;
  height: 20px;
  transition: all 0.3s ease;
  position: relative;
}

.hamburger span {
  position: absolute;
  right: 0;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: var(--white);
  transition: all 0.3s ease;
}

.hamburger span:nth-child(1) {
  top: 2px;
}

.hamburger span:nth-child(2) {
  top: 7px;
}

.hamburger span:nth-child(3) {
  top: 12px;
  width: 10px;
}

.hamburger.open span:nth-child(1) {
  top: 50%;
  transform: translateY(-50%) rotateZ(-135deg);
}

.hamburger.open span:nth-child(2) {
  right: 50%;
  width: 0;
}

.hamburger.open span:nth-child(3) {
  top: 50%;
  width: 100%;
  transform: translateY(-50%) rotateZ(135deg);
}
</style>
