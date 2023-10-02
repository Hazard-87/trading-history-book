import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'
import api from '@/api'
import { AuthData, GetAuthData, RegistrationData } from '@/interfaces/auth'
import { removeToken, saveToken } from '@/api/helper'


export const useAuthStore = defineStore('auth', () => {
  const authenticated = ref<boolean>(false)
  const isRetry = ref<boolean>(false)

  const login = async (data: AuthData): Promise<GetAuthData> => {
    const res = await api.login(data)
    saveToken(res.data.access_token)
    authenticated.value = true
    return res
  }

  const registration = async (data: RegistrationData): Promise<GetAuthData> => {
    const res = await api.registration(data)
    saveToken(res.data.access_token)
    authenticated.value = true
    return res
  }

  const refresh = async (): Promise<GetAuthData> => {
    const res = await api.refresh()
    saveToken(res.data.access_token)
    authenticated.value = true
    return res
  }

  const logout = async () => {
    removeToken()
    authenticated.value = false
    navigateTo('/login')
  }

  return { authenticated, isRetry, login, registration, refresh, logout }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
