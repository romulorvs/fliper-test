import { useState, useEffect } from 'react'
import { OutsideClick, TriangleDownSVG, TriangleUpSVG } from 'src/components'
import { IHeaderMenu } from './header-menu-types'
import { Container, AccountButton, Menu, MenuItem } from './header-menu-styles'

function HeaderMenu({
  accountId,
  accountLabel,
  accounts,
  setAccountId,
}: IHeaderMenu) {
  const [showMenu, setShowMenu] = useState(false)

  function toggleShowMenu() {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    setShowMenu(false)
  }, [accountId])

  return (
    <Container>
      <OutsideClick runOnEsc onClickOutside={() => setShowMenu(false)}>
        <AccountButton onClick={toggleShowMenu}>
          <strong>{accountLabel}</strong>
          <span>
            Conta {accountLabel}
            {showMenu ? <TriangleUpSVG /> : <TriangleDownSVG />}
          </span>
        </AccountButton>
        {showMenu && (
          <Menu>
            {accounts.map(({ id, label }) => (
              <MenuItem key={id} onClick={() => setAccountId(id)}>
                <strong>{label}</strong>
                <span>Conta {label}</span>
              </MenuItem>
            ))}
          </Menu>
        )}
      </OutsideClick>
    </Container>
  )
}

export default HeaderMenu
