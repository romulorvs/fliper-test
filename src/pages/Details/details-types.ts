import Constants from './details-constants'

export interface IDetailsReducerState {
  [key: string]: any
}

export interface IDetailsReducerAction {
  type:
    | Constants.FETCH_DETAILS_DATA
    | Constants.FETCH_DETAILS_LOADING
    | Constants.FETCH_DETAILS_ON_ERROR
    | Constants.RESOLVE_DETAILS_ERROR
    | Constants.RESET_DETAILS
  payload: any
}
