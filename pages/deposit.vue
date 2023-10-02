<template lang='pug'>
app-chart(
  :data='deposits'
)
</template>

<script setup lang='ts'>
import AppChart from '@/components/Base/AppChart.vue'
import api from '@/api'
import { parseDate } from '@/utils/parseDate'

const { data } = await useAsyncData('deposits', () => api.getDeposits({ limit: 'all' }))

const deposits = computed(() => {
  return data.value?.data.map(item => {
    return {
      ...item,
      date: parseDate(item.date)
    }
  }) || []
})
</script>

<style scoped>

</style>