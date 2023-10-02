<template lang='pug'>
.page
  registration-form
</template>

<script setup lang='ts'>
import RegistrationForm from '@/components/Auth/RegistrationForm.vue'

definePageMeta({ layout: 'empty' })
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>