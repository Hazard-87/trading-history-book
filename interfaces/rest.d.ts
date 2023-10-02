export interface IArgs {
  limit?: number | string
  offset?: number
  order?: 'ASC' | 'DESC'
}

export interface IGet {
  total: number
}
