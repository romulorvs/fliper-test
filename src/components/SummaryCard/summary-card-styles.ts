import styled from 'styled-components'
import { colors, shimmerLoaderBlue, slideUp } from 'src/styles'
import { IContainer } from './summary-card-types'

const loadingContainer = `
  article {
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
    }
  }
`

export const Container = styled.section<IContainer>`
  display: flex;
  flex-direction: column;
  padding: 1.8rem 2.4rem;
  background-color: ${colors.cardColor};
  border-radius: 1.6rem;
  box-shadow: 2px 2px 1px 0 rgba(26, 57, 144, 0.25);
  margin: 14px;
  width: 34.5rem;
  max-width: 100%;
  color: ${colors.extraLightText};
  ${slideUp}
  ${p => (p.loading === 'true' ? loadingContainer : '')};
`
export const Title = styled.article`
  display: flex;
  position: relative;
  justify-content: space-between;
  font-weight: 700;
  font-size: 2.2rem;
  color: white;
  margin-bottom: 4.2rem;
  align-items: center;

  p {
    position: absolute;
    top: 100%;
    left: 0;
    font-weight: 300;
    font-size: 1.4rem;
  }
`
export const Total = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3.8rem;

  strong {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 900;
    color: white;
  }
`
export const Stat = styled.article`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.4rem;

  strong {
    font-weight: 900;
    color: white;
  }
`
