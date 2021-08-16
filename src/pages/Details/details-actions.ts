import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { fetchAggregatedWealth } from 'src/middlewares/details'
import constants from './details-constants'

const {
  FETCH_DETAILS_DATA,
  FETCH_DETAILS_LOADING,
  FETCH_DETAILS_ON_ERROR,
  RESOLVE_DETAILS_ERROR,
  RESET_DETAILS,
} = constants

export const fetchDetailsData =
  (): ThunkAction<any, any, any, Action> => dispatch => {
    dispatch({
      type: FETCH_DETAILS_LOADING,
    })

    async function fetchData() {
      try {
        const { data: payload, error } = await fetchAggregatedWealth()

        if (error) {
          throw new Error('Cannot Fetch Details Data')
        }

        dispatch({
          type: FETCH_DETAILS_DATA,
          payload,
        })
      } catch (error) {
        dispatch({
          type: FETCH_DETAILS_ON_ERROR,
        })
      }
    }

    fetchData()
  }

export const resolveError =
  (): ThunkAction<any, any, any, Action> => dispatch => {
    dispatch({
      type: RESOLVE_DETAILS_ERROR,
    })
  }

export const resetDetailsData =
  (): ThunkAction<any, any, any, Action> => dispatch => {
    dispatch({
      type: RESET_DETAILS,
    })
  }
