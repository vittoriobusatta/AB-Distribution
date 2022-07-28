import React from "react";
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
  textHover,
} from "../../Common";
import setTitle from "../../Function/setTitle";
import FooterPerfume from "./FooterPerfume";
import LandingPerfume from "./LandingPerfume";
import NavbarPerfume from "./NavbarPerfume";
import { Item } from "../PageCommon";

import cachemereImage from "./images/cachemere.png";
import rainbowImage from "./images/rainbow.png";
import sandalwoodImage from "./images/sandalwood.png";
import roseblackImage from "./images/roseblack.png";

const cachemere = "#5DA245";
const roseblack = "#EFA2AC";
const sandalwood = "#D4142C";
const rainbow = "#EA597B";

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
  align-items: center;
  flex-direction: column;
  padding: 0px 2rem;
  @media screen and (min-width: 1224px) {
    flex-direction: row;
    max-width: 1500px;
    &.reverse {
      flex-direction: row-reverse;
    }
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
    font-size: clamp(20px, 7rem, 100px);
    font-family: ${albraSans};
    text-transform: uppercase;
    width: fit-content;
    position: relative;
    &::after {
      text-transform: none;
      position: absolute;
      font-size: clamp(20px, 4rem, 100px);
      bottom: max(-5rem, -40px);
      left: 3rem;
    }
    &.cachemere {
      color: ${cachemere};
      &::after {
        content: "La magie des arômes";
        color: #F0B938;
      }
    }
    &.rainbow {
      color: ${rainbow};
      &::after {
        content: "Une ambiance paisible";
        color: #F79974;
      }
    }
    &.sandalwood {
      color: ${sandalwood};
      &::after {
        content: "Un éveil des sens";
        color: #2A255D;
      }
    }
    &.roseblack {
      color: ${roseblack};
      &::after {
        content: "Un souffle de pureté";
        color: #B5ABC8;
      }
    }
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

const ImageContainer = styled.div`
  position: relative;
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  @media screen and (min-width: 1224px) {
    margin: 0;
  }
`;
const Image = styled.img`
  position: relative;
  height: auto;
  width: 80%;
  max-width: 450px;
  @media screen and (min-width: 1224px) {
    width: auto;
    height: 100%;
    max-width: 550px;
  }
`;

const Left = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;

  @media screen and (min-width: 1224px) {
    width: 50%;
    height: 100%;
    &.reverse::before {
      left: -100%;
    }
  }

  &::before {
    position: absolute;
    content: "";
    font-size: max(5rem, 40px);
    font-family: ${albraSans};
    text-transform: uppercase;
    left: 0%;
    top: 0%;
    @media screen and (min-width: 576px) {
      font-size: 8rem;
    }
    @media screen and (min-width: 768px) {
      font-size: 9rem;
    }
    @media screen and (min-width: 992px) {
      font-size: 10rem;
    }
    @media screen and (min-width: 1224px) {
      font-size: 11rem;
      left: 100%;
    }
  }
`;
const Right = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1224px) {
    width: 50%;
    height: 100%;
    min-height: 550px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;

const ProductAbout = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const DescriptionTitle = styled.div`
  height: auto;
  width: 100%;
  & h2 {
    position: relative;
    font-family: ${baliviaRegular};
    font-weight: 700;
    font-size: ${sizeH2};
    letter-spacing: 0.03em;
    text-transform: uppercase;
    margin-bottom: max(5rem, 40px);
    text-align: center;
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
    }
    &.cachemere_line::before {
      background-color: ${cachemere};
    }
    &.rainbow_line::before {
      background-color: ${rainbow};
    }
    &.sandalwood_line::before {
      background-color: ${sandalwood};
    }
    &.roseblack_line::before {
      background-color: ${roseblack};
    }
  }
`;
const DescriptionParagraph = styled.div`
  height: auto;
  width: 100%;
  padding-top: max(4rem, 25px);
  display: flex;
  justify-content: center;
  & p {
    font-family: ${cabinRegular};
    font-size: ${sizeP};
    line-height: ${lineheightP};
    text-align: center;
    padding: 0 10px;
    max-width: 700px;
    @media screen and (min-width: 1224px) {
      line-height: 3rem;
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
  }
`;
const NumberLinks = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: max(3rem, 15px);
  column-gap: 10px;
  & a {
    font-family: ${baliviaRegular};
    font-size: max(3.5rem, 25px);
    transition: ${textHover};
    &.cachemere_active {
      color: #F0B938;
    }
    &.cachemere_color {
      color: ${cachemere};
    }
    &.rainbow_active {
      color: #F79974;
    }
    &.rainbow_color {
      color: ${rainbow};
    }
    &.sandalwood_active {
      color: #2A255D;
    }
    &.sandalwood_color {
      color: ${sandalwood};
    }
    &.roseblack_active {
      color: #B5ABC8;
    }
    &.roseblack_color {
      color: ${roseblack};
    }
  }
`;

function Perfume() {
  setTitle("Parfums | AB Distribution");
  return (
    <>
      <NavbarPerfume />
      <LandingPerfume />

      <Wrapper>
        <Item id="cachemere">
          <ItemContent>
            <Name>
              <NameContent>
                <h2 className="cachemere">La Magie des Arômes</h2>
              </NameContent>
            </Name>
            <Left>
              <ImageContainer>
                <Image src={cachemereImage} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="cachemere_line">cachemere</h2>
                  <Info>
                    <span>100ml</span>
                    <span>•</span>
                    <span>Brumes Corporelles</span>
                  </Info>
                </DescriptionTitle>

                <DescriptionParagraph>
                  <p>
                    Avec sa senteur orientale de musc blanc très délicate grâce
                    à ses notes de coton et de jasmin, la brume corporelle cachemere
                    laisse un voile odorant fin et durable.
                  </p>
                </DescriptionParagraph>

                <NumberLinks>
                  <a className="cachemere_active" href="#cachemere">
                    01
                  </a>
                  <a className="cachemere_color" href="#rainbow">
                    02
                  </a>
                  <a className="cachemere_color" href="#sandalwood">
                    03
                  </a>
                  <a className="cachemere_color" href="#roseblack">
                    04
                  </a>
                </NumberLinks>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="rainbow">
          <ItemContent>
            <Name>
              <NameContent>
                <h2 className="rainbow">Une ambiance paisible</h2>
              </NameContent>
            </Name>
            <Left>
              <ImageContainer>
                <Image src={rainbowImage} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="rainbow_line">rainbow</h2>
                  <Info>
                    <span>100ml</span>
                    <span>•</span>
                    <span>Brumes Corporelles</span>
                  </Info>
                </DescriptionTitle>

                <DescriptionParagraph>
                  <p>
                    Avec sa senteur orientale de musc blanc très délicate grâce
                    à ses notes de coton et de jasmin, la brume corporelle rainbow
                    laisse un voile odorant fin et durable.
                  </p>
                </DescriptionParagraph>

                <NumberLinks>
                  <a className="rainbow_color" href="#cachemere">
                    01
                  </a>
                  <a className="rainbow_active" href="#rainbow">
                    02
                  </a>
                  <a className="rainbow_color" href="#sandalwood">
                    03
                  </a>
                  <a className="rainbow_color" href="#roseblack">
                    04
                  </a>
                </NumberLinks>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="sandalwood">
          <ItemContent>
            <Name>
              <NameContent>
                <h2 className="sandalwood">Un éveil des sens</h2>
              </NameContent>
            </Name>
            <Left>
              <ImageContainer>
                <Image src={sandalwoodImage} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="sandalwood_line">sandalwood</h2>
                  <Info>
                    <span>100ml</span>
                    <span>•</span>
                    <span>Brumes Corporelles</span>
                  </Info>
                </DescriptionTitle>

                <DescriptionParagraph>
                  <p>
                    Avec sa senteur orientale de musc blanc très délicate grâce
                    à ses notes de coton et de jasmin, la brume corporelle
                    sandalwood laisse un voile odorant fin et durable.
                  </p>
                </DescriptionParagraph>

                <NumberLinks>
                  <a className="sandalwood_color" href="#cachemere">
                    01
                  </a>
                  <a className="sandalwood_color" href="#rainbow">
                    02
                  </a>
                  <a className="sandalwood_active" href="#sandalwood">
                    03
                  </a>
                  <a className="sandalwood_color" href="#roseblack">
                    04
                  </a>
                </NumberLinks>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="roseblack">
          <ItemContent>
            <Name>
              <NameContent>
                <h2 className="roseblack">Un souffle de pureté</h2>
              </NameContent>
            </Name>
            <Left>
              <ImageContainer>
                <Image src={roseblackImage} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="roseblack_line">roseblack</h2>
                  <Info>
                    <span>100ml</span>
                    <span>•</span>
                    <span>Brumes Corporelles</span>
                  </Info>
                </DescriptionTitle>

                <DescriptionParagraph>
                  <p>
                    Avec sa senteur orientale de musc blanc très délicate grâce
                    à ses notes de coton et de jasmin, la brume corporelle
                    roseblack laisse un voile odorant fin et durable.
                  </p>
                </DescriptionParagraph>

                <NumberLinks>
                  <a className="roseblack_color" href="#cachemere">
                    01
                  </a>
                  <a className="roseblack_color" href="#rainbow">
                    02
                  </a>
                  <a className="roseblack_color" href="#sandalwood">
                    03
                  </a>
                  <a className="roseblack_active" href="#roseblack">
                    04
                  </a>
                </NumberLinks>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>
      </Wrapper>

      <FooterPerfume />
    </>
  );
}

export default Perfume;
