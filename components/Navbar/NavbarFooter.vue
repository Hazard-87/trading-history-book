<template lang='pug'>
button(
  class="w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround"
  @click='logout'
)
  i(class="pi pi-sign-out")
  span(class="ml-2") Выйти
</template>

<script setup lang='ts'>
interface Emits {
  (e: 'onLogout'): void
}
const emit = defineEmits<Emits>()

const logout = () => {
  emit('onLogout')
}
</script>

<style scoped>

</style>