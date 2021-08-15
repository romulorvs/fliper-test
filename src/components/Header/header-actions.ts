import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import constants from './header-constants'

const { RESET_HEADER, HEADER_SET_ACCOUNT_ID } = constants

export const setAccountId =
  (id: number): ThunkAction<any, any, any, Action> =>
  dispatch => {
    console.log('SET_ACCOUNT_ID running')

    dispatch({
      type: HEADER_SET_ACCOUNT_ID,
      payload: {
        id,
      },
    })
  }

export const resetHeaderState =
  (): ThunkAction<any, any, any, Action> => dispatch => {
    dispatch({
      type: RESET_HEADER,
    })
  }
