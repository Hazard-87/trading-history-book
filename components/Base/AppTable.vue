<template lang='pug'>
data-table.p-datatable-sm.table(
  :value="data"
  :paginator="pagination"
  :rows="limit"
  :first="offset"
  :scrollable="scrollable"
  :row-style="() => rowStyle"
  :loading="loading"
  scroll-height="flex"
  scroll-direction="both"
  show-gridlines
  :pt="pt"
  @row-click="onClick"
  @page="pageChange"
)
  template(#header)
    slot(name='header')
  template(#empty)
    .flex.justify-content-center Нет данных
  template(#loadingicon)
    .loading
      table-loading
  Column(
    v-for="col in columns"
    :key="col.field"
    :style="getStyle(col)"
    :frozen="col.frozen"
    :header="col.header"
    :field="col.field"
  )
    template(#body="slotProps")
      column-text(
        :data="slotProps.data"
        :col="col"
      )
</template>

<script setup lang='ts'>
import { computed, toRefs } from 'vue'
import ColumnText from '@/components/ColumnText.vue'
import TableLoading from '@/components/Base/TableLoading.vue'
import type { ICol } from '@/interfaces/column'
import type { DataTableRowDoubleClickEvent } from 'primevue/datatable'
import type { PageState } from 'primevue/paginator'

const props = defineProps<{
  data: any[]
  columns: ICol[]
  limit?: number
  offset?: number
  loading?: boolean
  pagination?: boolean
  scrollable?: boolean
}>()
const {
  limit = 10,
  offset = 0,
  pagination = true,
  scrollable = true
} = toRefs(props)

const emit = defineEmits<{
  (e: 'onClick', data: any): void
  (e: 'pageChange', page: number, offset: number): void
}>()

const onClick = (e: DataTableRowDoubleClickEvent) => {
  emit('onClick', e.data)
}

const getStyle = (col: ICol): object => {
  return {
    flexGrow: 1,
    width: col.width,
    maxWidth: col.width,
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}

const rowStyle = computed(() => {
  return { cursor: 'pointer' }
})

const style = { minWidth: '30px', height: '30px', borderRadius: '4px' }
const loadingOverlayStyle = { backgroundColor: 'var(--surface-hover)' }

const pt = computed(() => {
  return pagination
    ? {
      header: {
        style: { padding: 0 }
      },
      loadingOverlay: {
        style: loadingOverlayStyle
      },
      paginator: {
        pageButton: () => ({
          style
        }),
        firstPageButton: () => ({
          style
        }),
        previousPageButton: () => ({
          style
        }),
        nextPageButton: () => ({
          style
        }),
        lastPageButton: () => ({
          style
        })
      }
    }
    : {
      loadingOverlay: {
        style: loadingOverlayStyle
      },
      header: {
        style: { padding: 0 }
      }
    }
})

const pageChange = (e: PageState) => {
  emit('pageChange', e.page + 1, e.first)
}
</script>

<style lang='scss' scoped>
.table {
  font-size: 12px;
  height: 100%;
}

.title {
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
    color: #4983fb;
  }
}

.loading {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
