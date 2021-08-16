import styled from 'styled-components'
import { colors, hover, shimmerLoaderBlue, forMobile } from 'src/styles'
import { IPrice } from './header-types'

const loadingContainer = `
  position: relative;
  border-radius: 0.8rem;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    ${shimmerLoaderBlue}
    animation-duration: 4s;
  }
`

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.headerColor};
  height: 7rem;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4;
`

export const Picture = styled.picture`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  height: 3.9rem;

  img {
    width: 100%;
    height: 100%;
  }
`

export const Summary = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.headerColor};
  height: 7rem;
  padding: 0 2rem;
`

export const Price = styled.p<IPrice>`
  display: flex;
  align-items: baseline;
  color: ${colors.extraLightText};
  font-size: 1.2rem;

  ${forMobile(`
    display: none;
  `)}

  strong {
    margin-left: 0.8rem;
    color: ${colors.lightText};
    font-size: 1.6rem;
  }

  ${p => (p.loading === 'true' ? loadingContainer : '')};
`

export const ToggleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.6rem;
  width: 3.6rem;
  border-radius: 3.6rem;
  margin-left: 1.6rem;
  white-space: nowrap;
  background-color: ${colors.buttonColor};

  ${forMobile(`
    height: 4.6rem;
    width: 4.6rem;
  `)}

  ${hover(
    `
    background-color: ${colors.buttonColorHover};
  `,
    `
    background-color: ${colors.buttonColorActive};
  `
  )}

  svg {
    width: 2rem;
    height: 2rem;
    fill: ${colors.lightText};

    ${forMobile(`
      height: 2.6rem;
      width: 2.6rem;
    `)}
  }
`
