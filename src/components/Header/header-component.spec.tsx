import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from './header-component'

jest.mock('react-router-dom', () => ({
  useLocation: () => ({
    pathname: '/dashboard',
  }),
  // eslint-disable-next-line react/display-name
  Link: (props: any) => <span>{props.children}</span>,
}))

describe('Header Component', () => {
  test('Should display the data correctly.', () => {
    render(
      <Header
        accountId={1}
        accountLabel="A"
        accounts={[]}
        aggregate={{
          cdi: 0,
          gain: 0,
          profitability: 0,
          total: 12345678,
        }}
        fetchDetailsData={() => {}}
        isAmountVisible
        loading={false}
        resetHeaderState={() => {}}
        setAccountId={() => {}}
        setAmountVisibility={() => {}}
      />
    )

    const profitabilityElement = screen.queryByText(
      /Sua Carteira/i
    ) as HTMLElement
    expect(profitabilityElement).toBeInTheDocument()
    expect(profitabilityElement.textContent).toBe(
      'Sua Carteira:R$ 12.345.678,00'
    )
  })

  test('Should not display wealthy data if isAmountVisible is false.', () => {
    render(
      <Header
        accountId={1}
        accountLabel="A"
        accounts={[]}
        aggregate={{
          cdi: 0,
          gain: 0,
          profitability: 0,
          total: 12345678,
        }}
        fetchDetailsData={() => {}}
        isAmountVisible={false}
        loading={false}
        resetHeaderState={() => {}}
        setAccountId={() => {}}
        setAmountVisibility={() => {}}
      />
    )

    const profitabilityElement = screen.queryByText(
      /Sua Carteira/i
    ) as HTMLElement
    expect(profitabilityElement).toBeInTheDocument()
    expect(profitabilityElement.textContent).toBe('Sua Carteira:R$ -------')
  })

  test('Should change wealthy data visibility on toggle button click.', () => {
    const setAmountVisibility = jest.fn()
    const { container } = render(
      <Header
        accountId={1}
        accountLabel="A"
        accounts={[]}
        aggregate={{
          cdi: 0,
          gain: 0,
          profitability: 0,
          total: 12345678,
        }}
        fetchDetailsData={() => {}}
        isAmountVisible
        loading={false}
        resetHeaderState={() => {}}
        setAccountId={() => {}}
        setAmountVisibility={setAmountVisibility}
      />
    )

    const toggleButton = container.querySelector('button') as HTMLButtonElement
    expect(toggleButton).toBeInTheDocument()

    userEvent.click(toggleButton)

    expect(setAmountVisibility).toHaveBeenCalledWith(false)
  })
})
