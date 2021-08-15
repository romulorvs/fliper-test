import { Link } from 'react-router-dom'
import logo from 'src/assets/logo.png'
import logoMobile from 'src/assets/logo-mobile.png'
import { EyeClosedSVG, EyeOpenSVG } from 'src/components'
import HeaderMenu from './HeaderMenu'
import { IHeader } from './header-types'
import {
  Container,
  Picture,
  Summary,
  ToggleButton,
  Price,
} from './header-styles'

function Header({
  isAmountVisible,
  setAmountVisibility,
  ...headerMenuData
}: IHeader) {
  function toggleAmountVisibility() {
    setAmountVisibility(!isAmountVisible)
  }

  return (
    <Container>
      <HeaderMenu {...headerMenuData} />
      <Link to="/dashboard">
        <Picture>
          <source srcSet={logoMobile} media="(max-width: 767px)" />
          <source srcSet={logo} media="(min-width: 768px)" />
          <img src={logoMobile} alt="Fliper" />
        </Picture>
      </Link>
      <Summary>
        <Price>
          Sua Carteira:
          <strong>R$ {isAmountVisible ? '123.565,23' : '-------'}</strong>
        </Price>
        <ToggleButton onClick={toggleAmountVisibility}>
          {isAmountVisible ? <EyeOpenSVG /> : <EyeClosedSVG />}
        </ToggleButton>
      </Summary>
    </Container>
  )
}

export default Header
