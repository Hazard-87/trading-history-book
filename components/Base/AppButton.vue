<template lang='pug'>
Button(:label='label' :icon='icon' size='small' :loading='loading' @click='emit("click")')
</template>

<script setup lang='ts'>
interface Props {
  label: string
  icon?: string
  loading?: boolean
}
defineProps<Props>()

interface Emits {
  (e: 'click'): void
}
const emit = defineEmits<Emits>()
</script>

<style scoped>

</style>