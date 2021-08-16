export interface ISummaryCard {
  cdi: number
  gain: number
  profitability: number
  total: number
  loading: boolean
  isAmountVisible: boolean
}

export interface IContainer {
  loading?: 'true' | 'false'
}
