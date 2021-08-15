import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { fetchWealthSummary } from 'src/middlewares/dashboard'
import constants from './dashboard-constants'

const {
  FETCH_DASHBOARD_DATA,
  FETCH_DASHBOARD_ON_ERROR,
  FETCH_DASHBOARD_LOADING,
  RESOLVE_DASHBOARD_ERROR,
  RESET_DASHBOARD,
} = constants

export const fetchDashboardData =
  (id: number): ThunkAction<any, any, any, Action> =>
  dispatch => {
    dispatch({
      type: FETCH_DASHBOARD_LOADING,
    })

    async function fetchData() {
      try {
        const { data: payload, error } = await fetchWealthSummary(id)

        if (error) {
          throw new Error('Cannot Fetch Dashboard Data')
        }

        dispatch({
          type: FETCH_DASHBOARD_DATA,
          payload,
        })
      } catch (error) {
        console.log('error: ', error)

        dispatch({
          type: FETCH_DASHBOARD_ON_ERROR,
        })
      }
    }

    fetchData()
  }

export const resolveError =
  (): ThunkAction<any, any, any, Action> => dispatch => {
    dispatch({
      type: RESOLVE_DASHBOARD_ERROR,
    })
  }

export const resetDashboardData =
  (): ThunkAction<any, any, any, Action> => dispatch => {
    dispatch({
      type: RESET_DASHBOARD,
    })
  }
