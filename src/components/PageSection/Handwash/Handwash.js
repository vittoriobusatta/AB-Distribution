import React from "react";
import styled from "styled-components";
import {
  albraSans,
  baliviaRegular,
  cabinMedium,
  cabinRegular,
  lineheightP,
  sizeH2,
  sizeP,
  textHover,
} from "../../Common";
import blueberry from "../../../../src/assets/img/handwash/blueberry.webp";
import mango from "../../../../src/assets/img/handwash/mango.webp";
import plum from "../../../../src/assets/img/handwash/plum.webp";
import cranberry from "../../../../src/assets/img/handwash/cranberry.webp";
import LandingHandwash from "./LandingHandwash";
import setTitle from "../../Function/setTitle";
import NavbarHandwash from "./NavbarHandwash";
import { Item } from "../Products/ProductsCommon";

const mangoColor = "#F8C23A";
const cranberryColor = "#E91D2D";
const blueberryColor = "#54C6E1";
const plumColor = "#BD4B93";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ItemContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px 2rem;
`;


const ImageContainer = styled.div`
  position: relative;
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;
const Image = styled.img`
  position: relative;
  height: auto;
  width: 80%;
  max-width: 450px;
`;

const Left = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    font-size: max(5rem, 40px);
    font-family: ${albraSans};
    text-transform: uppercase;
    left: 0%;
    top: 0%;
    @media screen and (max-width: 350px) {
      font-size: 3.5rem;
    }
    @media screen and (min-width: 650px) {
      font-size: 7rem;
    }
    @media screen and (min-width: 850px) {
      font-size: 8rem;
    }
    @media screen and (min-width: 1100px) {
      font-size: 9rem;
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
      bottom: -1.5rem;
      width: 82px;
      height: 2px;
      background: #000;
      z-index: 10;
      left: 50%;
      transform: translate(-50%, 0);
      @media screen and (min-width: 650px) {
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
      color: #ffd365;
    }
    &:hover.cranberry_color {
      color: #df3946;
    }
    &:hover.plum_color {
      color: #cf73ad;
    }
    &:hover.blueberry_color {
      color: #91eaff;
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

// .lvm_products_content.handwash_reverse {
//   flex-direction: row-reverse;
//

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
          <ItemContent>
            <Left className="img_cranberry">
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
          <ItemContent>
            <Left className="img_blueberry">
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
    </>
  );
}

export default Handwash;
