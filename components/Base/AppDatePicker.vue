<template lang='pug'>
.calendar(style='width: 100%')
  span(class="p-float-label")
    Calendar(
      :model-value='modelValue'
      inputId="calendar"
      :class="{'p-invalid': error}"
      style='width: 100%'
      dateFormat="dd.mm.yy"
      hourFormat="24"
      hideOnDateTimeSelect
      show-icon
      showTime
      showSeconds
      :pt='pt'
      @date-select='onSelect'
    )
    label(for="calendar") {{label}}
  small(v-if='error' class="p-error" id="date-error") {{ error || '&nbsp;' }}
</template>

<script setup lang='ts'>
import Calendar from 'primevue/calendar'

interface Props {
  modelValue: Date
  label?: string
  error?: string
}

defineProps<Props>()

interface Emits {
  (e: 'update:modelValue', date: Date): void
}

const emit = defineEmits<Emits>()

const onSelect = (date: Date) => {
  emit('update:modelValue', date)
}

const pt = computed(() => {
  return {
    input: {
      style: { padding: '5px' }
    }
  }
})
</script>

<style scoped>
</style>