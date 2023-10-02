<template lang='pug'>
app-dialog(
  :model-value='modelValue'
  title='Добавление сделки'
  @update:modelValue='$emit("update:modelValue")'
)
  order-create-form.mt-1(
    :fetching='fetching'
    @cancel='cancel'
    @save='saveHandler'
  )
</template>

<script setup lang='ts'>
import AppDialog from '@/components/Base/AppDialog.vue'
import AppButton from '@/components/Base/AppButton.vue'
import type { CreateOrderData } from '@/interfaces/order'
import { parseDate } from '@/utils/parseDate'
import OrderCreateForm from '@/components/Forms/OrderCreateForm.vue'

interface Props {
  modelValue: boolean
  fetching?: boolean
  title: string
}

defineProps<Props>()

interface Emits {
  (e: 'update:modelValue'): void
  
  (e: 'onSave', data: any): void
}

const emit = defineEmits<Emits>()

const cancel = () => {
  emit('update:modelValue')
}

const saveHandler = (data: CreateOrderData) => {
  emit('onSave', data)
}
</script>

<style scoped>

</style>