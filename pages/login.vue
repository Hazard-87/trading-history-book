<template lang='pug'>
.page
  login-form
</template>

<script setup lang='ts'>
import LoginForm from '@/components/Auth/LoginForm.vue'

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