import Constants from './header-constants'

export interface IHeaderReducerState {
  accountId: number
  accountLabel: string
  accounts: Array<{
    id: number
    label: string
  }>
  isAmountVisible: boolean
}

export interface IHeaderReducerAction {
  payload: any
  type:
    | Constants.HEADER_SET_ACCOUNT_ID
    | Constants.RESET_HEADER
    | Constants.HEADER_SET_AMOUNT_VISIBILITY
}

export interface IHeader extends IHeaderReducerState {
  setAccountId: () => void
  resetHeaderState: () => void
  setAmountVisibility: (visibility: boolean) => void
  children?: JSX.Element
}

export interface IHeaderMapStateToProps {
  header: IHeader
}
