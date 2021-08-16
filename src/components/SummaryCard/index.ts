import { connect } from 'react-redux'
import * as actions from 'src/components/Header/header-actions'
import { IHeaderMapStateToProps } from 'src/components/'
import SummaryCard from './summary-card-component'

const mapStateToProps = ({
  header: { isAmountVisible },
}: IHeaderMapStateToProps) => ({
  isAmountVisible,
})

const ConnectedSummaryCard = connect(mapStateToProps, actions)(SummaryCard)

export default ConnectedSummaryCard
