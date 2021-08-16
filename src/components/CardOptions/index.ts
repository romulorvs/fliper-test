import { connect } from 'react-redux'
import * as actions from 'src/components/Header/header-actions'
import { IHeaderMapStateToProps } from 'src/components/'
import CardOptions from './card-options-component'

const mapStateToProps = ({ header }: IHeaderMapStateToProps) => header

const ConnectedCardOptions = connect(mapStateToProps, actions)(CardOptions)

export default ConnectedCardOptions
