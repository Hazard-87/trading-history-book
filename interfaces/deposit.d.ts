import { IArgs, IGet } from '@/interfaces/rest'

export interface GetDepositData extends IGet {
  data: IDeposit
}

export interface GetDepositsData extends IGet {
  data: IDeposit[]
}

export interface GetDepositsArgs extends IArgs {
  id?: number | number[]
}

export interface CreateDepositData extends IArgs {
  count: number
  date: Date
}

export interface IDeposit extends CreateDepositData{
  id: number
}