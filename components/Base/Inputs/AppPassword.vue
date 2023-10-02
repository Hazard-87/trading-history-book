<template lang='pug'>
.input(style="width: 100%")
  span.p-float-label
    Password(
      id='password'
      style="width: 100%"
      :model-value='modelValue'
      :toggleMask='toggleMask'
      :feedback="false"
      size='small'
      :class='{"p-invalid": error}'
      @change='(e) => emit("update:modelValue", e.currentTarget.value)'
      @blur='emit("blur")'
    )
    label(for='password') Пароль
  small(class='p-error') {{ error }}
</template>

<script setup lang='ts'>
interface Props {
  modelValue?: string
  toggleMask?: boolean
  error?: string
}

const props = defineProps<Props>()

interface Emits {
  (e: 'update:modelValue', event: any): void
  (e: 'blur'): void
}

const emit = defineEmits<Emits>()
</script>

<style scoped>

</style>