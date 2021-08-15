import { Link } from 'react-router-dom'
import { IHeader } from './header-types'

function Header({ accountId, accountLabel, accounts, setAccountId }: IHeader) {
  return (
    <div>
      <Link to="/dashboard">Fliper</Link>
    </div>
  )
}

export default Header
