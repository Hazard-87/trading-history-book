<template lang='pug'>
.input(style="width: 100%")
  span.p-float-label
    input-text.p-inputtext-sm(
      id='input'
      style="width: 100%"
      :model-value='modelValue'
      :class='{"p-invalid": error}'
      :placeholder='placeholder'
      size='small'
      @change='(e) => emit("update:modelValue", e.currentTarget.value)'
      @blur='emit("blur")'
    )
    label(for='input') {{label}}
  small(class='p-error') {{ error }}
</template>

<script setup lang='ts'>
interface Props {
  modelValue?: string
  label?: string
  placeholder?: string
  error?: string
}

defineProps<Props>()

interface Emits {
  (e: 'update:modelValue', event: any): void
  
  (e: 'blur'): void
}

const emit = defineEmits<Emits>()
</script>

<style scoped>

</style>