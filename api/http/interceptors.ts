import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { getToken, getTokenDecoded, saveToken } from '@/api/helper'
import { useAuthStore } from '@/store/auth'
// import { useAuthStore } from '@/store/auth'

// const authStore = useAuthStore()
export const env = import.meta.env.NODE_ENV
export const baseURL = import.meta.env.VITE_APP_BASE_URL

const config = {
  baseURL,
  withCredentials: true
}

export const instance: AxiosInstance = axios.create({
  ...config,
  paramsSerializer(params) {
    const searchParams = new URLSearchParams()
    for (const key of Object.keys(params)) {
      const param = params[key]
      if (Array.isArray(param)) {
        for (const p of param) {
          searchParams.append(key, p)
        }
      } else {
        searchParams.append(key, param)
      }
    }
    return searchParams.toString()
  }
})

instance.interceptors.request.use(async (options: any) => {
  if (
    ['auth/login', 'auth/registration', 'auth/checkToken'].some((url) =>
      options.url?.includes(url)
    )
  ) {
    return options
  }
  const token = getToken()
  if (token) {
    const decoded = getTokenDecoded(token)
    if (Date.now() >= (decoded.exp - 10) * 1000) {
      const newToken = await refresh()
      return {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${newToken}`
        }
      }
    } else if (options.headers) {
      return {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token}`
        }
      }
    }
  }
  return options
})

instance.interceptors.response.use(
  (config: AxiosResponse) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config
    if (
      error.response?.status === 401
    ) {
      useAuthStore().logout()
    }
    throw error
  }
)

const refresh = async () => {
  try {
    const res = await axios.get(
      `${baseURL}auth/refresh`,
      {
        withCredentials: true
      }
    )
    if (res.status === 200) {
      saveToken(res.data.access_token)
    }
    return res.data.access_token
  } catch (e) {
    useAuthStore().logout()
    throw e
  }
}
