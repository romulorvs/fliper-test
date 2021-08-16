import { ISummary } from 'src/pages/Details/details-types'
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
  loading: boolean
  aggregate: ISummary
  setAccountId: (accountId: number) => void
  resetHeaderState: () => void
  setAmountVisibility: (visibility: boolean) => void
  fetchDetailsData: () => void
  children?: JSX.Element
}

export interface IHeaderMapStateToProps {
  header: IHeader
  details: {
    aggregate: ISummary
    loading: boolean
  }
}

export interface IPrice {
  loading: 'true' | 'false'
}
