import React from "react";
import setTitle from "../../Function/setTitle";
import LandingAntibacterial from "./LandingAntibacterial";
import NavbarAntibacterial from "./NavbarAntibacterial";
import FooterAntibacterial from "./FooterAntibacterial";
import gel2Image from "./images/gel2.png";
import gel1Image from "./images/gel1.png";
import wipe1Image from "./images/wipe1.png";
import wipe2Image from "./images/wipe2.png";
import wipe3Image from "./images/wipe3.png";
import {
  albraSans,
  antibacterial,
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

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 3;
  background-color: ${mainColor};
  margin-bottom: 170px;
`;

export const Item = styled.div`
  height: auto;
  width: 100%;
  margin-top: max(5rem, 100px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:last-child {
    margin-bottom: max(20rem, 40px);
  }
  @media screen and (min-width: 1224px) {
    max-width: 1600px;
  }
`;

const ItemContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px 2rem;
  margin-bottom: 40px;
`;

export const Article = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: max(8rem, 40px);
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Name = styled.div`
  height: 10%;
  width: 100%;
  @media screen and (min-width: 1224px) {
    width: auto;
    height: 300px;
  }
`;

export const NameContent = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-left: 10rem;
  @media screen and (max-width: 576px) {
    padding-left: 20px;
  }
  & h2 {
    font-size: clamp(20px, 6.5rem, 100px);
    font-family: ${albraSans};
    text-transform: uppercase;
    position: relative;
    color: ${medicalBlue};
    position: relative;
    @media screen and (min-width: 576px) {
      &::before {
        content: "01";
        position: absolute;
        top: 0px;
        left: -20px;
        color: ${antibacterial};
        font-family: ${baliviaRegular};
        font-size: 10rem;
      }
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
    margin-bottom: 50px;
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
    max-width: 350px;
  }
`;

const Left = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
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
  margin-top: max(8rem, 40px);
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
    margin-bottom: max(4rem, 30px);
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
      @media screen and (min-width: 1224px) {
        width: 112px;
      }
    }
    &.antibacterial_line::before {
      background-color: ${antibacterial};
    }
  }
`;
const DescriptionParagraph = styled.div`
  height: auto;
  width: 100%;
  padding-top: max(3rem, 15px);
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
        <Item id="gel">
          <Name>
            <NameContent>
              <h2>
                Gels <br /> antibactériens
              </h2>
            </NameContent>
          </Name>

          <Article>
            <ItemContent id="gel1">
              <Left>
                <ImageContainer>
                  <Image src={gel1Image} alt="" />
                </ImageContainer>
              </Left>

              <Right>
                <Info>
                  <span>500ml</span>
                  <span>•</span>
                  <span>Anti-bactérien</span>
                </Info>
              </Right>
            </ItemContent>

            <ItemContent id="gel2">
              <Left>
                <ImageContainer>
                  <Image src={gel2Image} alt="" />
                </ImageContainer>
              </Left>

              <Right>
                <Info>
                  <span>50ml</span>
                  <span>•</span>
                  <span>Anti-bactérien</span>
                </Info>
              </Right>
            </ItemContent>
          </Article>

          <ProductAbout>
            <DescriptionTitle>
              <h2 className="antibacterial_line">Gels</h2>
            </DescriptionTitle>
            <DescriptionParagraph>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsu.
              </p>
            </DescriptionParagraph>
          </ProductAbout>
        </Item>

        <Item id="wipe">
          <Name>
            <NameContent>
              <h2>
                Lingettes <br /> anti-bactériennes
              </h2>
            </NameContent>
          </Name>

          <Article>
            <ItemContent id="wipe1">
              <Left>
                <ImageContainer>
                  <Image src={wipe1Image} alt="" />
                </ImageContainer>
              </Left>

              <Right>
                <Info>
                  <span>40pcs</span>
                  <span>•</span>
                  <span>Anti-bactérien</span>
                </Info>
              </Right>
            </ItemContent>

            <ItemContent id="wipe2">
              <Left>
                <ImageContainer>
                  <Image src={wipe2Image} alt="" />
                </ImageContainer>
              </Left>

              <Right>
                <Info>
                  <span>10pcs</span>
                  <span>•</span>
                  <span>Anti-bactérien</span>
                </Info>
              </Right>
            </ItemContent>

            <ItemContent id="wipe3">
              <Left>
                <ImageContainer>
                  <Image src={wipe3Image} alt="" />
                </ImageContainer>
              </Left>

              <Right>
                <Info>
                  <span>100pcs</span>
                  <span>•</span>
                  <span>Anti-bactérien</span>
                </Info>
              </Right>
            </ItemContent>
          </Article>

          <ProductAbout>
            <DescriptionTitle>
              <h2 className="antibacterial_line">Lingettes</h2>
            </DescriptionTitle>
            <DescriptionParagraph>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsu.
              </p>
            </DescriptionParagraph>
          </ProductAbout>
        </Item>
      </Wrapper>

      <FooterAntibacterial />
    </>
  );
}

export default Antibacterial;
