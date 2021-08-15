import { connect } from 'react-redux'
import * as actions from 'src/components/Header/header-actions'
import { IHeaderMapStateToProps } from 'src/components'
import Wrapper from './wrapper-component'

const mapStateToProps = ({ header }: IHeaderMapStateToProps) => ({
  header,
})

const ConnectedWrapper = connect(mapStateToProps, actions)(Wrapper)

export default ConnectedWrapper
