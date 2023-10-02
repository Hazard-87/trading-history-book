<template lang="pug">
.layout
  the-navbar
  .content
    slot
</template>

<script setup lang="ts">
import TheNavbar from '@/components/Navbar/TheNavbar.vue'
</script>

<style lang='scss' scoped>
.layout {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
}

.content {
  width: calc(100% - 12.5rem);
  height: 100%;
  padding: 0.5rem;
  overflow: auto;
}
</style>