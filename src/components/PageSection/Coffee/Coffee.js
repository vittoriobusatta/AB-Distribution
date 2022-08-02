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
} from "../../Common";
import setTitle from "../../Function/setTitle";
import FooterCoffee from "./FooterCoffee";
import LandingCoffee from "./LandingCoffee";
import NavbarCoffee from "./NavbarCoffee";
import { Item } from "../PageCommon";
import choco from "./images/choco.webp";
import original from "./images/original.webp";
import vanilla from "./images/vanilla.webp";

const originalColor = "#D66627";
const chocoColor = "#B83C2C";
const vanillaColor = "#3156A3";

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
  max-width: 300px;
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

    &.original_line::before {
      background-color: ${originalColor};
    }
    &.vanilla_line::before {
      background-color: ${vanillaColor};
    }
    &.choco_line::before {
      background-color: ${chocoColor};
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

function Coffee() {
  setTitle("Cafés | AB Distribution");
  return (
    <>
      <NavbarCoffee />
      <LandingCoffee />

      <Wrapper>
        <Item id="original">
          <ItemContent>
            <Left className="img_original">
              <ImageContainer>
                <Image src={original} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="original_line">Original</h2>
                  <Info>
                    <span>250ml</span>
                    <span>•</span>
                    <span>Cafés</span>
                  </Info>
                </DescriptionTitle>

              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="vanilla">
          <ItemContent className="reverse">
            <Left className="img_vanilla">
              <ImageContainer>
                <Image src={vanilla} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="vanilla_line">Vanille</h2>
                  <Info>
                    <span>250ml</span>
                    <span>•</span>
                    <span>Cafés</span>
                  </Info>
                </DescriptionTitle>

              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="choco">
          <ItemContent>
            <Left className="img_choco">
              <ImageContainer>
                <Image src={choco} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="choco_line">Café CHoco</h2>
                  <Info>
                    <span>250ml</span>
                    <span>•</span>
                    <span>Cafés</span>
                  </Info>
                </DescriptionTitle>

              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>
      </Wrapper>

      <FooterCoffee />
    </>
  );
}

export default Coffee;
