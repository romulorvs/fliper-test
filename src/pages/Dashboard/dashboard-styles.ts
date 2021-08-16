import styled from 'styled-components'
import { forMobile } from 'src/styles'

export const Container = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30vh;

  ${forMobile(`
    padding-top: 140px;
`)}
`
