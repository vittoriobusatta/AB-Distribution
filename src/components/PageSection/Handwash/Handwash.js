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
import blueberry from "./images/blueberry.webp";
import mango from "./images/mango.webp";
import plum from "./images/plum.webp";
import cranberry from "./images/cranberry.webp";
import LandingHandwash from "./LandingHandwash";
import setTitle from "../../Function/setTitle";
import NavbarHandwash from "./NavbarHandwash";
import FooterHandwash from "./FooterHandwash";
import { Item } from '../PageCommon';

const mangoColor = "#F8C23A";
const cranberryColor = "#E91D2D";
const blueberryColor = "#54C6E1";
const plumColor = "#BD4B93";

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
  max-width: 450px;
  @media screen and (min-width: 1224px) {
    width:auto;
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
  &.img_mango::before {
    color: ${mangoColor};
    content: "Mango";
  }
  &.img_cranberry::before {
    color: ${cranberryColor};
    content: "Cranberry";
  }
  &.img_blueberry::before {
    color: ${blueberryColor};
    content: "Blueberry";
  }
  &.img_plum::before {
    color: ${plumColor};
    content: "Plum";
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

    &.mango_line::before {
      background-color: ${mangoColor};
    }
    &.cranberry_line::before {
      background-color: ${cranberryColor};
    }
    &.plum_line::before {
      background-color: ${plumColor};
    }
    &.blueberry_line::before {
      background-color: ${blueberryColor};
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

    &:hover.mango_color {
      color: ${mangoColor};
    }
    &:hover.cranberry_color {
      color: ${cranberryColor};
    }
    &:hover.plum_color {
      color: ${plumColor};
    }
    &:hover.blueberry_color {
      color: ${blueberryColor};
    }
    &.mango_color {
      color: ${mangoColor};
    }
    &.cranberry_color {
      color: ${cranberryColor};
    }
    &.plum_color {
      color: ${plumColor};
    }
    &.blueberry_color {
      color: ${blueberryColor};
    }
  }

  & span {
    position: relative;
    width: 40px;
    height: 2px;
    background: #000;
    top: 5px;
    &.mango_bg {
      background-color: ${mangoColor};
    }
    &.cranberry_bg {
      background-color: ${cranberryColor};
    }
    &.plum_bg {
      background-color: ${plumColor};
    }
    &.blueberry_bg {
      background-color: ${blueberryColor};
    }
  }
`;


function Handwash() {
  setTitle("Lave Mains | AB Distribution");
  return (
    <>
      <NavbarHandwash />
      <LandingHandwash />

      <Wrapper>
        <Item id="mango">
          <ItemContent>
            <Left className="img_mango">
              <ImageContainer>
                <Image src={mango} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="mango_line">Mangue</h2>
                  <Info>
                    <span>500ml</span>
                    <span>•</span>
                    <span>Lave Mains</span>
                  </Info>
                </DescriptionTitle>

                <DescriptionParagraph>
                  <p>
                    Ultra Compact vous propose une solution de savon liquide qui
                    rendra le lavage de vos mains agréable avec son parfum
                    aromatisé à la mangue. Il purifiera vos mains de la saleté
                    et les rendra propre et douces.
                  </p>
                </DescriptionParagraph>

                <NumberLinks>
                  <a className="mango_color" href="#blueberry">
                    04
                  </a>
                  <span className="mango_bg"></span>
                  <a className="mango_color" href="#cranberry">
                    02
                  </a>
                </NumberLinks>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="cranberry">
          <ItemContent className="reverse">
            <Left className="img_cranberry reverse">
              <ImageContainer>
                <Image src={cranberry} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="cranberry_line">Canneberge</h2>
                  <Info>
                    <span>500ml</span>
                    <span>•</span>
                    <span>Lave Mains</span>
                  </Info>
                </DescriptionTitle>

                <DescriptionParagraph>
                  <p>
                    Ultra Compact vous propose une solution de savon liquide qui
                    rendra le lavage de vos mains agréable avec son parfum
                    aromatisé à la canneberge. Il purifiera vos mains de la
                    saleté et les rendra propre et douces.
                  </p>
                </DescriptionParagraph>

                <NumberLinks>
                  <a className="cranberry_color" href="#mango">
                    01
                  </a>
                  <span className="cranberry_bg"></span>
                  <a className="cranberry_color" href="#plum">
                    03
                  </a>
                </NumberLinks>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="plum">
          <ItemContent>
            <Left className="img_plum">
              <ImageContainer>
                <Image src={plum} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="plum_line">Prune</h2>
                  <Info>
                    <span>500ml</span>
                    <span>•</span>
                    <span>Lave Mains</span>
                  </Info>
                </DescriptionTitle>

                <DescriptionParagraph>
                  <p>
                    Ultra Compact vous propose une solution de savon liquide qui
                    rendra le lavage de vos mains agréable avec son parfum
                    aromatisé à la prune. Il purifiera vos mains de la saleté et
                    les rendra propre et douces.
                  </p>
                </DescriptionParagraph>

                <NumberLinks>
                  <a className="plum_color" href="#cranberry">
                    02
                  </a>
                  <span className="plum_bg"></span>
                  <a className="plum_color" href="#blueberry">
                    04
                  </a>
                </NumberLinks>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>

        <Item id="blueberry">
          <ItemContent className="reverse">
            <Left className="img_blueberry reverse">
              <ImageContainer>
                <Image src={blueberry} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <DescriptionTitle>
                  <h2 className="blueberry_line">Myrtille</h2>
                  <Info>
                    <span>500ml</span>
                    <span>•</span>
                    <span>Lave Mains</span>
                  </Info>
                </DescriptionTitle>

                <DescriptionParagraph>
                  <p>
                    Ultra Compact vous propose une solution de savon liquide qui
                    rendra le lavage de vos mains agréable avec son parfum
                    aromatisé à la myrtille. Il purifiera vos mains de la saleté
                    et les rendra propre et douces.
                  </p>
                </DescriptionParagraph>

                <NumberLinks>
                  <a className="blueberry_color" href="#plum">
                    03
                  </a>
                  <span className="blueberry_bg"></span>
                  <a className="blueberry_color" href="#mango">
                    01
                  </a>
                </NumberLinks>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Item>
      </Wrapper>

      <FooterHandwash />
    </>
  );
}

export default Handwash;
