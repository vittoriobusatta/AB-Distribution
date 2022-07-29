import React from "react";
import setTitle from "../../Function/setTitle";
import LandingBodymist from "./LandingBodymist";
import NavbarBodymist from "./NavbarBodymist";
import FooterBodymist from "./FooterBodymist";
import loyalImage from "./images/loyal.webp";
import braveImage from "./images/brave.webp";
import creativeImage from "./images/creative.webp";
import dynamicImage from "./images/dynamic.webp";
import { Item } from "../PageCommon";
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
import styled from "styled-components";

const loyal = "#0088AE";
const dynamic = "#984088";
const creative = "#E7DD08";
const brave = "#CF3911";

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
    &.loyal {
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      background-image: linear-gradient(90deg, rgba(0,137,174,1) 0%, rgba(0,137,174,1) 37%, rgba(0,117,161,1) 78%, rgba(54,91,118,1) 100%);
      &::after {
        content: "La magie des arômes";
        color: #2f5e7b;
      }
    }
    &.brave {
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      background-image: linear-gradient(90deg, rgba(207,57,16,1) 37%, rgba(201,50,20,1) 58%, rgba(167,72,44,1) 78%);
      &::after {
        content: "Une ambiance paisible";
        color: #b24528;
      }
    }
    &.creative {
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      background-image: linear-gradient(90deg, rgba(248,230,75,1) 37%, rgba(205,212,0,1) 58%, rgba(185,205,85,1) 78%);
      &::after {
        content: "Un éveil des sens";
        color: #c0d03b;
      }
    }
    &.dynamic {
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      background-image: linear-gradient(90deg, rgba(212,66,44,1) 4%, rgba(211,23,37,1) 37%, rgba(173,30,92,1) 58%, rgba(158,85,151,1) 78%);;
      &::after {
        content: "Un souffle de pureté";
        color: #cf3911;
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
    &.loyal_line::before {
      background-color: ${loyal};
    }
    &.brave_line::before {
      background-color: ${brave};
    }
    &.creative_line::before {
      background-color: ${creative};
    }
    &.dynamic_line::before {
      background-color: ${dynamic};
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
    &.loyal_active {
      color: #2f5e7b;
    }
    &.loyal_color {
      color: ${loyal};
    }
    &.brave_active {
      color: #b24528;
    }
    &.brave_color {
      color: ${brave};
    }
    &.creative_active {
      color: #c0d03b;
    }
    &.creative_color {
      color: ${creative};
    }
    &.dynamic_active {
      color: #cf3911;
    }
    &.dynamic_color {
      color: ${dynamic};
    }
  }
`;

function Bodymist() {
  setTitle("Brumes Corporelles | AB Distribution");
  return (
    <>
      <NavbarBodymist />
      <LandingBodymist />

      <Wrapper>
        <Item id="loyal">
          <ItemContent>
            <Name>
              <NameContent>
                <h2 className="loyal">La Magie des Arômes</h2>
              </NameContent>
            </Name>
            <Left>
              <ImageContainer>
                <Image src={loyalImage} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="loyal_line">Loyal</h2>
                  <Info>
                    <span>100ml</span>
                    <span>•</span>
                    <span>Brumes Corporelles</span>
                  </Info>
                </DescriptionTitle>

                <DescriptionParagraph>
                  <p>
                    Avec sa senteur orientale de musc blanc très délicate grâce
                    à ses notes de coton et de jasmin, la brume corporelle Loyal
                    laisse un voile odorant fin et durable.
                  </p>
                </DescriptionParagraph>

                <NumberLinks>
                  <a className="loyal_active" href="#loyal">
                    01
                  </a>
                  <a className="loyal_color" href="#brave">
                    02
                  </a>
                  <a className="loyal_color" href="#creative">
                    03
                  </a>
                  <a className="loyal_color" href="#dynamic">
                    04
                  </a>
                </NumberLinks>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="brave">
          <ItemContent>
            <Name>
              <NameContent>
                <h2 className="brave">Une ambiance paisible</h2>
              </NameContent>
            </Name>
            <Left>
              <ImageContainer>
                <Image src={braveImage} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="brave_line">Brave</h2>
                  <Info>
                    <span>100ml</span>
                    <span>•</span>
                    <span>Brumes Corporelles</span>
                  </Info>
                </DescriptionTitle>

                <DescriptionParagraph>
                  <p>
                    Avec sa senteur orientale de musc blanc très délicate grâce
                    à ses notes de coton et de jasmin, la brume corporelle Brave
                    laisse un voile odorant fin et durable.
                  </p>
                </DescriptionParagraph>

                <NumberLinks>
                  <a className="brave_color" href="#loyal">
                    01
                  </a>
                  <a className="brave_active" href="#brave">
                    02
                  </a>
                  <a className="brave_color" href="#creative">
                    03
                  </a>
                  <a className="brave_color" href="#dynamic">
                    04
                  </a>
                </NumberLinks>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="creative">
          <ItemContent>
            <Name>
              <NameContent>
                <h2 className="creative">Un éveil des sens</h2>
              </NameContent>
            </Name>
            <Left>
              <ImageContainer>
                <Image src={creativeImage} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="creative_line">Creative</h2>
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
                    Creative laisse un voile odorant fin et durable.
                  </p>
                </DescriptionParagraph>

                <NumberLinks>
                  <a className="creative_color" href="#loyal">
                    01
                  </a>
                  <a className="creative_color" href="#brave">
                    02
                  </a>
                  <a className="creative_active" href="#creative">
                    03
                  </a>
                  <a className="creative_color" href="#dynamic">
                    04
                  </a>
                </NumberLinks>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="dynamic">
          <ItemContent>
          <Name>
              <NameContent>
                <h2 className="dynamic">Un souffle de pureté</h2>
              </NameContent>
            </Name>
            <Left>
              <ImageContainer>
                <Image src={dynamicImage} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="dynamic_line">Dynamic</h2>
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
                    Dynamic laisse un voile odorant fin et durable.
                  </p>
                </DescriptionParagraph>

                <NumberLinks>
                  <a className="dynamic_color" href="#loyal">
                    01
                  </a>
                  <a className="dynamic_color" href="#brave">
                    02
                  </a>
                  <a className="dynamic_color" href="#creative">
                    03
                  </a>
                  <a className="dynamic_active" href="#dynamic">
                    04
                  </a>
                </NumberLinks>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>
      </Wrapper>

      <FooterBodymist />
    </>
  );
}

export default Bodymist;
