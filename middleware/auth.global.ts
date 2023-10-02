import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/store/auth'
import { getToken } from '@/api/helper'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { authenticated } = storeToRefs(useAuthStore())

  if (process.client) {
    const access_token = getToken()
    authenticated.value = !!access_token

    if (authenticated.value && (['login', 'registration'].some(path => path === to.name))) {
      return navigateTo('/')
    } else if (!authenticated.value && !['login', 'registration'].some(path => path === to.name)) {
      abortNavigation()
      return navigateTo({ name: 'login' })
    }
  }
})