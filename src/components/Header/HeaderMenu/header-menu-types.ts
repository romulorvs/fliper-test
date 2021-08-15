export interface IHeaderMenu {
  setAccountId: (accountId: number) => void
  accountId: number
  accountLabel: string
  accounts: Array<{
    id: number
    label: string
  }>
}
