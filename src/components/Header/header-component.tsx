import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { EyeClosedSVG, EyeOpenSVG } from 'src/components'
import logo from 'src/assets/logo.png'
import logoMobile from 'src/assets/logo-mobile.png'
import { formatPrice } from 'src/helpers'
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
  fetchDetailsData,
  loading: loadindDetails,
  aggregate: { total },
  ...headerMenuData
}: IHeader) {
  function toggleAmountVisibility() {
    setAmountVisibility(!isAmountVisible)
  }

  useEffect(() => {
    fetchDetailsData()
  }, [])

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
        <Price loading={`${loadindDetails}`}>
          Sua Carteira:
          <strong>R$ {isAmountVisible ? formatPrice(total) : '-------'}</strong>
        </Price>
        <ToggleButton onClick={toggleAmountVisibility}>
          {isAmountVisible ? <EyeOpenSVG /> : <EyeClosedSVG />}
        </ToggleButton>
      </Summary>
    </Container>
  )
}

export default Header
