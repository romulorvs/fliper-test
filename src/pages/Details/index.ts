import { connect } from 'react-redux'
import { getTestingComponent } from 'src/helpers'
import * as actions from './details-actions'
import Details from './details-component'
import { IDetails } from './details-types'

const mapStateToProps = ({ details }: { details: IDetails }) => details

const ConnectedDetails = getTestingComponent(
  connect(mapStateToProps, actions)(Details || (() => null))
)

export default ConnectedDetails
