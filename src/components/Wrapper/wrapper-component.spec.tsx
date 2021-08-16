import { render, screen } from '@testing-library/react'
import Wrapper from './wrapper-component'

describe('Wrapper Component', () => {
  test('Should display the children component in the Wrapper.', () => {
    render(<Wrapper>teste_children</Wrapper>)
    expect(screen.queryByText(/teste_children/i)).toBeInTheDocument()
  })
})
