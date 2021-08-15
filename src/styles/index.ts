import { createGlobalStyle } from 'styled-components';
import backgroundImg from 'src/assets/background.svg'

export const colors = {
  backgroundColor: '#E8EBF6',
  primaryColor: '#3B5CB8',
  secondaryColor: '#606377',
  headerColor: '#527BD9',
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
    color: ${colors.secondaryColor};
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: 100%;
  }

  @keyframes placeHolderShimmer{
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
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
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #F6F6F6;
  background: linear-gradient(to right, #f0f0f0 8%, #dddddd 18%, #f0f0f0 33%);
  background-size: 800px 104px;
`

export const forMobile = (mobileRules: string) => `
  @media (max-width: 767px) {
    ${mobileRules}
  }
`