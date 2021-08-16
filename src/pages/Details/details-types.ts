import Constants from './details-constants'

export interface ISummary {
  cdi: number
  gain: number
  profitability: number
  total: number
}

export interface IDetailsReducerState {
  aggregate: ISummary
  summary: Array<ISummary & { accountLabel: string }>
  loading: boolean
  hasError: boolean
  errorMessage: string
}

export interface IDetailsReducerAction {
  payload: any
  type:
    | Constants.FETCH_DETAILS_DATA
    | Constants.FETCH_DETAILS_LOADING
    | Constants.FETCH_DETAILS_ON_ERROR
    | Constants.RESOLVE_DETAILS_ERROR
    | Constants.RESET_DETAILS
}

export interface IDetails extends IDetailsReducerState {
  isAmountVisible: true
  fetchDetailsData: () => void
  resolveError: () => void
  resetDetailsData: () => void
}
