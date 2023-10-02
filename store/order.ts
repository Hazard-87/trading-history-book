import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'
import api from '@/api'
import type { GetOrdersArgs, GetOrdersData, IOrder } from '@/interfaces/order'

export const useOrderStore = defineStore('order', () => {
  const data = ref<IOrder[]>([])
  const total = ref<number>(0)

  const getOrders = async (args: GetOrdersArgs): Promise<GetOrdersData> => {
    const res = await api.getOrders(args)
    data.value = res.data
    total.value = res.total
    return res
  }

  return { data, total, getOrders }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useOrderStore, import.meta.hot))
}
