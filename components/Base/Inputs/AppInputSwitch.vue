<template lang='pug'>
input-switch(:model-value="checked" @input='onChange')
</template>

<script setup lang='ts'>
import InputSwitch from 'primevue/inputswitch'

interface Props {
  checked: boolean
}
defineProps<Props>()

interface Emits {
  (e: 'update:modelValue', event: any): void
}
const emit = defineEmits<Emits>()

const onChange = (value: boolean) => {
  emit('update:modelValue', value)
}
</script>

<style scoped>

</style>