import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import constants from './header-constants'

const { RESET_HEADER, HEADER_SET_ACCOUNT_ID, HEADER_SET_AMOUNT_VISIBILITY } =
  constants

export const setAccountId =
  (id: number): ThunkAction<any, any, any, Action> =>
  dispatch => {
    dispatch({
      type: HEADER_SET_ACCOUNT_ID,
      payload: {
        id,
      },
    })
  }

export const setAmountVisibility =
  (visibility: boolean): ThunkAction<any, any, any, Action> =>
  dispatch => {
    dispatch({
      type: HEADER_SET_AMOUNT_VISIBILITY,
      payload: {
        isAmountVisible: visibility,
      },
    })
  }

export const resetHeaderState =
  (): ThunkAction<any, any, any, Action> => dispatch => {
    dispatch({
      type: RESET_HEADER,
    })
  }
