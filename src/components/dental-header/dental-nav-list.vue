<template>
  <ul class="nav-list">
    <li class="nav-item">
      <router-link to="/">Home</router-link>
    </li>

    <li class="nav-item nav-dropdown">
      <span class="nav-dropdown-trigger">Services</span>
      <div class="nav-dropdown-menu">
        <router-link to="/services/teeth-whitening">
          <span>
            <strong>Teeth Whitening</strong>
            <small>Brighten & remove discoloration</small>
          </span>
        </router-link>
        <router-link to="/services/dental-cleaning">
          <span>
            <strong>Dental Cleaning</strong>
            <small>Remove plaque & prevent cavities</small>
          </span>
        </router-link>
        <router-link to="/services/cavity-repair">
          <span>
            <strong>Cavity Repair</strong>
            <small>Natural-looking restorations</small>
          </span>
        </router-link>
        <router-link to="/services/dental-implants">
          <span>
            <strong>Dental Implants</strong>
            <small>Permanent tooth replacement</small>
          </span>
        </router-link>
        <router-link to="/services/orthodontics">
          <span>
            <strong>Orthodontics</strong>
            <small>Braces & clear aligners</small>
          </span>
        </router-link>
        <router-link to="/services/root-canal">
          <span>
            <strong>Root Canal</strong>
            <small>Save & restore damaged teeth</small>
          </span>
        </router-link>
      </div>
    </li>

    <li class="nav-item"><router-link to="/prices">Prices</router-link></li>
    <li class="nav-item"><router-link to="/contact">Contact</router-link></li>
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
  width: 500px;
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
