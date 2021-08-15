import { connect } from 'react-redux'
import * as actions from 'src/components/Header/header-actions'
import Wrapper from './wrapper-component'
import { IMapStateToProps } from './app-route-types'

const mapStateToProps = ({ header }: IMapStateToProps) => ({
  header,
})

const ConnectedWrapper = connect(mapStateToProps, actions)(Wrapper)

export default ConnectedWrapper
