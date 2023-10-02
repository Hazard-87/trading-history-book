<template lang='pug'>
Form.flex.flex-column.gap-3(@submit='onSubmit')
  .line
    app-input-text(style='width: 50%' v-bind='ticker' label='Инструмент*' :error='errors.ticker')
    .select.flex.justify-content-end(style='width: 50%')
      app-select-button(v-model='direction' :options='options')
  .line
    app-input-number(v-bind='takeProfit' is-float label='Тейк профит*' :error='errors.takeProfit')
    app-input-number(v-bind='stopLoss' is-float label='Стоп лосс*' :error='errors.stopLoss')
  .line
    app-input-number(v-bind='openPrice' is-float label='Цена открытия*' :error='errors.openPrice')
    app-input-number(v-bind='closePrice' is-float label='Цена закрытия')
  .line
    app-date-picker(v-bind='openDate' label='Дата открытия*' :error='errors.openDate')
    app-date-picker(v-bind='closeDate' label='Дата закрытия')
  .line
    app-input-number(v-bind='lot' label='Объем*' :error='errors.lot')
    app-input-number(v-bind='commission' is-float label='Комиссия*' :error='errors.commission')
  .flex.justify-content-end.gap-3
    app-button(
      type='submit'
      label='Сохранить'
      text
      rounded
      icon='pi pi-check'
      :loading='fetching'
    )
    app-button(
      label='Отмена'
      icon='pi pi-times'
      text
      rounded
      severity='danger'
      :disabled='fetching'
      @click='cancel'
    )
</template>

<script setup lang='ts'>
import * as yup from 'yup'
import { Form, useForm } from 'vee-validate'
import { parseDate } from '@/utils/parseDate'
import AppButton from '@/components/Base/AppButton.vue'
import AppInputText from '@/components/Base/Inputs/AppInputText.vue'
import AppInputNumber from '@/components/Base/Inputs/AppInputNumber.vue'
import AppDatePicker from '@/components/Base/AppDatePicker.vue'
import AppSelectButton from '@/components/Base/AppSelectButton.vue'
import type { CreateOrderData } from '@/interfaces/order'

interface Props {
  fetching: boolean
}

defineProps<Props>()

interface Emits {
  (e: 'cancel'): void
  
  (e: 'save', data: CreateOrderData): void
}

const emit = defineEmits<Emits>()

const options = [
  { name: 'Покупка', value: 'long' },
  { name: 'Продажа', value: 'short' }
]
const direction = ref(options[0])

const { handleSubmit, errors, defineComponentBinds } = useForm({
  validationSchema: yup.object({
    ticker: yup.string()
      .required('Это обязательное поле!'),
    takeProfit: yup.number()
      .required('Это обязательное поле!'),
    stopLoss: yup.number()
      .required('Это обязательное поле!'),
    lot: yup.number()
      .required('Это обязательное поле!'),
    openPrice: yup.number()
      .required('Это обязательное поле!'),
    commission: yup.number()
      .required('Это обязательное поле!'),
    openDate: yup.string()
      .required('Это обязательное поле!'),
    closePrice: yup.number(),
    closeDate: yup.string()
  })
})

const validateConfig = {
  validateOnBlur: false
}

const ticker = defineComponentBinds('ticker', validateConfig)
const takeProfit = defineComponentBinds('takeProfit', validateConfig)
const stopLoss = defineComponentBinds('stopLoss', validateConfig)
const lot = defineComponentBinds('lot', validateConfig)
const openPrice = defineComponentBinds('openPrice', validateConfig)
const commission = defineComponentBinds('commission', validateConfig)
const openDate = defineComponentBinds('openDate', validateConfig)
const closePrice = defineComponentBinds('closePrice')
const closeDate = defineComponentBinds('closeDate')

const onSubmit = handleSubmit(async (values) => {
  const data = {
    ...values,
    openDate: parseDate(values.openDate, 'YYYY-MM-DD HH:mm:ss'),
    closeDate: parseDate(values.closeDate, 'YYYY-MM-DD HH:mm:ss'),
    direction: direction.value.value
  } as CreateOrderData
  if (!data.closeDate) {
    delete data.closeDate
  }
  emit('save', data)
})

const cancel = () => {
  emit('cancel')
}
</script>

<style scoped>
.line {
  display: flex;
  gap: 1rem;
}
</style>