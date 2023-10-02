<template lang='pug'>
pagination-table(
  :columns='columns.history'
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
    .flex.justify-content-end.align-items-center.p-1
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
import PaginationTable from '@/components/Tables/PaginationTable.vue'

const page = ref(1)
const limit = 16

const offset = computed<number>(() => {
  return (page.value - 1) * limit
})

const { data, pending } = await useAsyncData('orders', () => api.getOrders({
  limit,
  offset: offset.value,
  status: 'CLOSED',
  order: 'DESC'
}), {
  watch: [offset]
})

const orders = computed(() => {
  return data.value?.data || []
})

const pageChange = (p: number) => {
  page.value = p
}
</script>

<style scoped>

</style>