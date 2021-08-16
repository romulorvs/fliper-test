import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import HeaderMenu from './header-menu-component'

jest.mock('react-router-dom', () => ({
  useLocation: () => ({
    pathname: '/dashboard',
  }),
  // eslint-disable-next-line react/display-name
  Link: (props: any) => <a {...props}>{props.children}</a>,
}))

describe('HeaderMenu Component', () => {
  test('Should display the data correctly.', () => {
    const { container } = render(
      <HeaderMenu
        accountId={2}
        accountLabel="B"
        accounts={[
          {
            id: 1,
            label: 'A',
          },
          {
            id: 2,
            label: 'B',
          },
        ]}
        setAccountId={() => {}}
      />
    )

    expect(screen.queryByText('Conta B')).toBeInTheDocument()
    const toggleButton = container.querySelector('button') as HTMLButtonElement
    expect(toggleButton).toBeInTheDocument()
  })

  test('Should display the menu correctly on click.', () => {
    const { container } = render(
      <HeaderMenu
        accountId={2}
        accountLabel="B"
        accounts={[
          {
            id: 1,
            label: 'A',
          },
          {
            id: 2,
            label: 'B',
          },
        ]}
        setAccountId={() => {}}
      />
    )

    const toggleButton = container.querySelector('button') as HTMLButtonElement

    expect(screen.queryByText('Conta A')).not.toBeInTheDocument()
    expect(screen.queryByText('Sua Carteira')).not.toBeInTheDocument()

    userEvent.click(toggleButton)

    expect(screen.queryByText('Conta A')).toBeInTheDocument()
    expect(screen.queryByText('Sua Carteira')).toBeInTheDocument()
  })

  test('Should change the current accountId on menu item click.', () => {
    const setAccountId = jest.fn()
    const { container } = render(
      <HeaderMenu
        accountId={2}
        accountLabel="B"
        accounts={[
          {
            id: 1,
            label: 'A',
          },
          {
            id: 2,
            label: 'B',
          },
        ]}
        setAccountId={setAccountId}
      />
    )

    const toggleButton = container.querySelector('button') as HTMLButtonElement

    userEvent.click(toggleButton)

    const contaAElement = screen
      .queryByText('Conta A')
      .closest('a') as HTMLAnchorElement

    userEvent.click(contaAElement)

    expect(setAccountId).toHaveBeenLastCalledWith(1)
  })
})
