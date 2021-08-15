export interface IOutsideClick {
  className?: string
  onClickOutside: () => void
  children: any
  runOnEsc?: boolean
  ignore?: boolean
}
