import { connect } from 'react-redux'
import { IHeader } from 'src/components/'
import * as actions from './dashboard-actions'
import { IDashboard } from './dashboard-types'
import Dashboard from './dashboard-component'

const mapStateToProps = ({
  dashboard,
  header,
}: {
  dashboard: IDashboard
  header: IHeader
}) => ({ ...dashboard, ...header })

const ConnectedDashboard = connect(mapStateToProps, actions)(Dashboard)

export default ConnectedDashboard
