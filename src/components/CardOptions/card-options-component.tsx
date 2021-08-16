import { useState } from 'react'
import {
  OutsideClick,
  IHeader,
  DotsSVG,
  EyeClosedSVG,
  EyeOpenSVG,
} from 'src/components'
import { Button, Menu, MenuItem } from './card-options-styles'

function Options({ isAmountVisible, setAmountVisibility }: IHeader) {
  const [showMenu, setShowMenu] = useState(false)

  function toggleShowMenu() {
    setShowMenu(!showMenu)
  }

  function toggleAmountVisibility() {
    setAmountVisibility(!isAmountVisible)
  }

  return (
    <OutsideClick runOnEsc onClickOutside={() => setShowMenu(false)}>
      <Button onClick={toggleShowMenu}>
        <DotsSVG />
      </Button>
      {showMenu && (
        <Menu>
          <MenuItem onClick={toggleAmountVisibility}>
            {isAmountVisible ? 'Ocultar Valores' : 'Exibir Valores'}
            {isAmountVisible ? <EyeClosedSVG /> : <EyeOpenSVG />}
          </MenuItem>
        </Menu>
      )}
    </OutsideClick>
  )
}

export default Options
