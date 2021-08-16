import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CardOptions from './card-options-component'

describe('CardOptions Component', () => {
  let container: HTMLElement
  const setAmountVisibility = jest.fn()

  beforeEach(() => {
    const { container: ctn } = render(
      <CardOptions
        isAmountVisible={false}
        setAmountVisibility={setAmountVisibility}
      />
    )
    container = ctn

    const toggleButton = container.querySelector('button') as HTMLButtonElement
    userEvent.click(toggleButton)
  })

  test('Should show menu on button click.', () => {
    expect(!!container.querySelector('ul')).toBe(true)
  })

  test('Should hide menu on button click.', () => {
    const toggleButton = container.querySelector('button') as HTMLButtonElement
    userEvent.click(toggleButton)

    expect(!!container.querySelector('ul')).toBe(false)
  })

  test('Should toggle wealthy display on click.', () => {
    expect(screen.queryByText('Exibir Valores')).toBeInTheDocument()

    const toggleVisibity = container.querySelector('ul button')
    userEvent.click(toggleVisibity)

    expect(setAmountVisibility).toHaveBeenCalledWith(true)
  })
})
