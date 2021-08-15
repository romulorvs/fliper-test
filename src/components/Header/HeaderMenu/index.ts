import { connect } from 'react-redux'
import * as actions from 'src/components/Header/header-actions'
import { IHeaderMapStateToProps } from 'src/components'
import HeaderMenu from './header-menu-component'

const mapStateToProps = ({ header }: IHeaderMapStateToProps) => header

const ConnectedHeaderMenu = connect(mapStateToProps, actions)(HeaderMenu)

export default ConnectedHeaderMenu
