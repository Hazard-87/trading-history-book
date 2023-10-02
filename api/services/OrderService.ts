import { $api } from '@/api/http/common'
import { CreateOrderData, GetOrderData, GetOrdersArgs, GetOrdersData } from '@/interfaces/order'

export const OrderService = {
  async getOrders(args?: GetOrdersArgs): Promise<GetOrdersData> {
    const url = 'orders'
    return await $api.get(url, args)
  },

  async createOrder(data: CreateOrderData): Promise<GetOrderData> {
    const url = 'orders'
    return await $api.post(url, data)
  }
}
