import Constants from './dashboard-constants'

export interface IDashboardReducerState {
  cdi: number
  gain: number
  profitability: number
  total: number
  loading: boolean
  hasError: boolean
  errorMessage: string
}

export interface IDashboardReducerAction {
  payload: {
    wealthSummary_by_pk: {
      cdi: number
      gain: number
      profitability: number
      total: number
    }
  }
  type:
    | Constants.FETCH_DASHBOARD_DATA
    | Constants.FETCH_DASHBOARD_ON_ERROR
    | Constants.FETCH_DASHBOARD_LOADING
    | Constants.RESOLVE_DASHBOARD_ERROR
    | Constants.RESET_DASHBOARD
}

export interface IDashboard extends IDashboardReducerState {
  accountId: number
  accountLabel?: string
  fetchDashboardData: (id: number) => void
  resolveError: () => void
  resetDashboardData: () => void
}
