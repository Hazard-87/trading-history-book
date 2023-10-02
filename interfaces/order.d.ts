import { IArgs, IGet } from '@/interfaces/rest'

export interface GetOrderData extends IGet {
  data: IOrder
}

export interface GetOrdersData extends IGet {
  data: IOrder[]
}

export interface GetOrdersArgs extends IArgs {
  id?: number | number[]
  status?: 'OPENED' | 'CLOSED'
}

export interface IOrder {
  id: number
  ticker: string
  direction: 'long' | 'short'
  takeProfit: number
  stopLoss: number
  lot: number
  openPrice: number
  closePrice: number
  openDate: Date
  closeDate: Date
  commission: number
  profit: number
  images: any[]
}

export interface CreateOrderData {
  ticker: string
  direction: 'long' | 'short'
  takeProfit: number
  stopLoss: number
  lot: number
  openPrice: number
  openDate: string
  commission: number
  closePrice?: number
  closeDate?: string
  images?: number[]
}
