import { connect } from 'react-redux'
import * as actions from './header-actions'
import Header from './header-component'
import { IHeaderMapStateToProps } from './header-types'

const mapStateToProps = ({ header }: IHeaderMapStateToProps) => header

const ConnectedHeader = connect(mapStateToProps, actions)(Header)

export default ConnectedHeader
