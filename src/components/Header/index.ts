import { connect } from 'react-redux'
import { fetchDetailsData } from 'src/pages/Details/details-actions'
import { getTestingComponent } from 'src/helpers'
import { IHeaderMapStateToProps } from './header-types'
import Header from './header-component'
import * as actions from './header-actions'

const mapStateToProps = ({
  header,
  details: { aggregate, loading },
}: IHeaderMapStateToProps) => ({ ...header, loading, aggregate })

const ConnectedHeader = getTestingComponent(
  connect(mapStateToProps, {
    ...actions,
    fetchDetailsData,
  })(Header || (() => null))
)

export default ConnectedHeader
