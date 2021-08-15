import constants from './dashboard-constants'
import {
  IDashboardReducerAction,
  IDashboardReducerState,
} from './dashboard-types'

const {
  FETCH_DASHBOARD_DATA,
  FETCH_DASHBOARD_LOADING,
  FETCH_DASHBOARD_ON_ERROR,
  RESOLVE_DASHBOARD_ERROR,
  RESET_DASHBOARD,
} = constants

const INITIAL_STATE: IDashboardReducerState = {
  cdi: 0,
  gain: 0,
  profitability: 0,
  total: 0,
  loading: true,
  hasError: false,
  errorMessage: '',
}

function dashboardReducer(
  state = INITIAL_STATE,
  action: IDashboardReducerAction
) {
  const commonState = {
    ...state,
    loading: false,
    hasError: false,
  }

  switch (action.type) {
    case FETCH_DASHBOARD_LOADING:
      return {
        ...commonState,
        loading: true,
      }

    case FETCH_DASHBOARD_ON_ERROR:
      return {
        ...commonState,
        hasError: true,
        errorMessage:
          'Não foi possível buscar os seus dados. Tente novamente mais tarde',
      }

    case RESOLVE_DASHBOARD_ERROR:
      return commonState

    case FETCH_DASHBOARD_DATA:
      console.log('action.payload: ', action.payload.wealthSummary_by_pk)

      return {
        ...commonState,
        ...action.payload.wealthSummary_by_pk,
      }

    case RESET_DASHBOARD:
      return INITIAL_STATE

    default:
      return state
  }
}

export default dashboardReducer
