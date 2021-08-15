import { connect } from 'react-redux'
import * as actions from './header-actions'
import Header from './header-component'

const mapStateToProps = ({ header }: { header: any }) => header

const ConnectedHeader = connect(mapStateToProps, actions)(Header)

export default ConnectedHeader
