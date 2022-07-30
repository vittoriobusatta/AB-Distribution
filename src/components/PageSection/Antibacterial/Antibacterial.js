import React from "react";
import setTitle from "../../Function/setTitle";
import LandingAntibacterial from "./LandingAntibacterial";
import NavbarAntibacterial from "./NavbarAntibacterial";
import FooterAntibacterial from "./FooterAntibacterial";
import { Item } from "../PageCommon";
import gel2Image from "./images/gel2.png";
import gel1Image from "./images/gel1.png";
import wipe1Image from "./images/wipe1.png";
import wipe2Image from "./images/wipe2.png";
import wipe3Image from "./images/wipe3.png";
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
import styled from "styled-components";

const medicalBlue = "#48B8B3";
const lemonGreen = "#B8DC40";

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
    position: relative;
    color: ${medicalBlue};
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
  max-width: 260px;
  @media screen and (min-width: 1224px) {
    width: auto;
    height: 100%;
    max-width: 450px;
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
    &.flowerGarden_line::before {
      background-color: ${lemonGreen};
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

function Antibacterial() {
  setTitle("Anti-Bactérien | AB Distribution");
  return (
    <>
      <NavbarAntibacterial />
      <LandingAntibacterial />

      <Wrapper>
        <Item id="gel1">
          <ItemContent>
            <Name>
              <NameContent>
                <h2>
                  Gels <br /> antibactériens
                </h2>
              </NameContent>
            </Name>
            <Left>
              <ImageContainer>
                <Image src={gel1Image} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <Info>
                    <span>250ml</span>
                    <span>•</span>
                    <span>Désodorisants</span>
                  </Info>
                </DescriptionTitle>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="mysticOud">
          <ItemContent>
            <Left>
              <ImageContainer>
                <Image src={gel2Image} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <Info>
                    <span>250ml</span>
                    <span>•</span>
                    <span>Désodorisants</span>
                  </Info>
                </DescriptionTitle>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="wildLavender">
          <ItemContent>
            <Name>
              <NameContent>
                <h2>
                  Lingettes <br /> anti-bactériennes
                </h2>
              </NameContent>
            </Name>
            <Left>
              <ImageContainer>
                <Image src={wipe1Image} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="wildLavender_line">Lavende sauvage</h2>
                  <Info>
                    <span>250ml</span>
                    <span>•</span>
                    <span>Désodorisants</span>
                  </Info>
                </DescriptionTitle>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="whiteRose">
          <ItemContent>
            <Left>
              <ImageContainer>
                <Image src={wipe2Image} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <Info>
                    <span>250ml</span>
                    <span>•</span>
                    <span>Désodorisants</span>
                  </Info>
                </DescriptionTitle>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="flowerGarden">
          <ItemContent>
            <Left>
              <ImageContainer>
                <Image src={wipe3Image} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <Info>
                    <span>250ml</span>
                    <span>•</span>
                    <span>Désodorisants</span>
                  </Info>
                </DescriptionTitle>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>
      </Wrapper>

      <FooterAntibacterial />
    </>
  );
}

export default Antibacterial;
