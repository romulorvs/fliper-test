import { connect } from 'react-redux'
import * as actions from './details-actions'
import Details from './details-component'
import { IDetails } from './details-types'

const mapStateToProps = ({ details }: { details: IDetails }) => details

const ConnectedDetails = connect(mapStateToProps, actions)(Details)

export default ConnectedDetails
