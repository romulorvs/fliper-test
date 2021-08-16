import constants from './header-constants'
import { IHeaderReducerAction, IHeaderReducerState } from './header-types'
import { avaiableAccounts } from './header-data'

const { HEADER_SET_ACCOUNT_ID, HEADER_SET_AMOUNT_VISIBILITY, RESET_HEADER } =
  constants

export const INITIAL_STATE: IHeaderReducerState = {
  accounts: Object.values(avaiableAccounts),
  accountId: avaiableAccounts[1].id,
  accountLabel: avaiableAccounts[1].label,
  isAmountVisible: true,
}

function dashboardReducer(
  state = INITIAL_STATE,
  { type, payload }: IHeaderReducerAction
) {
  switch (type) {
    case HEADER_SET_ACCOUNT_ID:
      return {
        ...state,
        accountId: avaiableAccounts[payload.id].id,
        accountLabel: avaiableAccounts[payload.id].label,
      }

    case HEADER_SET_AMOUNT_VISIBILITY:
      return {
        ...state,
        isAmountVisible: payload.isAmountVisible,
      }

    case RESET_HEADER:
      return INITIAL_STATE

    default:
      return state
  }
}

export default dashboardReducer
