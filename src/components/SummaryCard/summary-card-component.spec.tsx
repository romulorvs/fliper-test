import { render, screen } from '@testing-library/react'
import SummaryCard from './summary-card-component'

describe('SummaryCard Component', () => {
  test('Should display the wealthy data correctly.', () => {
    render(
      <SummaryCard
        cdi={123456}
        gain={654123}
        isAmountVisible
        loading={false}
        profitability={789123}
        total={465678}
      />
    )

    const profitabilityElement = screen.queryByText(
      /Rentabilidade\/mês/i
    ) as HTMLElement
    expect(profitabilityElement).toBeInTheDocument()
    expect(profitabilityElement.textContent).toBe(
      'Rentabilidade/mês789.123,00%'
    )

    const totalElement = screen.queryByText(/Valor Investido/i) as HTMLElement
    expect(totalElement).toBeInTheDocument()
    expect(totalElement.textContent).toBe('Valor InvestidoR$ 465.678,00')

    const cdiElement = screen.queryByText(/CDI/i) as HTMLElement
    expect(cdiElement).toBeInTheDocument()
    expect(cdiElement.textContent).toBe('CDI123.456,00%')

    const gainElement = screen.queryByText(/Ganho\/mês/i) as HTMLElement
    expect(gainElement).toBeInTheDocument()
    expect(gainElement.textContent).toBe('Ganho/mêsR$ 654.123,00')
  })

  test('Should not display the wealthy data if isAmountVisible is false.', () => {
    render(
      <SummaryCard
        cdi={123456}
        gain={654123}
        isAmountVisible={false}
        loading={false}
        profitability={789123}
        total={465678}
      />
    )

    const profitabilityElement = screen.queryByText(
      /Rentabilidade\/mês/i
    ) as HTMLElement
    expect(profitabilityElement).toBeInTheDocument()
    expect(profitabilityElement.textContent).toBe('Rentabilidade/mês-----')

    const totalElement = screen.queryByText(/Valor Investido/i) as HTMLElement
    expect(totalElement).toBeInTheDocument()
    expect(totalElement.textContent).toBe('Valor Investido---------')

    const cdiElement = screen.queryByText(/CDI/i) as HTMLElement
    expect(cdiElement).toBeInTheDocument()
    expect(cdiElement.textContent).toBe('CDI-----')

    const gainElement = screen.queryByText(/Ganho\/mês/i) as HTMLElement
    expect(gainElement).toBeInTheDocument()
    expect(gainElement.textContent).toBe('Ganho/mês-----')
  })
})
