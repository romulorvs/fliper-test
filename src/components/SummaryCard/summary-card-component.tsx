import { formatPrice } from 'src/helpers'
import Options from '../CardOptions'
import { ISummaryCard } from './summary-card-types'
import { Container, Title, Total, Stat } from './summary-card-styles'

function SummaryCard({
  cdi,
  gain,
  profitability,
  total,
  loading,
  isAmountVisible,
}: ISummaryCard) {
  return (
    <Container loading={`${loading}`}>
      <Title>
        Resumo da Carteira <Options />
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
    </Container>
  )
}

export default SummaryCard
