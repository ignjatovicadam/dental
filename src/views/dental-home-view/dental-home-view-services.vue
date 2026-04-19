<template>
  <section>
    <div class="container">
      <div class="services-content flex align-items-center justify-content-between">
        <h2 class="text-h1 fw-bold text-gray-900">Specialized Dental Services</h2>
        <div class="services-control-buttons">
          <button
            class="services-arrow prev"
            :disabled="!canPrev"
            aria-label="Previous"
            @click="prev"
          >
            <dental-icon-arrow-prev />
          </button>
          <button class="services-arrow next" :disabled="!canNext" aria-label="Next" @click="next">
            <dental-icon-arrow-next />
          </button>
        </div>
      </div>

      <div class="services-track-wrapper py-4">
        <div ref="trackRef" class="services-list" :style="{ transform: trackTransform }">
          <div class="services-list-item">
            <dental-card>
              <div class="dental-card-header flex align-items-center justify-content-between">
                <dental-icon-base>
                  <img :src="toothCheckmark" alt="" />
                </dental-icon-base>
                <dental-icon-link />
              </div>
              <div class="dental-card-body">
                <h3>Dental Cleaning</h3>
                <p>
                  Removes plaque and tartar to prevent cavities and gum disease, maintaining a
                  healthy and bright smile.
                </p>
              </div>
            </dental-card>
          </div>
          <div class="services-list-item">
            <dental-card>
              <div class="dental-card-header flex align-items-center justify-content-between">
                <dental-icon-base>
                  <img :src="toothStar" alt="" />
                </dental-icon-base>
                <dental-icon-link />
              </div>
              <div class="dental-card-body">
                <h3>Teeth Whitening</h3>
                <p>
                  Brightens teeth by removing stains and discoloration, enhancing the overall
                  appearance of your smile.
                </p>
              </div>
            </dental-card>
          </div>
          <div class="services-list-item">
            <dental-card>
              <div class="dental-card-header flex align-items-center justify-content-between">
                <dental-icon-base>
                  <img :src="toothShield" alt="" />
                </dental-icon-base>
                <dental-icon-link />
              </div>
              <div class="dental-card-body">
                <h3>Cavity Repair</h3>
                <p>
                  Restoration of teeth damaged by cavities with aesthetic materials that blend
                  perfectly with the natural tooth colour.
                </p>
              </div>
            </dental-card>
          </div>
          <div class="services-list-item">
            <dental-card>
              <div class="dental-card-header flex align-items-center justify-content-between">
                <dental-icon-base>
                  <img :src="toothRetainers" alt="" />
                </dental-icon-base>
                <dental-icon-link />
              </div>
              <div class="dental-card-body">
                <h3>Dental Alignment</h3>
                <p>
                  Corrects misaligned teeth and bite issues, improving oral health and enhancing the
                  appearance of your smile.
                </p>
              </div>
            </dental-card>
          </div>
          <div class="services-list-item">
            <dental-card>
              <div class="dental-card-header flex align-items-center justify-content-between">
                <dental-icon-base>
                  <img :src="toothCheckmark" alt="" />
                </dental-icon-base>
                <dental-icon-link />
              </div>
              <div class="dental-card-body">
                <h3>Dental Cleaning</h3>
                <p>
                  Removes plaque and tartar to prevent cavities and gum disease, maintaining a
                  healthy and bright smile.
                </p>
              </div>
            </dental-card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import toothCheckmark from '@/assets/images/tooth-checkmark.png'
import toothStar from '@/assets/images/tooth-star.png'
import toothShield from '@/assets/images/tooth-shield.png'
import toothRetainers from '@/assets/images/tooth-retainers.png'
import { DentalIconArrowPrev, DentalIconArrowNext, DentalIconBase, DentalIconLink } from '@/icons'
import { DentalCard } from '@/components'

const TOTAL_CARDS = 5

const currentIndex = ref(0)
const trackRef = ref(null)
const itemWidth = ref(0)
const cardsPerView = ref(3)

const canPrev = computed(() => currentIndex.value > 0)
const canNext = computed(() => currentIndex.value < TOTAL_CARDS - cardsPerView.value)

const trackTransform = computed(
  () => `translateX(calc(-${currentIndex.value} * (${itemWidth.value}px + var(--grid-gap))))`,
)

const prev = () => {
  if (canPrev.value) currentIndex.value--
}
const next = () => {
  if (canNext.value) currentIndex.value++
}

const updateMeasurements = () => {
  const item = trackRef.value?.querySelector('.services-list-item')
  const wrapper = trackRef.value
  if (!item || !wrapper) return
  itemWidth.value = item.offsetWidth
  const gap = parseInt(getComputedStyle(wrapper).gap) || 24
  cardsPerView.value = Math.round(wrapper.offsetWidth / (itemWidth.value + gap))
  const maxIndex = TOTAL_CARDS - cardsPerView.value
  if (currentIndex.value > maxIndex) currentIndex.value = maxIndex
}

onMounted(() => {
  updateMeasurements()
  window.addEventListener('resize', updateMeasurements)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateMeasurements)
})
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

.services-arrow:hover:not(:disabled) {
  border-color: var(--teal-300);
  color: var(--accent);
  box-shadow: var(--shadow-teal);
  transform: var(--lift-sm);
}

.services-arrow:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.services-track-wrapper {
  overflow: hidden;
  margin-top: var(--space-7);
}

.services-list {
  display: flex;
  gap: var(--grid-gap);
  transition: transform 0.4s ease;
  will-change: transform;
}

.services-list-item {
  flex: 0 0 calc((100% - var(--grid-gap) * 2) / 3.2);
}

.services-list-item:hover {
  cursor: pointer;
}

@media (max-width: 767px) {
  .services-list-item {
    flex: 0 0 calc((100% - var(--grid-gap)) / 1.2);
  }
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
