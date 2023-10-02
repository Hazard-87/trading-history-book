<template lang='pug'>
.table
  .wrapper(:class='{fullHeight: pagination}')
    app-table(
      :columns='columns'
      :data='data'
      :pagination='pagination'
      :loading='loading'
      scrollable
      @page-change='pageChange'
    )
      template(#header)
        slot(name='header')
  app-pagination(
    v-if='!pagination'
    :page='page'
    :limit='limit'
    :total='total'
    @page-change='pageChange'
  )
</template>

<script setup lang='ts'>

import AppPagination from '@/components/Base/AppPagination.vue'
import AppTable from '@/components/Base/AppTable.vue'
import type { ICol } from '@/interfaces/column'

defineProps<{
  data: any[]
  columns: ICol[]
  limit?: number
  offset?: number
  loading?: boolean
  pagination?: boolean
  scrollable?: boolean
  total?: number
  page?: number
}>()


interface Emits {
  (e: 'pageChange', page: number): void
}

const emit = defineEmits<Emits>()


const pageChange = (p: number) => {
  emit('pageChange', p)
}
</script>

<style scoped>
.table {
  height: 100%;
}

.wrapper {
  height: calc(100% - 45px);
}

.fullHeight {
  height: 100%;
}
</style>