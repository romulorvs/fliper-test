import { connect } from 'react-redux'
import * as actions from 'src/components/Header/header-actions'
import { IHeaderMapStateToProps } from 'src/components/'
import { getTestingComponent } from 'src/helpers'
import Card from './card-component'

const mapStateToProps = ({
  header: { isAmountVisible },
}: IHeaderMapStateToProps) => ({
  isAmountVisible,
})

const ConnectedCard = getTestingComponent(
  connect(mapStateToProps, actions)(Card || (() => null))
)

export default ConnectedCard
