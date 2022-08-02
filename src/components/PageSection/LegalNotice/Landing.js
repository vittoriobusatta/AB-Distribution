import React from "react";
import styled from "styled-components";
import {
  LandingWrap,
  LandingContent,
  LandingDescription,
  LandingLine,
  LandingTitle,
  LandingProductsTitle,
  cabinRegular,
} from "../../Common";

const Intro = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px;
  & p {
    line-height: 20px;
    font-size: 14px;
    text-align: center;
    margin-bottom: 10px;
    max-width: 1500px;
    font-family: ${cabinRegular};
    color: #222;
    @media screen and (min-width: 992px) {
      font-size: 16px;
    line-height: 24px;
    }
    & a {
      color: #222;
      text-decoration: underline;
    }
  }
`;

function Landing() {
  return (
    <LandingWrap>
      <LandingContent>
        <LandingTitle className="title_legalnotice">Legal Notice</LandingTitle>

        <LandingDescription>
          <Intro>
            <p>
              L’entreprise individuelle de Youssouf ISMAEL DAOUDJEE, soucieuse
              des droits des individus, notamment au regard des traitements
              automatisés et dans une volonté de transparence avec ses clients,
              a mis en place une politique reprenant l’ensemble de ces
              traitements, des finalités poursuivies par ces derniers ainsi que
              des moyens d’actions à la disposition des individus afin qu’ils
              puissent au mieux exercer leurs droits.
            </p>
            <p>
              Pour toute information complémentaire sur la protection des
              données personnelles, nous vous invitons à consulter le site de
              la&nbsp;
              <a href="https://www.cnil.fr/">CNIL</a>&nbsp;.
            </p>
            <p>
              La poursuite de la navigation sur ce site vaut acceptation sans
              réserve des dispositions et conditions d'utilisation qui suivent.
              La version actuellement en ligne de ces conditions d'utilisation
              est la seule opposable pendant toute la durée d'utilisation du
              site et jusqu'à ce qu'une nouvelle version la remplace.
            </p>
          </Intro>
        </LandingDescription>
      </LandingContent>

      <LandingProductsTitle>
        <LandingLine>
          <div className="line_accueil" />
        </LandingLine>
      </LandingProductsTitle>
    </LandingWrap>
  );
}

export default Landing;
