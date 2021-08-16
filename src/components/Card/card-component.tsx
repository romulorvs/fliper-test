import { formatPrice } from 'src/helpers'
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

      <ButtonContainer>
        <MoreButton onClick={() => console.log('clicking')}>
          VER MAIS
        </MoreButton>
      </ButtonContainer>
    </Container>
  )
}

export default Card
