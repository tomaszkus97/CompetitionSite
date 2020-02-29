import React from "react"
import styled from "styled-components"
import file from "../../images/product/regulamin.pdf"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="regulamin">
    <StyledContainer>
      <SectionTitle>Regulamin zawodów</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>1. Kategorie</FeatureTitle>
          <FeatureText>
            <ul>
              <li>
              I grupa – kategoria wiekowa 5 - 7 lat (dziewczynki i chłopcy)
              </li>
              <li>
              II grupa – kategoria wiekowa 8 - 11 lat (dziewczynki i chłopcy)
              </li>
              <li>
              III grupa – kategoria wiekowa 12 - 16 lat (dziewczęta)
              </li>
              <li>
              IV grupa – kategoria wiekowa 12 - 16 lat (chłopcy)
              </li>
              <li>
              V grupa – kategoria wiekowa 17 lat i powyżej (kobiety)
              </li>
              <li>
              VI grupa - kategoria wiekowa 17 lat i powyżej (mężczyźni)
              </li>
              <li>
              VII grupa - kategoria wiekowa 45+ (mężczyźni)
              </li>
              <li>
              VIII grupa - kategoria wiekowa 45+ (kobiety)
              </li>
              <li>
              IX grupa - snowboard open
              </li>
              <li>
              X grupa - skki trikke open
              </li>
            </ul>
            Jeżeli zbierze się powyżej 10 uczestników to będą dodatkowe kategorie dot.wieku 5-8 lat i 50+
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>2. Opłata startowa</FeatureTitle>
          <FeatureText>
            <ul>
              <li>
              Opłata startowa za udział w zawodach (w jednej kategorii) wynosi: 50,- PLN ( wszystkie kat. wiekowe , do 2 dni przed zawodami- przelew na konto)
              </li>
              <li>
              Opłata startowa za udział w zawodach (w jednej kategorii) wynosi: 80,- PLN ( w dniu zawodów)
              </li>
            </ul>
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>3. Przebieg zawodów</FeatureTitle>
          <FeatureText>
          <ul>
              <li>
              Listy startowe zostaną ustalone w poszczególnych grupach wiekowych w dniu 06.03.2020 r. o godz. 21:00.
              </li>
              <li>
              Zawodnicy startują począwszy od najmłodszej grupy dziewcząt i chłopców.
              </li>
              <li>
              Start pierwszej grupy odbędzie się o godz. 9:00, lub wcześniej, po powiadomieniu
wszystkich startujących
              </li>
            </ul>
          </FeatureText>
        </FeatureItem>

      </FeaturesGrid>
      <GetStartedContainer>
      <TryItButton download href={file}>Pobierz pełen regulamin</TryItButton>
      </GetStartedContainer>
      
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)`
`

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`
const TryItButton = styled.a`
font-weight: 500;
font-size: 14px;
color: white;
text-decoration: none;
display: inline-flex;
align-items: center;
letter-spacing: 1px;
height: 60px;
margin-left: 8px;
text-transform: uppercase;
cursor: pointer;
white-space: nowrap;
background: ${props => props.theme.color.secondary};
border-radius: 4px;
padding: 0px 40px;
border-width: 0px;
border-style: initial;
border-color: initial;
border-image: initial;
outline: 0px;
&:hover {
  box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
}
@media (max-width: ${props => props.theme.screen.md}) {
}
@media (max-width: ${props => props.theme.screen.sm}) {
  margin-left: 0;
}
`
const FeaturesGrid = styled.div`
  max-width: 900px;
  display: grid;
  grid-template-columns: 1fr;
  margin: 0px auto;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: left;
  align-items: ;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: flex-start;
`
