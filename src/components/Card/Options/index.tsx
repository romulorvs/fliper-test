import { connect } from 'react-redux'
import * as actions from 'src/components/Header/header-actions'
import { IHeaderMapStateToProps } from 'src/components/'
import Options from './options-component'

const mapStateToProps = ({ header }: IHeaderMapStateToProps) => header

const ConnectedOptions = connect(mapStateToProps, actions)(Options)

export default ConnectedOptions
