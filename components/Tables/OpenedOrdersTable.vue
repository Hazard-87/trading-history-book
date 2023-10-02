<template lang='pug'>
create-order-dialog(
  v-model='visible'
  :fetching='fetching'
  @on-save='handleSubmit'
)
pagination-table(
  :columns='columns.order'
  :data='orders'
  :pagination='false'
  :loading='pending'
  :page='page'
  :limit='limit'
  :total='data.total'
  @page-change='pageChange'
  scrollable
)
  template(#header)
    .flex.justify-content-between.align-items-center.p-1
      app-button(icon='pi pi-plus' label='Добавить' text @click='visible = true')
      .p-inputgroup(style='width: 300px')
        app-input-text(placeholder="Поиск")
        app-button(
          icon="pi pi-search"
          severity='primary'
        )
</template>

<script setup lang='ts'>
import api from '@/api'
import { columns } from '@/lib/columns'
import AppButton from '@/components/Base/AppButton.vue'
import AppInputText from '@/components/Base/Inputs/AppInputText.vue'
import CreateOrderDialog from '@/components/Dialogs/CreateOrderDialog.vue'
import PaginationTable from '@/components/Tables/PaginationTable.vue'
import type { CreateOrderData, IOrder } from '@/interfaces/order'

const visible = ref<boolean>(false)
const fetching = ref(false)
const page = ref(1)
const limit = 17

const offset = computed<number>(() => {
  return (page.value - 1) * limit
})

const { data, pending, refresh } = await useAsyncData('orders', () => api.getOrders({
  limit,
  offset: offset.value,
  status: 'OPENED',
  order: 'DESC'
}), {
  watch: [offset]
})

const orders = computed(() => {
  return data.value?.data.map(order => {
    return {
      ...order,
      profit: getProfit(order)
    }
  }) || []
})

const getProfit = ({ direction, openPrice, closePrice, lot }: IOrder): number | '-' => {
  if (!closePrice) return '-'
  return direction === 'long' ? (closePrice - openPrice) * lot : (openPrice - closePrice) * lot
}

const pageChange = (p: number) => {
  page.value = p
}

const handleSubmit = async (data: CreateOrderData) => {
  try {
    fetching.value = true
    await api.createOrder(data)
    visible.value = false
    await refresh()
  } finally {
    fetching.value = false
  }
}
</script>

<style scoped>
</style>