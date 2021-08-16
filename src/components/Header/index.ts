import { connect } from 'react-redux'
import { fetchDetailsData } from 'src/pages/Details/details-actions'
import { IHeaderMapStateToProps } from './header-types'
import Header from './header-component'
import * as actions from './header-actions'

const mapStateToProps = ({
  header,
  details: { aggregate, loading },
}: IHeaderMapStateToProps) => ({ ...header, loading, aggregate })

const ConnectedHeader = connect(mapStateToProps, {
  ...actions,
  fetchDetailsData,
})(Header)

export default ConnectedHeader
