import { connect } from 'react-redux'
import * as actions from 'src/components/Header/header-actions'
import { IHeaderMapStateToProps } from 'src/components'
import { getTestingComponent } from 'src/helpers'
import HeaderMenu from './header-menu-component'

const mapStateToProps = ({ header }: IHeaderMapStateToProps) => header

const ConnectedHeaderMenu = getTestingComponent(
  connect(mapStateToProps, actions)(HeaderMenu || (() => null))
)

export default ConnectedHeaderMenu
