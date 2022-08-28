import React from "react";
import setTitle from "../../Function/setTitle";
import LandingBodymist from "./LandingBodymist";
import NavbarBodymist from "./NavbarBodymist";
import FooterBodymist from "./FooterBodymist";
import loyalImage from "./images/loyal.png";
import braveImage from "./images/brave.png";
import creativeImage from "./images/creative.png";
import dynamicImage from "./images/dynamic.png";
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
const dynamic = "#D4422C";
const creative = "#F8E64B";
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
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 0.5fr repeat(2, 1fr);
    grid-column-gap: 30px;
  }
`;

const Title = styled.div`
  height: 10%;
  width: 100%;
  @media screen and (min-width: 1224px) {
    width: 100%;
    height: 100%;
    grid-area: 1 / 1 / 2 / 7;
  }
`;
const Name = styled.div`
  display: none;
  @media screen and (min-width: 1224px) {
    display: flex;
    height: 100%;
    grid-area: 2 / 1 / 4 / 2;
    align-items: center;
    & div {
      width: 120px;
      height: 90%;
      background: ${(props) => props.colorActive};
      display: flex;
      align-items: center;
      & h2 {
        font-family: ${albraSans};
        font-size: 100px;
        writing-mode: vertical-rl;
        color: ${(props) => props.color};
      }
    }
  }
`;

const TitleContent = styled.div`
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
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: ${(props) => props.colorGradient};

    &::after {
      text-transform: none;
      position: absolute;
      font-size: clamp(20px, 4rem, 100px);
      bottom: max(-5rem, -40px);
      left: 3rem;
      color: ${(props) => props.color};
      content: "${(props) => props.content}";
    }
  }
  @media screen and (min-width: 1224px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin : 0;
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
    width: 100%;
    height: auto;
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
    width: 100%;
    height: 100%;
    grid-area: 2 / 3 / 6 / 5;
    align-items: center;
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
    width: 100%;
    height: 100%;
    min-height: 550px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    grid-area: 2 / 5 / 4 / 7;
  }
`;

const ProductAbout = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 1224px) {
    max-width: 450px;
  }
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
      background: ${(props) => props.identColor};
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
    font-size: max(3rem, 25px);
    transition: ${textHover};
    color: ${(props) => props.color};
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
      color: ${creative};
    }
    &.creative_color {
      color: #c0d03b;
    }
    &.dynamic_active {
      color: #984088;
    }
    &.dynamic_color {
      color: ${dynamic};
    }
  }
`;

const data = [
  {
    title: "Loyal",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsu.",
    colorActive: loyal,
    color: "#2B617F",
    image: loyalImage,
    id: "loyal",
    gradient:
      "linear-gradient( 90deg, rgba(54, 91, 118, 1) 4%, rgba(0, 137, 174, 1) 38%)",
    content: "La magie des arômes",
  },
  {
    title: "Brave",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsu.",
    colorActive: brave,
    color: "#B14529",
    image: braveImage,
    id: "brave",
    gradient:
      "linear-gradient( 90deg, rgba(152, 58, 25, 1) 4%, rgba(207, 57, 16, 1) 38% )",
    content: "Une ambiance paisible",
  },
  {
    title: "Creative",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsu.",
    colorActive: creative,
    color: "#BECF40",
    image: creativeImage,
    id: "creative",
    gradient:
      "linear-gradient( 90deg, rgba(185, 205, 85, 1) 4%, rgba(248, 230, 75, 1) 38% )",
    content: "Un éveil des sens",
  },
  {
    title: "Dynamic",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsu.",
    color: dynamic,
    colorActive: "#9A3D84",
    image: dynamicImage,
    id: "dynamic",
    gradient:
      "linear-gradient( 90deg, rgba(158, 85, 151, 1) 4%, rgba(212, 66, 44, 1) 38% )",
    content: "Un souffle de pureté",
  },
];

function Bodymist() {
  setTitle("Brumes Corporelles | AB Distribution");

  return (
    <>
      <NavbarBodymist />
      <LandingBodymist />

      <Wrapper>
        {data.map((item, index) => (
          <Item id={item.id} key={index}>
            <ItemContent>
              <Title>
                <TitleContent
                  content={item.content}
                  color={item.color}
                  colorGradient={item.gradient}
                >
                  <h2>{item.content}</h2>
                </TitleContent>
              </Title>
              <Name color={item.color} colorActive={item.colorActive}>
                <div>
                  <h2>{item.title}</h2>
                </div>
              </Name>
              <Left>
                <ImageContainer>
                  <Image src={item.image} alt="" />
                </ImageContainer>
              </Left>
              <Right>
                <ProductAbout>
                  <DescriptionTitle identColor={item.color}>
                    <h2>{item.title}</h2>
                    <Info>
                      <span>100ml</span>
                      <span>•</span>
                      <span>Brumes Corporelles</span>
                    </Info>
                  </DescriptionTitle>

                  <DescriptionParagraph>
                    <p>{item.description}</p>
                  </DescriptionParagraph>

                  <NumberLinks color={item.color}>
                    <a href="#loyal">01</a>
                    <a href="#brave">02</a>
                    <a href="#creative">03</a>
                    <a href="#dynamic">04</a>
                  </NumberLinks>
                </ProductAbout>
              </Right>
            </ItemContent>
          </Item>
        ))}
      </Wrapper>

      <FooterBodymist />
    </>
  );
}

export default Bodymist;
