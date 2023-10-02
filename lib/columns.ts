import { ICol } from '@/interfaces/column'

export const columns: Column = {
  order: [
    {
      header: 'Инструмент',
      field: 'ticker',
      width: '100px',
      frozen: true
    },
    {
      header: 'Направление',
      field: 'direction',
      width: '100px'
    },
    {
      header: 'Дата открытия',
      field: 'openDate',
      width: '120px',
      render: 'date'
    },
    {
      header: 'Цена открытия',
      field: 'openPrice',
      width: '100px'
    },
    {
      header: 'Тейк профит',
      field: 'takeProfit',
      width: '100px'
    },
    {
      header: 'Стоп лосс',
      field: 'stopLoss',
      width: '100px'
    },
    {
      header: 'Текущий стоп лосс',
      field: 'currentStopLoss',
      width: '110px'
    },
    {
      header: 'Объем',
      field: 'lot',
      width: '80px'
    },
    {
      header: 'Комиссия',
      field: 'commission',
      width: '80px'
    }
  ],
  history: [
    {
      header: 'Инструмент',
      field: 'ticker',
      width: '100px',
      frozen: true
    },
    {
      header: 'Направление',
      field: 'direction',
      width: '100px'
    },
    {
      header: 'Дата открытия',
      field: 'openDate',
      width: '250px',
      render: 'date'
    },
    {
      header: 'Цена открытия',
      field: 'openPrice',
      width: '80px'
    },
    {
      header: 'Тейк профит',
      field: 'takeProfit',
      width: '80px'
    },
    {
      header: 'Стоп лосс',
      field: 'stopLoss',
      width: '80px'
    },
    {
      header: 'Объем',
      field: 'lot',
      width: '70px'
    },
    {
      header: 'Дата закрытия',
      field: 'closeDate',
      width: '250px',
      render: 'date'
    },
    {
      header: 'Цена закрытия',
      field: 'closePrice',
      width: '80px'
    },
    {
      header: 'Комиссия',
      field: 'commission',
      width: '100px'
    },
    {
      header: 'Прибыль/ убыток',
      field: 'profit',
      width: '100px'
    }
  ],
}

interface Column {
  [key: string]: ICol[]
}

// direction: 'long' | 'short'
// takeProfit: number
// stopLoss: number
// lot: number
// buyPrice: number
// sellPrice: number
// buyDate: Date
// sellDate: Date
// comission: number