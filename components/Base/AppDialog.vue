<template lang='pug'>
Dialog(
  :visible="modelValue"
  :header="title"
  :style="{ minWidth: '500px' }"
  dismissableMask
  modal
  @update:visible='$emit("update:modelValue")'
)
  slot
</template>

<script setup lang='ts'>
interface Props {
  modelValue: boolean
  title: string
}

defineProps<Props>()

interface Emits {
  (e: 'update:modelValue'): void
}

defineEmits<Emits>()
</script>

<style scoped>

</style>