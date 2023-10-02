<template lang='pug'>
.input(style="width: 100%")
  span.p-float-label
    input-number.p-inputtext-sm(
      id='input'
      style="width: 100%"
      :model-value='modelValue'
      :minFractionDigits="minFractionDigits"
      :class='{"p-invalid": error}'
      size='small'
      @input='onChange'
      @blur='emit("blur")'
    )
    label(for='input') {{label}}
  small(class='p-error') {{ error }}
</template>

<script setup lang='ts'>
interface Props {
  modelValue: number
  label?: string
  error?: string
  isFloat?: boolean
}

const props = defineProps<Props>()

interface Emits {
  (e: 'update:modelValue', event: any): void
  
  (e: 'blur'): void
}

const emit = defineEmits<Emits>()

const minFractionDigits = computed(() => {
  return props.isFloat ? 2 : 0
})

const onChange = (e: any) => {
  emit("update:modelValue", e.value)
}
</script>

<style scoped>

</style>