import { connect } from 'react-redux'
import { IHeaderReducerState } from 'src/components/'
import * as actions from './dashboard-actions'
import { IDashboardReducerState } from './dashboard-types'
import Dashboard from './dashboard-component'

const mapStateToProps = ({
  dashboard,
  header,
}: {
  dashboard: any
  header: any
}) => ({ ...dashboard, ...header })

const ConnectedDashboard = connect(mapStateToProps, actions)(Dashboard)

export default ConnectedDashboard
