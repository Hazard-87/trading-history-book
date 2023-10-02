import { $api } from '@/api/http/common'
import { CreateDepositData, GetDepositData, GetDepositsArgs, GetDepositsData } from '@/interfaces/deposit'

export const DepositService = {
  async getDeposits(args?: GetDepositsArgs): Promise<GetDepositsData> {
    const url = 'deposits'
    return await $api.get(url, args)
  },

  async getCurrentDeposit(): Promise<GetDepositData> {
    const url = 'deposits/current'
    return await $api.get(url)
  },

  async updateDeposit(data: CreateDepositData): Promise<GetDepositData> {
    const url = 'deposits'
    return await $api.post(url, data)
  }
}
