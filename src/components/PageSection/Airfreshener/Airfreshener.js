import React from "react";
import setTitle from "../../Function/setTitle";
import LandingAirfreshener from "../Airfreshener/LandingAirfreshener";
import NavbarAirfreshener from "../Airfreshener/NavbarAirfreshener";
import FooterAirfreshener from "./FooterAirfreshener";
import flowerGardenImage from "./images/flower_garden.webp";
import glamourFruitsImage from "./images/glamour_fruits.webp";
import oceanImage from "./images/ocean.webp";
import tobaccoImage from "./images/tobacco.webp";
import whiteRoseImage from "./images/white_rose.webp";
import wildLavenderImage from "./images/wild_lavender.webp";
import mysticOudImage from "./images/mystic_oud.webp";
import greenTeaImage from "./images/green_tea.webp";

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

const whiteRose = "#F7CDE1";
const wildLavender = "#734F99";
const greenTea = "#C7D881";
const mysticOud = "#7F5027";
const flowerGarden = "#74B643";
const glamourFruits = "#EB7223";
const ocean = "#008BD0";
const tobacco = "#9DC3DD";

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
    max-width: 100px;
    & span {
      font-size: 10rem;
      color: transparent;
      &.flowerGarden {
        -webkit-text-stroke: 1px ${flowerGarden};
      }
      &.glamourFruits {
        -webkit-text-stroke: 1px ${glamourFruits};
      }
      &.ocean {
        -webkit-text-stroke: 1px ${ocean};
      }
      &.tobacco {
        -webkit-text-stroke: 1px ${tobacco};
      }
      &.greenTea {
        -webkit-text-stroke: 1px ${greenTea};
      }
      &.mysticOud {
        -webkit-text-stroke: 1px ${mysticOud};
      }
      &.wildLavender {
        -webkit-text-stroke: 1px ${wildLavender};
      }
      &.whiteRose {
        -webkit-text-stroke: 1px ${whiteRose};
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
      background-color: ${flowerGarden};
    }
    &.glamourFruits_line::before {
      background-color: ${glamourFruits};
    }
    &.ocean_line::before {
      background-color: ${ocean};
    }
    &.tobacco_line::before {
      background-color: ${tobacco};
    }
    &.greenTea_line::before {
      background-color: ${greenTea};
    }
    &.mysticOud_line::before {
      background-color: ${mysticOud};
    }
    &.wildLavender_line::before {
      background-color: ${wildLavender};
    }
    &.whiteRose_line::before {
      background-color: ${whiteRose};
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

function Airfreshener() {
  setTitle("Désodorisants | AB Distribution");

  return (
    <>
      <NavbarAirfreshener />
      <LandingAirfreshener />

      <Wrapper>
        <Item id="greenTea">
          <ItemContent>
            <Name>
              <NameContent>
                <h2>
                  Tea <span className="greenTea">Green</span>
                </h2>
              </NameContent>
            </Name>
            <Left>
              <ImageContainer>
                <Image src={greenTeaImage} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="greenTea_line">Thé Vert</h2>
                  <Info>
                    <span>250ml</span>
                    <span>•</span>
                    <span>Désodorisants</span>
                  </Info>
                </DescriptionTitle>

                <DescriptionParagraph>
                  <p>
                  It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsu.
                  </p>
                </DescriptionParagraph>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="mysticOud">
          <ItemContent>
            <Name>
              <NameContent>
                <h2>
                  Oud <span className="mysticOud">Mystic</span>
                </h2>
              </NameContent>
            </Name>
            <Left>
              <ImageContainer>
                <Image src={mysticOudImage} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="mysticOud_line">Oud Mystique</h2>
                  <Info>
                    <span>250ml</span>
                    <span>•</span>
                    <span>Désodorisants</span>
                  </Info>
                </DescriptionTitle>

                <DescriptionParagraph>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsu.
                  </p>
                </DescriptionParagraph>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="wildLavender">
          <ItemContent>
            <Name>
              <NameContent>
                <h2>
                  Wild <span className="wildLavender">Lavender</span>
                </h2>
              </NameContent>
            </Name>
            <Left>
              <ImageContainer>
                <Image src={wildLavenderImage} alt="" />
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

                <DescriptionParagraph>
                  <p>
                  It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsu.
                  </p>
                </DescriptionParagraph>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="whiteRose">
          <ItemContent>
            <Name>
              <NameContent>
                <h2>
                  Rose <br/> <span className="whiteRose">White</span>
                </h2>
              </NameContent>
            </Name>
            <Left>
              <ImageContainer>
                <Image src={whiteRoseImage} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="whiteRose_line">Rose Noire</h2>
                  <Info>
                    <span>250ml</span>
                    <span>•</span>
                    <span>Désodorisants</span>
                  </Info>
                </DescriptionTitle>

                <DescriptionParagraph>
                  <p>
                  It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsu.
                  </p>
                </DescriptionParagraph>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="flowerGarden">
          <ItemContent>
            <Name>
              <NameContent>
                <h2>
                  Flower <span className="flowerGarden">Garden</span>
                </h2>
              </NameContent>
            </Name>
            <Left>
              <ImageContainer>
                <Image src={flowerGardenImage} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="flowerGarden_line">Jardin Floral</h2>
                  <Info>
                    <span>250ml</span>
                    <span>•</span>
                    <span>Désodorisants</span>
                  </Info>
                </DescriptionTitle>

                <DescriptionParagraph>
                  <p>
                  It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsu.
                  </p>
                </DescriptionParagraph>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="glamourFruits">
          <ItemContent>
            <Name>
              <NameContent>
                <h2>
                  Fruits <span className="glamourFruits">Glamour</span>
                </h2>
              </NameContent>
            </Name>
            <Left>
              <ImageContainer>
                <Image src={glamourFruitsImage} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="glamourFruits_line">Fruits Glamour</h2>
                  <Info>
                    <span>250ml</span>
                    <span>•</span>
                    <span>Désodorisants</span>
                  </Info>
                </DescriptionTitle>

                <DescriptionParagraph>
                  <p>
                  It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsu.
                  </p>
                </DescriptionParagraph>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="ocean">
          <ItemContent>
            <Name>
              <NameContent>
                <h2>
                  The <span className="ocean">Ocean</span>
                </h2>
              </NameContent>
            </Name>
            <Left>
              <ImageContainer>
                <Image src={oceanImage} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="ocean_line">Océan</h2>
                  <Info>
                    <span>250ml</span>
                    <span>•</span>
                    <span>Désodorisants</span>
                  </Info>
                </DescriptionTitle>

                <DescriptionParagraph>
                  <p>
                  It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsu.
                  </p>
                </DescriptionParagraph>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="tobacco">
          <ItemContent>
            <Name>
              <NameContent>
                <h2>
                  Anti<span className="tobacco"> Tobacco</span>
                </h2>
              </NameContent>
            </Name>
            <Left>
              <ImageContainer>
                <Image src={tobaccoImage} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="tobacco_line">Anti Tabac</h2>
                  <Info>
                    <span>250ml</span>
                    <span>•</span>
                    <span>Désodorisants</span>
                  </Info>
                </DescriptionTitle>

                <DescriptionParagraph>
                  <p>
                  It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsu.
                  </p>
                </DescriptionParagraph>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>
      </Wrapper>

      <FooterAirfreshener />
    </>
  );
}

export default Airfreshener;
