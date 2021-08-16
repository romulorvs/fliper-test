import { connect } from 'react-redux'
import * as actions from 'src/components/Header/header-actions'
import { IHeaderMapStateToProps } from 'src/components/'
import { getTestingComponent } from 'src/helpers'
import SummaryCard from './summary-card-component'

const mapStateToProps = ({
  header: { isAmountVisible },
}: IHeaderMapStateToProps) => ({
  isAmountVisible,
})

const ConnectedSummaryCard = getTestingComponent(
  connect(mapStateToProps, actions)(SummaryCard || (() => null))
)

export default ConnectedSummaryCard
