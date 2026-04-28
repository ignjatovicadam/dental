<template>
  <div class="test">
    <dental-header></dental-header>
    <div class="fl">
      <router-view></router-view>
    </div>
    <dental-footer></dental-footer>
  </div>
</template>

<script setup>
import { DentalHeader, DentalFooter } from '@/components'
</script>

<style scoped>
.test {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.fl {
  flex: 1;
}

.n {
  display: none;
}
</style>
