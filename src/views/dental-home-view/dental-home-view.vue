<template>
  <section class="hero">
    <img :src="img" alt="Dentist app welcome image woman smiling" />
    <div class="hero-overlay"></div>
    <div class="container">
      <div class="flow test">
        <h1 class="text-hero">Welcome to our Dental Clinic</h1>
        <p class="text-body-lg">
          We provide top-notch dental care for you and your family. Book an appointment today!
        </p>
        <button class="button button-primary">Book Now</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import img from '@/assets/images/2.png'
</script>

<style scoped>
.hero {
  min-height: 600px;
}
</style>
