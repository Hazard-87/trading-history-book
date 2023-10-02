<template lang="pug">
Paginator(
  v-model:first="first"
  :rows="limit"
  :totalRecords="total"
  :pt="pt"
  @page="pageChange"
)
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { PageState } from 'primevue/paginator'

interface Props {
  page?: number
  limit?: number
  offset?: number
  total?: number
}

const { page = 1, limit = 20, total = 0, offset = 0 } = defineProps<Props>()
const first = ref(offset)

interface Emits {
  (e: 'pageChange', page: number, offset: number): void
}

const emit = defineEmits<Emits>()

const style = { minWidth: '30px', height: '30px', borderRadius: '4px' }

const pt = computed(() => {
  return {
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
})

const pageChange = (e: PageState) => {
  emit('pageChange', e.page + 1, e.first)
}
</script>

<style scoped></style>
