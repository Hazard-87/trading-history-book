import { $api } from '@/api/http/common'
import { AuthData, GetAuthData, GetProfileData, RegistrationData } from '@/interfaces/auth'

export const AuthService = {
  async login(data: AuthData): Promise<GetAuthData> {
    const url = 'auth/login'
    return await $api.post(url, data)
  },

  async registration(data: RegistrationData): Promise<GetAuthData> {
    const url = 'auth/registration'
    return await $api.post(url, data)
  },

  async refresh(): Promise<GetAuthData> {
    const url = 'auth/refresh'
    return await $api.get(url)
  },

  async getProfile(): Promise<GetProfileData> {
    const url = 'auth/profile'
    return await $api.get(url)
  }
}
