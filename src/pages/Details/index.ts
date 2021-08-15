import { connect } from 'react-redux'
import * as actions from './details-actions'
import Details from './details-component'

const mapStateToProps = ({ details }: { details: any }) => details

const ConnectedDetails = connect(mapStateToProps, actions)(Details)

export default ConnectedDetails
