import { formatPrice } from 'src/helpers'
import { useLocation } from 'react-router-dom'
import Options from '../CardOptions'
import { ICard } from './card-types'
import {
  Container,
  Title,
  Total,
  Stat,
  ButtonContainer,
  MoreButton,
} from './card-styles'

function Card({
  accountLabel,
  cdi,
  gain,
  profitability,
  total,
  loading,
  isAmountVisible,
}: ICard) {
  const { pathname } = useLocation()

  return (
    <Container loading={`${loading}`}>
      <Title>
        Resumo da Conta {accountLabel}
        <Options />
      </Title>

      <Total>
        Valor Investido
        <strong>
          {isAmountVisible ? `R$ ${formatPrice(total)}` : '---------'}
        </strong>
      </Total>

      <Stat>
        Rentabilidade/mês
        <strong>
          {isAmountVisible ? `${formatPrice(profitability)}%` : '-----'}
        </strong>
      </Stat>

      <Stat>
        CDI
        <strong>{isAmountVisible ? `${formatPrice(cdi)}%` : '-----'}</strong>
      </Stat>

      <Stat>
        Ganho/mês
        <strong>{isAmountVisible ? `R$ ${formatPrice(gain)}` : '-----'}</strong>
      </Stat>

      {pathname === '/dashboard' && (
        <ButtonContainer>
          <MoreButton to="/details">VER MAIS</MoreButton>
        </ButtonContainer>
      )}
    </Container>
  )
}

export default Card
