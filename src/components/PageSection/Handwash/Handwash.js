import React from "react";
import styled from "styled-components";
import { albraSans, baliviaRegular, cabinMedium } from "../../Common";
import blueberry from "../../../../src/assets/img/handwash/blueberry.webp";
import mango from "../../../../src/assets/img/handwash/mango.webp";
import plum from "../../../../src/assets/img/handwash/plum.webp";
import cranberry from "../../../../src/assets/img/handwash/cranberry.webp";
import "./styles.css";

const mangoColor = "#F8C23A";
const cranberryColor = "#E91D2D";
const blueberryColor = "#54C6E1";
const plumColor = "#BD4B93";

const Container = styled.section`
  height: auto;
  width: 100%;
`;
const Wrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 15vh;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    font-size: 5rem;
    color: #000000;
    font-family: ${albraSans};
    text-transform: uppercase;
  }
  &.img_mango::before {
    /* color: ${mangoColor}; */
    content: "Mango";
    transform: translate(25%, 0);
    left: -5%;
    top: 0%;
  }
  &.img_cranberry::before {
    /* color: ${cranberryColor}; */
    content: "Cranberry";
    left: -5%;
    top: 0%;
    transform: translate(15%, 0);
  }
  &.img_blueberry::before {
    /* color: ${blueberryColor}; */
    content: "Blueberry";
    left: -5%;
    top: 0%;
    transform: translate(15%, 0);
  }
  &.img_plum::before {
    /* color: ${plumColor}; */
    content: "Plum";
    left: -5%;
    top: 0%;
    transform: translate(25%, 0);
  }
`;

const Image = styled.img`
  position: relative;
  height: auto;
  width: 80%;
  max-width: 450px;
`;

const Items = styled.div`
  height: 100vh;
  width: 100%;
  &#mango {
    border: 2px solid ${mangoColor};
  }
  &#cranberry {
    border: 2px solid ${cranberryColor};
  }
  &#blueberry {
    border: 2px solid ${blueberryColor};
  }
  &#plum {
    border: 2px solid ${plumColor};
  }
`;

const ItemContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px 1rem;
`;
const Left = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Right = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProductAbout = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescriptionTitle = styled.div`
  height: auto;
  width: 100%;
  & h1 {
    position: relative;
    font-family: ${baliviaRegular};
    font-weight: 700;
    font-size: 4rem;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    margin-bottom: 5rem;
    text-align: center;

    &.mango_line::before {
      background-color: ${mangoColor};
    }
    &::before {
      position: absolute;
      content: "";
      bottom: -1.5rem;
      width: 112px;
      height: 3px;
      background: #000;
      z-index: 10;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
`;

const DescriptionParagraph = styled.div`
  height: auto;
  width: 100%;
  padding-top: 2rem;
  & p {
    font-family: muli_reg;
    font-size: max(1.5rem, 8px);
    line-height: 2rem;
    text-align: center;
    max-width: 500px;
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
    font-size: max(1.5rem, 9px);
  }
`;
const NumberLinks = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: 2rem;
  column-gap: 1rem;
  & a {
    font-family: ${baliviaRegular};
    font-size: 3.5rem;
    height: fit-content;
  }
  & span {
    position: relative;
    width: 40px;
    height: 2px;
    background: #000;
    top: 5px;
    &.mango_bg {
      background-color: #f8c23a;
    }
    &.cranberry_bg {
      background-color: #e91d2d;
    }
    &.plum_bg {
      background-color: #bd4b93;
    }
    &.blueberry_bg {
      background-color: #54c6e1;
    }
  }
`;

// .lvm_products_content.handwash_reverse {
//   flex-direction: row-reverse;
// }

function Handwash() {
  return (
    <Container>
      <Wrap>

        <Items id="mango">
          <ItemContent>
            <Left>
              {/* <h1>MANGO</h1> */}
              <ImageContainer className="img_mango">
                <Image src={mango} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <div className="lvm_descriptions">
                  <div className="lvm_description_content">
                    <DescriptionTitle>
                      <h1 className="mango_line">Mangue</h1>
                      <Info>
                        <span>500ml</span>
                        <span>•</span>
                        <span>Lave Mains</span>
                      </Info>
                    </DescriptionTitle>

                    <DescriptionParagraph>
                      <p>
                        Ultra Compact vous propose une solution de savon liquide
                        qui rendra le lavage de vos mains agréable avec son
                        parfum aromatisé à la mangue. Il purifiera vos mains de
                        la saleté et les rendra propre et douces.
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
                  </div>
                </div>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Items>

        <Items id="cranberry">
          <ItemContent>
            <Left>
              <ImageContainer className="img_cranberry">
                <Image src={cranberry} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <div className="lvm_descriptions">
                  <div className="lvm_description_content">
                    <DescriptionTitle>
                      <h1 className="cranberry_line">Canneberge</h1>
                      <Info>
                        <span>500ml</span>
                        <span>•</span>
                        <span>Lave Mains</span>
                      </Info>
                    </DescriptionTitle>

                    <DescriptionParagraph>
                      <p>
                        Ultra Compact vous propose une solution de savon liquide
                        qui rendra le lavage de vos mains agréable avec son
                        parfum aromatisé à la mangue. Il purifiera vos mains de
                        la saleté et les rendra propre et douces.
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
                  </div>
                </div>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Items>

        <Items id="plum">
          <ItemContent>
            <Left>
              <ImageContainer className="img_plum">
                <Image src={plum} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <div className="lvm_descriptions">
                  <div className="lvm_description_content">
                    <DescriptionTitle>
                      <h1 className="plum_line">Prune</h1>
                      <Info>
                        <span>500ml</span>
                        <span>•</span>
                        <span>Lave Mains</span>
                      </Info>
                    </DescriptionTitle>

                    <DescriptionParagraph>
                      <p>
                        Ultra Compact vous propose une solution de savon liquide
                        qui rendra le lavage de vos mains agréable avec son
                        parfum aromatisé à la mangue. Il purifiera vos mains de
                        la saleté et les rendra propre et douces.
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
                  </div>
                </div>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Items>

        <Items id="blueberry">
          <ItemContent>
            <Left>
              <ImageContainer className="img_blueberry">
                <Image src={blueberry} alt="" />
              </ImageContainer>
            </Left>

            <Right>
              <ProductAbout>
                <div className="lvm_descriptions">
                  <div className="lvm_description_content">
                    <DescriptionTitle>
                      <h1 className="blueberry_line">Myrtille</h1>
                      <Info>
                        <span>500ml</span>
                        <span>•</span>
                        <span>Lave Mains</span>
                      </Info>
                    </DescriptionTitle>

                    <DescriptionParagraph>
                      <p>
                        Ultra Compact vous propose une solution de savon liquide
                        qui rendra le lavage de vos mains agréable avec son
                        parfum aromatisé à la mangue. Il purifiera vos mains de
                        la saleté et les rendra propre et douces.
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
                  </div>
                </div>
              </ProductAbout>
            </Right>
          </ItemContent>
        </Items>

      </Wrap>
    </Container>
  );
}

export default Handwash;
