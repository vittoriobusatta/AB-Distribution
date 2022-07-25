import React from "react";
import styled from "styled-components";
import {
  albraSans,
  baliviaRegular,
  cabinMedium,
  cabinRegular,
  textHover,
} from "../../Common";
import blueberry from "../../../../src/assets/img/handwash/blueberry.webp";
import mango from "../../../../src/assets/img/handwash/mango.webp";
import plum from "../../../../src/assets/img/handwash/plum.webp";
import cranberry from "../../../../src/assets/img/handwash/cranberry.webp";
import LandingHandwash from "./LandingHandwash";
import setTitle from "../../Function/setTitle";

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
  row-gap: 10vh;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  @media screen and (min-height: 900px) {
    height: 100vh;
  }
  @media screen and (min-height: 700px) {
    height: 140vh;
  }
  @media screen and (max-height: 700px) {
    height: 140vh;
  }
  @media screen and (max-height: 500px) {
    height: 180vh;
  }
`;

const ItemContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px 2rem;
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
    font-size: 5rem;
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
  & h1 {
    position: relative;
    font-family: ${baliviaRegular};
    font-weight: 700;
    font-size: 3rem;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    margin-bottom: 5rem;
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
      width: 112px;
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
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  & p {
    font-family: ${cabinRegular};
    font-size: 1.4rem;
    line-height: 2rem;
    text-align: center;
    max-width: 500px;
    @media screen and (max-width: 350px) {
      font-size: 1.2rem;
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
  setTitle("Lave Mains | AB Distribtion");
  return (
    <>
      <LandingHandwash />
      <Container>
        <Wrap>
          <Items id="mango">
            <ItemContent>
              <Left className="img_mango">
                {/* <h1>MANGO</h1> */}
                <ImageContainer>
                  <Image src={mango} alt="" />
                </ImageContainer>
              </Left>

              <Right>
                <ProductAbout>
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
                      qui rendra le lavage de vos mains agréable avec son parfum
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
          </Items>

          <Items id="cranberry">
            <ItemContent>
              <Left className="img_cranberry">
                <ImageContainer>
                  <Image src={cranberry} alt="" />
                </ImageContainer>
              </Left>

              <Right>
                <ProductAbout>
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
                      qui rendra le lavage de vos mains agréable avec son parfum
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
          </Items>

          <Items id="plum">
            <ItemContent>
              <Left className="img_plum">
                <ImageContainer>
                  <Image src={plum} alt="" />
                </ImageContainer>
              </Left>

              <Right>
                <ProductAbout>
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
                      qui rendra le lavage de vos mains agréable avec son parfum
                      aromatisé à la prune. Il purifiera vos mains de la saleté
                      et les rendra propre et douces.
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
          </Items>

          <Items id="blueberry">
            <ItemContent>
              <Left className="img_blueberry">
                <ImageContainer>
                  <Image src={blueberry} alt="" />
                </ImageContainer>
              </Left>

              <Right>
                <ProductAbout>
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
                      qui rendra le lavage de vos mains agréable avec son parfum
                      aromatisé à la myrtille. Il purifiera vos mains de la
                      saleté et les rendra propre et douces.
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
          </Items>
        </Wrap>
      </Container>
    </>
  );
}

export default Handwash;
