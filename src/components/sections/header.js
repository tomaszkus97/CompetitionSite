import React from "react"
import styled from "styled-components"
import skier2 from "../../images/product/skier3.png"
import { graphql, useStaticQuery, Link } from "gatsby"

import { Container } from "../global"

const Header = () => {

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <HeaderWrapper id="top">
      <Container>
        <Flex>
          <HeaderTextGroup>
            <h1>
             IV Mistrzostwa Powiatu Pszczyńskiego
             w narciarstwie alpejskim

            </h1>
            <h2>
              O puchar Starosty Pszczyńskiego
            </h2>
          </HeaderTextGroup>
          <ImageWrapper>
            <StyledImage src={skier2} />
            <br />
          </ImageWrapper>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  background-color: #e8f1ff;
  padding: 100px 0 40px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`

const HeaderTextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;
    margin-top: 40px;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    padding-top: 40px;
    margin: 0 0 24px;
    color: ${props => props.theme.color.primary};
  }

  h2 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`
const ImageWrapper = styled.div`
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled.img`

  width: 600px;
  height: 100%;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`
