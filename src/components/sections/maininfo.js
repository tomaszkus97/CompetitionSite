import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Infos = () => (
  <Section id="infos">
    <StyledContainer>
      <SectionTitle>Najważniejsze informacje</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Miejsce</FeatureTitle>
          <FeatureText>
            Stok Siglany w Wiśle
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Termin</FeatureTitle>
          <FeatureText>
            8 Marca 2020.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Konkurencja</FeatureTitle>
          <FeatureText>
            Slalom gigant
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Infos;

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 20px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`