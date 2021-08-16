import { connect } from 'react-redux'
import * as actions from 'src/components/Header/header-actions'
import { IHeaderMapStateToProps } from 'src/components/'
import Card from './card-component'

const mapStateToProps = ({
  header: { isAmountVisible },
}: IHeaderMapStateToProps) => ({
  isAmountVisible,
})

const ConnectedCard = connect(mapStateToProps, actions)(Card)

export default ConnectedCard
