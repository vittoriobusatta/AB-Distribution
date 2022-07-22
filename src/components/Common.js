import styled from "styled-components";

// Color Palette ///////////////////////////////////////////////////////////////

export const mainColor = "#FAF7EE";
export const accueil = "#FF9B71";
export const coffee = "#FF9B71";
export const perfume = "#FF9B71";
export const shower_gel = "#FF9B71";
export const antibacterial = "#FF9B71";
export const food = "#FF9B71";
export const airfreshener = "#FF9B71";
export const bodymist = "#FF9B71";

// Font Familly ///////////////////////////////////////////////////////////////

export const muliRegular = "Muli Regular";
export const muliBold = "Muli Bold";
export const playfairDisplayMedium = "PlayfairDisplay Medium";
export const playfairDisplayRegular = "PlayfairDisplay Regular";
export const baliviaRegular = "Balivia Regular";

// Components  ////////////////////////////////////////////////////////////////

export const Item = styled.div`
  height: 80vh;
  width: 100%;
  @media (max-width: 350px) {
    height: 70vh;
  }
`;
export const Layout = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 1rem;
  @media (min-width: 650px) {
    padding: 0 2rem;
  }
  @media (min-width: 1100px) {
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
  @media (min-width: 1100px) {
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Overview = styled.div`
  height: 70%;
  width: 100%;
  @media (min-width: 1100px) {
    height: 100%;
    width: 40%;
  }
`;
export const Description = styled.div`
  height: 20%;
  width: 100%;
  @media (min-width: 1100px) {
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  position: relative;
  font-family: ${baliviaRegular};
  font-weight: 700;
  font-size: 2.5rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-align: left;
  max-width: 250px;
  @media (max-width: 350px) {
    font-size: 2rem;
  }
  @media (min-width: 650px) {
    font-size: 3.5rem;
  }
  @media (min-width: 850px) {
    font-size: 5rem;
  }
  @media (min-width: 1100px) {
    font-size: 5.5rem;
  }

  &::before {
    position: absolute;
    content: "";
    bottom: -1rem;
    left: 5%;
    width: 112px;
    height: 2px;
    background: #000;
    z-index: 10;
    @media (max-width: 350px) {
      width: 85px;
    }
    @media (min-width: 650px) {
      height: 3px;
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
  &.food_line::before {
    background-color: #ff6262;
  }
  &.showergel_line::before {
    background-color: #f76b84;
  }
  &.bodymist_line::before {
    background-color: #2e2b27;
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

  @media (min-width: 1100px) {
    flex-direction: column;
    justify-content: space-around;
  }

  & span {
    height: auto;
    width: auto;
    position: relative;
    margin-left: 3rem;
  }

  & span a {
    position: relative;
    color: #222;
    font-family: ${muliBold};
    font-size: 1.1rem;
    z-index: 1;
    text-transform: uppercase;
    white-space: nowrap;
    transition: all 0.4s ease-out;
    @media (max-width: 350px) {
      font-size: 1rem;
    }
    @media (min-width: 650px) {
      font-size: 1.3rem;
    }
    @media (min-width: 850px) {
      &:before {
        content: "";
        display: block;
        position: relative;
        width: 0;
        top: 2rem;
        border-bottom: 2px solid #000;
        transition: width 0.4s ease-out;
        z-index: 2;
      }
      &:hover:before {
        width: 100%;
      }
    }
  }
`;

export const Svg = styled.svg`
  display: none;
  height: auto;
  width: auto;
  min-height: 80px;
  min-width: 120px;
  position: absolute;
  bottom: 0;
  left: 0%;
  transform: translate(-20%, 40%);
  @media (min-width: 1100px) {
    display: block;
    min-height: 100px;
    transform: translate(-30%, 40%);
  }

  &.airfreshener_color path {
    fill: #bc89fd;
  }
  &.antibacterial_color path {
    fill: #b7e2fa;
  }
  &.handwash_color path {
    fill: #feda57;
  }
  &.perfume_color path {
    fill: #fbdce2;
  }
  &.coffee_color path {
    fill: #af7f61;
  }
  &.food_color path {
    fill: #ff6262;
  }
  &.showergel_color path {
    fill: #f76b84;
  }
  &.bodymist_color path {
    fill: #2e2b27;
  }
`;

export const OverviewContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.img`
  height: auto;
  width: 80%;
  max-width: 450px;
  @media (min-width: 1100px) {
    max-width: 550px;
  }
`;

export const DescriptionContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const P = styled.p`
  font-family: ${muliRegular};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.3rem;
  text-align: center;
  color: #222;
  max-width: 800px;
  @media (max-width: 350px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1100px) {
    text-align: left;
    max-width: 450px;
    font-size: 1.6rem;
  }
`;
