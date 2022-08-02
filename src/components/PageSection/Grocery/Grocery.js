import React from "react";
import setTitle from "../../Function/setTitle";
import FooterGocery from "./FooterGocery";
import LandingGrocery from "./LandingGrocery";
import NavbarGrocery from "./NavbarGrocery";
import apricotJamImage from "./images/apricotjam.webp";
import greenPepperImage from "./images/greenpepper.webp";
import redBeansImage from "./images/redbeans.webp";
import strawberrryJamImage from "./images/strawberrryjam.webp";
import whiteBeansImage from "./images/whitebeans.webp";
import jamOrangeMobile from "./images/jamorange_mobile.webp";
import jamRedMobile from "./images/jamred_mobile.webp";
import picklesMobile from "./images/pickles_mobile.webp";
import whiteBeansMobile from "./images/wbeans_mobile.webp";
import redBeansMobile from "./images/rbeans_mobile.webp";

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
} from "../../Common";
import styled from "styled-components";

const apricotjam = "#DC891A";
const whitebeans = "#EABA8C";
const redbeans = "#BD4336";
const strawberrryjam = "#CF2120";
const greenpepper = "#A0CB79";

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
  justify-content: center;
  align-items: center;
  margin: 3rem;
  & img {
    height: auto;
    width: 80%;
    max-width: 200px;
  }
  & h2 {
    font-size: clamp(20px, 7rem, 100px);
    font-family: ${albraSans};
    text-transform: uppercase;
    position: relative;
    max-width: 100px;
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
  max-width: 330px;
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
    &.apricotjam_line::before {
      background-color: ${apricotjam};
    }
    &.whitebeans_line::before {
      background-color: ${whitebeans};
    }
    &.strawberrryjam_line::before {
      background-color: ${strawberrryjam};
    }
    &.redbeans_line::before {
      background-color: ${redbeans};
    }
    &.greenpepper_line::before {
      background-color: ${greenpepper};
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

function Grocery() {
  setTitle("Épicerie | AB Distribution");
  return (
    <>
      <NavbarGrocery />
      <LandingGrocery />

      <Wrapper>
        <Item id="redbeans">
          <ItemContent>
            <Name>
              <NameContent>
                <img src={redBeansMobile} alt="" />
              </NameContent>
            </Name>
            <Left>
              <ImageContainer>
                <Image src={redBeansImage} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="redbeans_line">Haricots Rouges</h2>
                  <Info>
                    <span>800g</span>
                    <span>•</span>
                    <span>Épicerie</span>
                  </Info>
                </DescriptionTitle>

              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="whitebeans">
          <ItemContent>
            <Name>
              <NameContent>
                <img src={whiteBeansMobile} alt="" />
              </NameContent>
            </Name>
            <Left>
              <ImageContainer>
                <Image src={whiteBeansImage} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="whitebeans_line">Haricots blancs</h2>
                  <Info>
                    <span>800g</span>
                    <span>•</span>
                    <span>Épicerie</span>
                  </Info>
                </DescriptionTitle>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="greenpepper">
          <ItemContent>
            <Name>
              <NameContent>
                <img src={picklesMobile} alt="" />
              </NameContent>
            </Name>
            <Left>
              <ImageContainer>
                <Image src={greenPepperImage} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="greenpepper_line">Piments Confis</h2>
                  <Info>
                    <span>335g</span>
                    <span>•</span>
                    <span>Épicerie</span>
                  </Info>
                </DescriptionTitle>

              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="strawberrryjam">
          <ItemContent>
            <Name>
              <NameContent>
                <img src={jamRedMobile} alt="" />
              </NameContent>
            </Name>
            <Left>
              <ImageContainer>
                <Image src={strawberrryJamImage} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="strawberrryjam_line">Confiture de Fraise</h2>
                  <Info>
                    <span>380g</span>
                    <span>•</span>
                    <span>Épicerie</span>
                  </Info>
                </DescriptionTitle>

              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="apricotjam">
          <ItemContent>
            <Name>
              <NameContent>
                <img src={jamOrangeMobile} alt="" />
              </NameContent>
            </Name>
            <Left>
              <ImageContainer>
                <Image src={apricotJamImage} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="apricotjam_line">Confiture d'Abricot</h2>
                  <Info>
                    <span>380g</span>
                    <span>•</span>
                    <span>Épicerie</span>
                  </Info>
                </DescriptionTitle>

              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>
      </Wrapper>
      <FooterGocery />
    </>
  );
}

export default Grocery;
