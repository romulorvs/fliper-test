import { IHeader } from 'src/components'

export interface IMapStateToProps {
  header: IHeader
}

export interface IWrapper extends IMapStateToProps {
  children?: JSX.Element
}
