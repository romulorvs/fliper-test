import styled from 'styled-components'
import { colors, forMobile, hover } from 'src/styles'

export const Container = styled.nav`
  display: flex;
  position: relative;
  z-index: 3;
`
export const AccountButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 4.6rem;
  overflow: hidden;
  background-color: ${colors.buttonColorLighter};

  ${hover(
    `
    background-color: ${colors.buttonColorLighterHover};
    strong {
      background-color: ${colors.buttonColorHover};
    }
  `,
    `
    background-color: ${colors.buttonColorLighterActive};
    strong {
      background-color: ${colors.buttonColorActive};
    }
  `
  )}

  ${forMobile(`
    background-color: transparent;
  `)}

  strong {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 4.6rem;
    font-size: 1.6rem;
    background-color: ${colors.buttonColor};
    color: white;
    transition: background-color 0.1s ease-in;

    ${forMobile(`
      font-size: 2rem;
      height: 4.6rem;
      width: 4.6rem;
    `)}

    &:focus-visible {
      transition: unset;
    }

    &:active {
      transition: unset;
    }
  }

  span {
    display: flex;
    align-items: center;
    color: ${colors.lightText};
    margin-left: 0.8rem;
    font-size: 1.6rem;
    font-weight: 500;
    white-space: nowrap;

    svg {
      margin-left: 0.8rem;
      margin-right: 0.8rem;
      width: 1rem;
      height: 1rem;
      fill: white;
    }

    ${forMobile(`
      display: none;
    `)}
  }
`

export const Menu = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 1.8rem;
  overflow: hidden;
  box-shadow: 2px 2px 1px 0 rgba(26, 57, 144, 0.25);
  background-color: white;
  position: absolute;
  z-index: 3;
  top: calc(100% + 0.8rem);
  width: 100%;
  min-width: 130px;
  left: 0;

  ${forMobile(`
    min-width: 160px;
    border-radius: 2.3rem;
  `)}
`

export const MenuItem = styled.button`
  display: flex;
  padding: 0.6rem;
  align-items: center;
  overflow: hidden;
  background-color: white;
  height: 3.7rem;

  ${forMobile(`
    height: 4.7rem;
  `)}

  & + button {
    border-top: 1px solid #e5e8ee;
  }

  ${hover(
    `
    background-color: rgba(0, 0, 0, 0.08);
  `,
    `
    background-color: rgba(0, 0, 0, 0.12);
  `
  )}

  strong {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 4.6rem;
    font-size: 1.3rem;
    font-weight: 500;
    background-color: ${colors.buttonColor};
    color: white;
    transition: background-color 0.1s ease-in;

    ${forMobile(`
      font-size: 1.6rem;
      width: 3.6rem;
      height: 3.6rem;
    `)}
  }

  span {
    display: flex;
    align-items: center;
    margin-left: 0.8rem;
    font-size: 1.4rem;
    white-space: nowrap;

    ${forMobile(`
      font-size: 1.7rem;
    `)}
  }
`
