import jwt_decode from 'jwt-decode'
import { Decoded } from '@/interfaces/token'

export const saveToken = (token: string) => {
  localStorage.setItem('access_token', token)
}

export const removeToken = () => {
  localStorage.removeItem('access_token')
}

export const getToken = (): string | null => {
  return localStorage.getItem('access_token') || null
}

export const getTokenDecoded = (token: string): Decoded => {
  return jwt_decode(token)
}

