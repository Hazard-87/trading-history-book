<template lang='pug'>
Chart(
  style='width: 100%; height: 100%'
  type="line"
  :data="chartData"
  :options="chartOptions"
)
</template>

<script setup lang='ts'>
import Chart from 'primevue/chart'

interface Props {
  data: ChartData[]
}

const props = defineProps<Props>()

onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})

interface ChartData {
  id: number
  date: string
  count: number
}

const chartData = ref()
const chartOptions = ref()

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  
  return {
    labels: setLabels(props.data),
    datasets: [
      {
        label: 'Депозит',
        fill: false,
        borderColor: documentStyle.getPropertyValue('--blue-700'),
        yAxisID: 'y',
        tension: 0.4,
        data: setData(props.data)
      }
    ]
  }
}

const setLabels = (data: ChartData[]) => {
  return data.map(item => item.date)
}

const setData = (data: ChartData[]) => {
  return data.map(item => item.count)
}

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--text-color')
  const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary')
  const surfaceBorder = documentStyle.getPropertyValue('--surface-border')
  
  return {
    stacked: false,
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        }
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        }
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        ticks: {
          color: textColorSecondary
        },
        grid: {
          drawOnChartArea: false,
          color: surfaceBorder
        }
      }
    }
  }
}
</script>

<style scoped>

</style>