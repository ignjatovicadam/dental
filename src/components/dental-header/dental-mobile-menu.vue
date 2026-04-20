<template>
  <div class="mobile-menu hidden-on-desktop" :class="{ open: open }">
    <div class="container py-4">
      <ul class="flex flex-col gap-4">
        <li><router-link to="/" @click="$emit('close')">Home</router-link></li>

        <li class="mobile-dropdown">
          <button class="mobile-dropdown-trigger" @click="servicesOpen = !servicesOpen">
            Services
            <svg
              class="chevron"
              :class="{ rotated: servicesOpen }"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          <div class="mobile-submenu" :class="{ open: servicesOpen }">
            <div class="mobile-submenu-inner">
              <router-link to="/services/teeth-whitening" @click="$emit('close')"
                >Teeth Whitening</router-link
              >
              <router-link to="/services/dental-cleaning" @click="$emit('close')"
                >Dental Cleaning</router-link
              >
              <router-link to="/services/cavity-repair" @click="$emit('close')"
                >Cavity Repair</router-link
              >
              <router-link to="/services/dental-implants" @click="$emit('close')"
                >Dental Implants</router-link
              >
              <router-link to="/services/orthodontics" @click="$emit('close')"
                >Orthodontics</router-link
              >
              <router-link to="/services/root-canal" @click="$emit('close')"
                >Root Canal</router-link
              >
            </div>
          </div>
        </li>

        <li><router-link to="/prices" @click="$emit('close')">Prices</router-link></li>
        <li><router-link to="/contact" @click="$emit('close')">Contact</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['close'])

const servicesOpen = ref(false)

watch(
  () => props.open,
  (isOpen) => {
    if (!isOpen) servicesOpen.value = false
  },
)
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

.mobile-menu ul li a,
.mobile-dropdown-trigger {
  text-decoration: none;
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: var(--gray-700);
  transition: var(--transition-base);
}

.mobile-menu ul li a:hover,
.mobile-dropdown-trigger:hover {
  color: var(--accent-hover);
}

.mobile-dropdown-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.chevron {
  transition: transform 0.3s ease;
}

.chevron.rotated {
  transform: rotate(180deg);
}

.mobile-submenu {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
}

.mobile-submenu.open {
  grid-template-rows: 1fr;
}

.mobile-submenu-inner {
  overflow: hidden;
}

.mobile-submenu a {
  display: block;
  text-decoration: none;
  font-family: var(--font-display);
  font-size: var(--text-xs);
  font-weight: var(--weight-regular);
  color: var(--gray-500);
  padding: var(--space-2) 0 var(--space-2) var(--space-4);
  transition: var(--transition-base);
}

.mobile-submenu a:first-child {
  padding-top: var(--space-3);
}

.mobile-submenu a:hover,
.mobile-submenu a.router-link-active {
  color: var(--accent);
}
</style>
