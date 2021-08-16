import styled from 'styled-components'
import { colors, hover, shimmerLoader, slideUp } from 'src/styles'
import { Link, LinkProps } from 'react-router-dom'
import { IContainer } from './card-types'

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
      ${shimmerLoader}
    }
  }
`

export const Container = styled.section<IContainer>`
  display: flex;
  flex-direction: column;
  padding: 1.8rem 2.4rem;
  background-color: white;
  border-radius: 1.6rem;
  box-shadow: 2px 2px 1px 0 rgba(26, 57, 144, 0.25);
  margin: 14px;
  width: 34.5rem;
  max-width: 100%;
  ${slideUp}
  ${p => (p.loading === 'true' ? loadingContainer : '')};
`
export const Title = styled.article`
  display: flex;
  position: relative;
  justify-content: space-between;
  font-weight: 900;
  font-size: 2.2rem;
  color: ${colors.primaryColor};
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
    color: ${colors.primaryColor};
  }
`
export const Stat = styled.article`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.4rem;

  strong {
    font-weight: 900;
    color: ${colors.primaryColor};
  }
`
export const ButtonContainer = styled.article`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  padding-top: 1.7rem;
  border-top: 2px solid #e5e8ee;
`
export const MoreButtonContainer = styled.div`
  display: flex;

  a {
    display: flex;
    padding: 0.7rem 1.2rem;
    font-size: 1.4rem;
    border: 1px solid ${colors.primaryColor};
    border-radius: 16rem;
    color: ${colors.primaryColor};
    font-weight: 900;
    box-shadow: 1px 1px 1px 0 #bfc5d6;

    ${hover(
      `
      background-color: #e8ebf6;
    `,
      `
      background-color: #dfe2ef;
    `
    )}
  }
`

export const MoreButton = ({ children, ...props }: LinkProps) => {
  return (
    <MoreButtonContainer>
      <Link {...props}>{children}</Link>
    </MoreButtonContainer>
  )
}
