import styled from "styled-components";
import {
  airfreshener,
  antibacterial,
  baliviaRegular,
  cabinBold,
  cabinRegular,
  coffee,
  Grocery,
  handWash,
  lineheightP,
  mainColor,
  perfume,
  showergel,
  sizeH2,
  sizeP,
  textHover,
} from "../../Common";

export const Item = styled.div`
  height: auto;
  width: 100%;
  margin-top: max(20rem, 140px);
  display: flex;
  justify-content: center;
`;
export const Layout = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 1.3rem;
  max-width: 1700px;
  @media screen and (min-width: 576px) {
    padding: 0 4rem;
  }
  @media screen and (min-width: 1224px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 0;
  }
`;

export const Name = styled.div`
  height: 10%;
  width: 100%;
  @media screen and (min-width: 1224px) {
    width: 27.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 700px;
  }
`;
export const Overview = styled.div`
  height: 70%;
  width: 100%;
  min-height: 40rem;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 576px) {
    margin: 80px 0;
  }
  @media screen and (min-width: 1224px) {
    height: 100%;
    width: 45%;
  }
`;

export const OverviewContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  @media screen and (min-width: 768px) {
    max-width: 550px;
  }
  @media screen and (min-width: 1224px) {
    max-width: 750px;
  }
`;

export const Description = styled.div`
  height: 20%;
  width: 100%;
  @media screen and (min-width: 1224px) {
    height: 100%;
    width: 27.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
  }
`;

export const NameContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 0 3rem 0 0;
  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
  @media screen and (min-width: 1224px) {
    flex-direction: column;
    justify-content: space-around;
    margin: 0;
  }

  & div {
    height: auto;
    width: auto;
    position: relative;
    margin-left: 3rem;
    border-radius: 5px;
    border: solid 2px;
    transition: ${textHover};
    &:hover {
      &.antibacterial_line {
        background-color: ${antibacterial};
      }
      &.grocery_line {
        background-color: ${Grocery};
      }
      &.airfreshener_line {
        background-color: ${airfreshener};
      }
      &.bodymist_line {
        background-color: #2e2b27;
      }
      &.perfume_line {
        background-color: ${perfume};
      }
      &.showergel_line {
        background-color: ${showergel};
      }
      &.coffee_line {
        background-color: ${coffee};
      }
      &.handwash_line {
        background-color: ${handWash};
      }
    }
    &:hover > span {
      color: ${mainColor};
    }
    &.antibacterial_line {
      border-color: ${antibacterial};
    }
    &.grocery_line {
      border-color: ${Grocery};
    }
    &.airfreshener_line {
      border-color: ${airfreshener};
    }
    &.bodymist_line {
      border-color: #2e2b27;
    }
    &.perfume_line {
      border-color: ${perfume};
    }
    &.showergel_line {
      border-color: ${showergel};
    }
    &.coffee_line {
      border-color: ${coffee};
    }
    &.handwash_line {
      border-color: ${handWash};
    }
    padding: clamp(5px, 1.5rem, 10px) clamp(10px, 2.5rem, 20px);
    /* padding: max(1.5rem, 5px) max(2.5rem, 10px); */
    @media screen and (max-width: 450px) {
      margin-left: 0;
      margin-top: 70px;
    }
  }

  & a span {
    position: relative;
    color: #222;
    font-family: ${cabinBold};
    font-size: clamp(12px, 2rem, 14px);
    z-index: 1;
    text-transform: uppercase;
    white-space: nowrap;
  }
`;

export const Title = styled.h2`
  position: relative;
  font-family: ${baliviaRegular};
  font-weight: 700;
  font-size: clamp(30px,4.5rem,50px);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-align: left;
  max-width: 250px;
  @media screen and (max-width: 450px) {
    text-align: center;
    font-size: 30px;
  }
  @media screen and (min-width: 576px) {
    font-size: 5rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 6rem;
  }
  @media screen and (min-width: 1224px) {
    font-size: min(7rem, 50px);
  }

  &::before {
    position: absolute;
    content: "";
    bottom: -10px;
    left: 5%;
    width: 85px;
    height: 2px;
    background: #000;
    z-index: 2;
    @media screen and (max-width: 450px) {
      width: 85px;
      bottom: -15px;
      left: 50%;
      transform: translate(-50%, 0);
    }
    @media screen and (min-width: 576px) {
      width: 112px;
    }
    @media screen and (min-width: 768px) {
      height: 3px;
      bottom: -20px;
    }
  }

  &.airfreshener_line::before {
    background-color: #bc89fd;
  }
  &.antibacterial_line::before {
    background-color: #b7e2fa;
  }
  &.handwash_line::before {
    background-color: #feda57;
  }
  &.perfume_line::before {
    background-color: #fbdce2;
  }
  &.coffee_line::before {
    background-color: #af7f61;
  }
  &.grocery_line::before {
    background-color: #ff6262;
  }
  &.showergel_line::before {
    background-color: #f76b84;
  }
  &.bodymist_line::before {
    background-color: #2e2b27;
  }
`;

export const Image = styled.img`
  height: auto;
  width: 80%;
  /* max-width: 400px;
  @media screen and (min-width: 1224px) {
    max-width: 550px;
  } */
`;

export const DescriptionContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const P = styled.p`
  font-family: ${cabinRegular};
  font-size: ${sizeP};
  font-weight: 400;
  line-height: ${lineheightP};
  text-align: center;
  color: #222;
  padding: 0 10px;
  max-width: 800px;

  @media screen and (min-width: 1224px) {
    text-align: left;
    line-height: 25px;
    /* max-width: 600px; */
  }
`;
