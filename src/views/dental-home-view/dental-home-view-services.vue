<template>
  <section class="bg-gray-50">
    <div class="container">
      <div class="services-content flex align-items-center justify-content-between">
        <h1 class="text-h1 fw-bold text-gray-900">Services</h1>
        <div class="services-control-buttons">
          <button class="services-arrow prev" aria-label="Previous">
            <dental-icon-arrow-prev />
          </button>
          <button class="services-arrow next" aria-label="Next">
            <dental-icon-arrow-next />
          </button>
        </div>
      </div>

      <div class="services-list">
        <div class="services-list-item">
          <dental-card>
            <div class="dental-card-header flex align-items-center justify-content-between">
              <dental-icon-base>
                <dental-icon-cleaning />
              </dental-icon-base>
              <dental-icon-link />
            </div>
            <div class="dental-card-body">
              <h3>Dental Cleaning</h3>
              <p>
                Removes plaque and tartar to prevent cavities and gum disease, maintaining a healthy
                and bright smile.
              </p>
            </div>
          </dental-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  DentalIconArrowPrev,
  DentalIconArrowNext,
  DentalIconCleaning,
  DentalIconBase,
  DentalIconLink,
} from '@/icons'
import { DentalCard } from '@/components'
</script>

<style scoped>
section {
  padding-block: var(--section-padding-y);
}

.services-content {
  gap: var(--space-6);
}

.text-h1 {
  font-family: var(--font-display);
  letter-spacing: var(--tracking-tight);
}

.services-control-buttons {
  display: flex;
  gap: var(--space-3);
}

.services-arrow {
  width: 48px;
  height: 48px;
  background: var(--white);
  border: var(--border-medium);
  border-radius: var(--radius-pill);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--gray-500);
  transition: var(--transition-card);
  padding: 0;
}

.services-arrow:hover {
  border-color: var(--teal-300);
  color: var(--accent);
  box-shadow: var(--shadow-teal);
  transform: var(--lift-sm);
}

.services-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--grid-gap);
  margin-top: var(--space-7);
}

.dental-card-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.dental-card-body h3 {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-semibold);
  color: var(--gray-900);
  letter-spacing: var(--tracking-tight);
}

.dental-card-body p {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--weight-regular);
  color: var(--gray-500);
  line-height: var(--leading-normal);
}
</style>
