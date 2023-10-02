<template lang='pug'>
select-button(
  :model-value="modelValue"
  :options="options"
  optionLabel="name"
  @change='onChange'
)
</template>

<script setup lang='ts'>
import SelectButton from 'primevue/selectbutton'

interface Option {
  name: string
  value: string | number
}

interface Props {
  modelValue: string
  options: Option[]
}

defineProps<Props>()

interface Emits {
  (e: 'update:modelValue', value: string): void
}

const emit = defineEmits<Emits>()

const onChange = (event: any) => {
  emit('update:modelValue', event.value)
}
</script>

<style scoped>

</style>