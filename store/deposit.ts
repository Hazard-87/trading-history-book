import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'
import api from '@/api'
import { GetDepositData, IDeposit } from '@/interfaces/deposit'

export const useDepositStore = defineStore('deposit', () => {
  const data = ref<IDeposit>()

  const getCurrentDeposit = async (): Promise<GetDepositData> => {
    const res = await api.getCurrentDeposit()
    data.value = res.data
    return res
  }

  return { data, getCurrentDeposit }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDepositStore, import.meta.hot))
}
