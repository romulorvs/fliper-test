import { connect } from 'react-redux'
import * as actions from 'src/components/Header/header-actions'
import { IHeaderMapStateToProps } from 'src/components/'
import { getTestingComponent } from 'src/helpers'
import CardOptions from './card-options-component'

const mapStateToProps = ({ header }: IHeaderMapStateToProps) => header

const ConnectedCardOptions = getTestingComponent(
  connect(mapStateToProps, actions)(CardOptions || (() => null))
)

export default ConnectedCardOptions
