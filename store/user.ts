import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'
import api from '@/api'
import { IUser } from '@/interfaces/user'


export const useUserStore = defineStore('user', () => {
  const data = ref<IUser>()

  const getProfile = async () => {
    const res = await api.getProfile()
    data.value = res.data
  }

  return { data, getProfile }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
