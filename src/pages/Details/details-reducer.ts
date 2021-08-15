import constants from './details-constants'
import { IDetailsReducerAction, IDetailsReducerState } from './details-types'

const {
  FETCH_DETAILS_DATA,
  FETCH_DETAILS_LOADING,
  FETCH_DETAILS_ON_ERROR,
  RESOLVE_DETAILS_ERROR,
  RESET_DETAILS,
} = constants

const INITIAL_STATE: IDetailsReducerState = {
  loading: false,
  hasError: false,
  errorMessage: '',
}

function detailsReducer(state = INITIAL_STATE, action: IDetailsReducerAction) {
  const commonState = {
    ...state,
    loading: false,
    hasError: false,
  }

  switch (action.type) {
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
        ...action.payload,
      }

    case RESET_DETAILS:
      return INITIAL_STATE

    default:
      return state
  }
}

export default detailsReducer
