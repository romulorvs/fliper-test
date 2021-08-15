import styled from 'styled-components'
import { hover } from 'src/styles'

export const Button = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 4rem;
  position: relative;

  ${hover(
    `
    background-color: #ececec;
  `,
    `
    background-color: #e0e0e0;
  `
  )}
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0.8rem;
  overflow: hidden;
  background-color: white;
  box-shadow: 2px 2px 1px 0 #bfc5d6;
`

export const MenuItem = styled.button`
  display: flex;
  align-items: center;
  height: 4rem;
  padding: 0.8rem 1.6rem;
  white-space: nowrap;
  background-color: #e8ebf6;

  ${hover(
    `
    background-color: #dfe2ef;
  `,
    `
    background-color: #d2d7ea;
  `
  )}

  svg {
    width: 2.2rem;
    margin-left: 1rem;
    fill: #888fa9;
  }
`
