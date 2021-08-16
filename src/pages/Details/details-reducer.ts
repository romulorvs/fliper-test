import { avaiableAccounts } from 'src/components/Header/header-data'
import constants from './details-constants'
import {
  IDetailsReducerAction,
  IDetailsReducerState,
  ISummary,
} from './details-types'

const {
  FETCH_DETAILS_DATA,
  FETCH_DETAILS_LOADING,
  FETCH_DETAILS_ON_ERROR,
  RESOLVE_DETAILS_ERROR,
  RESET_DETAILS,
} = constants

const INITIAL_STATE: IDetailsReducerState = {
  aggregate: {
    cdi: 0,
    gain: 0,
    profitability: 0,
    total: 0,
  },
  summary: [
    {
      accountLabel: 'A',
      cdi: 0,
      gain: 0,
      profitability: 0,
      total: 0,
    },
    {
      accountLabel: 'B',
      cdi: 0,
      gain: 0,
      profitability: 0,
      total: 0,
    },
  ],
  loading: false,
  hasError: false,
  errorMessage: '',
}

function detailsReducer(
  state = INITIAL_STATE,
  { type, payload }: IDetailsReducerAction
) {
  const commonState = {
    ...state,
    loading: false,
    hasError: false,
  }

  switch (type) {
    case FETCH_DETAILS_LOADING:
      return {
        ...commonState,
        loading: true,
      }

    case FETCH_DETAILS_ON_ERROR:
      return {
        ...commonState,
        hasError: true,
        errorMessage:
          'Não foi possível buscar os seus dados. Tente novamente mais tarde',
      }

    case RESOLVE_DETAILS_ERROR:
      return commonState

    case FETCH_DETAILS_DATA:
      return {
        ...commonState,
        aggregate: payload.wealthSummary_aggregate.aggregate.sum,
        summary: payload.wealthSummary.map((data: ISummary, index: number) => ({
          accountLabel: avaiableAccounts[2 - index].label,
          ...data,
        })),
      }

    case RESET_DETAILS:
      return INITIAL_STATE

    default:
      return state
  }
}

export default detailsReducer
