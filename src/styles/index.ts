import { createGlobalStyle } from 'styled-components';
import backgroundImg from 'src/assets/background.svg'

export const colors = {
  backgroundColor: '#E8EBF6',
  primaryColor: '#3B5CB8',
  secondaryColor: '#606377',
  headerColor: '#527BD9',
  cardColor: '#1139A7',
  buttonColor: '#264BB2',
  buttonColorHover: '#2d54bf',
  buttonColorActive: '#1b49c7',
  buttonColorLighter: 'rgba(0, 35, 121, 0.25)',
  buttonColorLighterHover: 'rgba(0, 35, 121, 0.2)',
  buttonColorLighterActive: 'rgba(0, 35, 121, 0.18)',
  lightText: '#D3E1FF',
  extraLightText: '#8DB0FF'
}

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  
  body {
    background-color: ${colors.backgroundColor};
    background-image: url(${backgroundImg});
    background-attachment: fixed;
    background-size: cover;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${colors.secondaryColor};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background-color: transparent;
    cursor: pointer;
    border: 0;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: 100%;
  }

  @keyframes placeHolderShimmer{
    0%{ background-position: -468px 0 }
    100%{ background-position: 468px 0 }
  }

  @keyframes slideDownSmall{
    0%{
      opacity: 0;
      transform: translateY(-20px)
    }
    1%{
      opacity: 0;
      transform: translateY(-20px)
    }
    100%{
      opacity: 1;
      transform: translateY(0px)
    }
  }

  @keyframes slideUp{
    0%{
      opacity: 0;
      transform: translateY(+100px)
    }
    1%{
      opacity: 0;
      transform: translateY(+100px)
    }
    100%{
      opacity: 1;
      transform: translateY(0px)
    }
  }
`;

export const hover = (hoverRules: string, activeRules?: string) => `
  outline: none;
  user-select: none;
  transition: background-color 0.1s ease-in;

  &:hover {
    ${hoverRules}
  }

  &:focus-visible {
    transition: unset;
    ${hoverRules}
  }

  ${activeRules ? `
    &:active {
      transition: unset;
      ${activeRules}
    }
  ` : ''}
`

export const shimmerLoader = `
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: linear-gradient(to right, #f0f0f0 8%, #dddddd 18%, #f0f0f0 33%);
  background-size: 100% 100%;
`

export const shimmerLoaderBlue = `
  ${shimmerLoader}
  background: linear-gradient(to right,#5c86e4 8%,#668ee8 18%,#5c86e4 33%);
`

export const slideDownSmall = `
  animation: slideDownSmall 0.2s ease-out;
`

export const slideUp = `
  animation: slideUp 0.5s ease-out;
`

export const forMobile = (mobileRules: string) => `
  @media (max-width: 767px) {
    ${mobileRules}
  }
`