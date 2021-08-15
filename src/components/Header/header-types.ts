import Constants from './header-constants'

export interface IHeaderReducerState {
  accountId: number
  accountLabel: string
  accounts: Array<{
    id: number
    label: string
  }>
}

export interface IHeaderReducerAction {
  type: Constants.HEADER_SET_ACCOUNT_ID | Constants.RESET_HEADER
  payload: {
    id: number
  }
}

export interface IHeader extends IHeaderReducerState {
  setAccountId: () => void
  resetHeaderState: () => void
  children?: JSX.Element
}
