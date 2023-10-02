<template lang="pug">
span
  span(v-if="col.render === 'date'") {{getDate(data[col.field])}}
  span(v-else) {{data[col.field]}}
</template>

<script setup lang="ts">
import { parseDate } from '@/utils/parseDate'
import type { ICol } from '@/interfaces/column'

interface Props {
  data: any
  col: ICol
}

defineProps<Props>()

const getDate = (date: Date): string => {
  return parseDate(date, 'DD.MM.YYYY HH:mm:ss') || '-'
}
</script>

<style scoped></style>
