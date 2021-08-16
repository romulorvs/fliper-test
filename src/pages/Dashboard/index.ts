import { connect } from 'react-redux'
import { IHeader } from 'src/components/'
import { getTestingComponent } from 'src/helpers'
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

const ConnectedDashboard = getTestingComponent(
  connect(mapStateToProps, actions)(Dashboard || (() => null))
)

export default ConnectedDashboard
