import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  OutsideClick,
  DetailsSVG,
  TriangleDownSVG,
  TriangleUpSVG,
} from 'src/components'
import { IHeaderMenu } from './header-menu-types'
import { Container, AccountButton, Menu, MenuItem } from './header-menu-styles'

function HeaderMenu({ accountLabel, accounts, setAccountId }: IHeaderMenu) {
  const { pathname } = useLocation()

  const [showMenu, setShowMenu] = useState(false)

  function toggleShowMenu() {
    setShowMenu(!showMenu)
  }

  function handleMenuItemClick(id: number) {
    setAccountId(id)
    setShowMenu(false)
  }

  return (
    <Container>
      <OutsideClick runOnEsc onClickOutside={() => setShowMenu(false)}>
        <AccountButton onClick={toggleShowMenu}>
          <strong>
            {pathname === '/dashboard' && accountLabel}
            {pathname === '/details' && <DetailsSVG />}
          </strong>
          <span>
            {pathname === '/dashboard' && `Conta ${accountLabel}`}
            {pathname === '/details' && 'Sua Carteira'}
            {showMenu ? <TriangleUpSVG /> : <TriangleDownSVG />}
          </span>
        </AccountButton>
        {showMenu && (
          <Menu>
            <>
              {accounts.map(({ id, label }) => (
                <MenuItem
                  key={id}
                  to="/dashboard"
                  onClick={() => handleMenuItemClick(id)}
                >
                  <strong>{label}</strong>
                  <span>Conta {label}</span>
                </MenuItem>
              ))}
              <MenuItem to="/details" onClick={() => setShowMenu(false)}>
                <strong>
                  <DetailsSVG />
                </strong>
                <span>Sua Carteira</span>
              </MenuItem>
            </>
          </Menu>
        )}
      </OutsideClick>
    </Container>
  )
}

export default HeaderMenu
