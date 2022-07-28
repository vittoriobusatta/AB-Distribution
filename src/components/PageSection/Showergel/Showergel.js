import React from "react";
import setTitle from "../../Function/setTitle";
import LandingShowergel from "./LandingShowergel";
import NavbarShowergel from "./NavbarShowergel";
import FooterShowergel from "./FooterShowergel";
import styled from "styled-components";
import {
  albraSans,
  baliviaRegular,
  cabinMedium,
  cabinRegular,
  lineheightP,
  mainColor,
  sizeH2,
  sizeP,
} from "../../Common";
import { Item } from "../PageCommon";
import roseImage from "./images/romantic-rose.png";
import passionImage from "./images/passion-fruits.png";
import amberImage from "./images/amber-oud.png";

export const rose = "#F8ACB9";
export const amber = "#FF9E54";
export const passion = "#8832CC";

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 3;
  background-color: ${mainColor};
  margin-bottom: 170px;
`;
const ItemContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 3;
  background-color: ${mainColor};
  max-width: 1700px;
  &#rose {
    background-color: ${rose};
  }
  &#amber {
    background-color: ${amber};
  }
  &#passion {
    background-color: ${passion};
  }
  @media screen and (min-width: 1224px) {
    flex-direction: row;
    /* padding: 0 50px; */
  }
`;

export const Name = styled.div`
  height: 10%;
  width: 100%;
  @media screen and (min-width: 1224px) {
    width: 27.5%;
    height: 700px;
  }
`;

export const NameContent = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 3rem;
  & h2 {
    color: ${mainColor};
    font-size: clamp(35px, 10rem, 100px);
    font-family: ${albraSans};
    text-transform: uppercase;
    width: fit-content;
  }
  @media screen and (min-width: 1224px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    & h2 {
      line-height: 100px;
    }
  }
`;

export const Overview = styled.div`
  height: 70%;
  width: 100%;
  min-height: 40rem;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 576px) {
    margin: 80px 0;
  }
  @media screen and (min-width: 1224px) {
    height: 100%;
    width: 45%;
    margin: 80px 40px;
  }
`;

export const OverviewContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  @media screen and (min-width: 768px) {
    max-width: 550px;
  }
  @media screen and (min-width: 1224px) {
    max-width: 750px;
  }
`;
export const Image = styled.img`
  height: auto;
  width: 100%;
`;

export const Description = styled.div`
  height: 20%;
  width: 100%;
  margin-bottom: 60px;
  @media screen and (min-width: 1224px) {
    height: 100%;
    width: 27.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20%;
  }
`;

const DescriptionTitle = styled.div`
  height: auto;
  width: 100%;
  @media screen and (min-width: 1224px) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  & h2 {
    position: relative;
    font-family: ${baliviaRegular};
    font-weight: 700;
    font-size: ${sizeH2};
    letter-spacing: 0.03em;
    text-transform: uppercase;
    margin-bottom: max(5rem, 40px);
    text-align: center;
    color: ${mainColor};
    @media screen and (min-width: 1224px) {
      text-align: left;
    }

    &.line::before {
      background-color: ${mainColor};
    }

    &::before {
      position: absolute;
      content: "";
      bottom: -15px;
      width: 82px;
      height: 2px;
      background: #000;
      z-index: 10;
      left: 50%;
      transform: translate(-50%, 0);
      @media screen and (min-width: 576px) {
        height: 3px;
      }
      @media screen and (min-width: 1224px) {
        left: 0;
        transform: translate(0%, 0);
        width: 112px;
      }
    }
  }
`;
const DescriptionParagraph = styled.div`
  height: auto;
  width: 100%;
  padding-top: max(3rem, 25px);
  display: flex;
  justify-content: center;
  & p {
    font-family: ${cabinRegular};
    font-size: ${sizeP};
    line-height: ${lineheightP};
    text-align: center;
    padding: 0 10px;
    max-width: 700px;
    color: ${mainColor};
    @media screen and (min-width: 1224px) {
      line-height: 2.3rem;
      text-align: left;
      padding: 0;
    }
  }
`;
const Info = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  & span {
    font-family: ${cabinMedium};
    font-size: ${sizeP};
    color: ${mainColor};
  }
  @media screen and (min-width: 1224px) {
    justify-content: flex-start;
  }
`;

function Showergel() {
  setTitle("Gels Douches | AB Distribution");
  return (
    <>
      <NavbarShowergel />
      <LandingShowergel />
      <Wrapper>
        <Item>
          <ItemContent id="rose">
            <Name>
              <NameContent>
                <h2>Romantic Rose</h2>
              </NameContent>
            </Name>

            <Overview>
              <OverviewContent>
                <Image src={roseImage} alt="" />
              </OverviewContent>
            </Overview>

            <Description>
              <DescriptionTitle>
                <h2 className="line">Rose Romantique</h2>
                <Info>
                  <span>500ml</span>
                  <span>•</span>
                  <span>Gels Douches</span>
                </Info>
              </DescriptionTitle>

              <DescriptionParagraph>
                <p>
                  Ultra Compact vous propose une solution de savon liquide qui
                  rendra le lavage de vos mains agréable avec son parfum
                  aromatisé à la mangue. Il purifiera vos mains de la saleté et
                  les rendra propre et douces.
                </p>
              </DescriptionParagraph>
            </Description>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent id="amber">
            <Name>
              <NameContent>
                <h2>Amber & Oud</h2>
              </NameContent>
            </Name>
            <Overview>
              <OverviewContent>
                <Image src={amberImage} alt="" />
              </OverviewContent>
            </Overview>
            <Description>
              <DescriptionTitle>
                <h2 className="line">Ambre & Oud</h2>
                <Info>
                  <span>500ml</span>
                  <span>•</span>
                  <span>Gels Douches</span>
                </Info>
              </DescriptionTitle>

              <DescriptionParagraph>
                <p>
                  Ultra Compact vous propose une solution de savon liquide qui
                  rendra le lavage de vos mains agréable avec son parfum
                  aromatisé à la mangue. Il purifiera vos mains de la saleté et
                  les rendra propre et douces.
                </p>
              </DescriptionParagraph>
            </Description>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent id="passion">
            <Name>
              <NameContent>
                <h2>Passion of Fruits</h2>
              </NameContent>
            </Name>
            <Overview>
              <OverviewContent>
                <Image src={passionImage} alt="" />
              </OverviewContent>
            </Overview>
            <Description>
              <DescriptionTitle>
                <h2 className="line">Passion de Fruits</h2>
                <Info>
                  <span>500ml</span>
                  <span>•</span>
                  <span>Gels Douches</span>
                </Info>
              </DescriptionTitle>

              <DescriptionParagraph>
                <p>
                  Ultra Compact vous propose une solution de savon liquide qui
                  rendra le lavage de vos mains agréable avec son parfum
                  aromatisé à la mangue. Il purifiera vos mains de la saleté et
                  les rendra propre et douces.
                </p>
              </DescriptionParagraph>
            </Description>
          </ItemContent>
        </Item>
      </Wrapper>
      <FooterShowergel />
    </>
  );
}

export default Showergel;
