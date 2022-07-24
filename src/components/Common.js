import styled from "styled-components";

// Color Palette ///////////////////////////////////////////////////////////////

export const mainColor = "#FAF7EE";

export const accueil = "#FF9B71";
export const coffee = "#AF7F61";
export const perfume = "#FBDCE2";
export const showergel = "#f76b84";
export const antibacterial = "#B7E2FA";
export const Grocery = "#FF6262";
export const airfreshener = "#BC89FD";
export const bodymist = "#59C9A5";
export const handWash = "#FEDA57";

// Font Familly ///////////////////////////////////////////////////////////////

export const cabinRegular = "Cabin Regular";
export const cabinBold = "Cabin Bold";
export const cabinMedium = "Cabin Medium";
export const albraSans = "AlbraSans Medium";
export const playfairDisplayMedium = "PlayfairDisplay Medium";
export const playfairDisplayRegular = "PlayfairDisplay Regular";
export const baliviaRegular = "Balivia Regular";

// Animations /////////////////////////////////////////////////////////////////

export const textHover = "all 0.5s cubic-bezier(0, 0, 0.25, 1.21)";

// Landing Components  ////////////////////////////////////////////////////////

export const LandingContainer = styled.section`
  height: calc(100vh - 70px);
  width: 100%;
  @media screen and (max-width: 350px) {
    height: calc(70vh - 70px);
  }
  @media screen and (max-height: 700px) {
    height: calc(140vh - 70px);
  }
`;

export const LandingWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LandingContent = styled.div`
  height: 70%;
  width: 100%;
`;

export const LandingBox = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 5vh;
  @media screen and (min-width: 650px) {
    padding-bottom: 0;
  }
`;

export const LandingDescription = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LandingParagraph = styled.p`
  position: relative;
  color: #838383;
  font-size: 1.4rem;
  text-align: center;
  line-height: 2.5rem;
  font-family: ${cabinRegular};
  width: fit-content;
  padding: 2rem;
  max-width: 720px;

  @media screen and (max-width: 350px) {
    font-size: 1.1rem;
    line-height: 2rem;
  }
  @media screen and (min-width: 650px) {
    font-size: 1.8rem;
  }
`;

export const LandingLine = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & div {
    height: 5rem;
    width: 2px;
    &.line_handwash {background-color: ${handWash};}
    &.line_accueil {background-color: ${accueil};}
    &.line_coffee {background-color: ${coffee};}
    &.line_perfume {background-color: ${perfume};}
    &.line_showergel {background-color: ${showergel};}
    &.line_antibacterial {background-color: ${antibacterial};}
    &.line_grocery {background-color: ${Grocery};}
    &.line_airfreshener {background-color: ${airfreshener};}
    &.line_bodymist {background-color: ${bodymist};}
  }
`;

export const LandingTitle = styled.h1`
  font-size: 6rem;
  position: relative;
  white-space: nowrap;
  font-family: ${playfairDisplayMedium};
  @media screen and (max-width: 350px) {
    font-size: 5rem;
  }
  @media screen and (min-width: 400px) {
    font-size: 6.5rem;
  }
  @media screen and (min-width: 650px) {
    font-size: 8rem;
  }
  @media screen and (min-width: 850px) {
    font-size: 12rem;
  }
  @media screen and (min-width: 1100px) {
    font-size: 14rem;
  }

  &::before {
    position: absolute;
    color: #000;
    font-family: ${baliviaRegular};
    font-size: 3rem;
    text-transform: uppercase;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 80%);
    white-space: nowrap;

    @media screen and (max-width: 350px) {
      font-size: 2.5rem;
    }
    @media screen and (min-width: 650px) {
      font-size: 4.5rem;
    }
    @media screen and (min-width: 850px) {
      font-size: 5rem;
    }
    @media screen and (min-width: 1100px) {
      font-size: 6.5rem;
    }
  }

  &.title_accueil {color: ${accueil};}
  &.title_accueil::before {content: "Accueil";}
  &.title_handwash {color: ${handWash};}
  &.title_handwash::before {content: "Lave Mains";}
  &.title_coffee {color: ${coffee};}
  &.title_coffee::before {content: "Cafés";}
  &.title_perfume {color: ${perfume};}
  &.title_perfume::before {content: "Parfums";}
  &.title_showergel {color: ${showergel};}
  &.title_showergel::before {content: "Gels Douches";}
  &.title_antibacterial {color: ${antibacterial};}
  &.title_antibacterial::before {content: "Anti-bactériens";}
  &.title_grocery {color: ${Grocery};}
  &.title_grocery::before {content: "Epicerie";}
  &.title_airfreshener {color: ${airfreshener};}
  &.title_airfreshener::before {content: "Désodorisants";}
  &.title_bodymist {color: ${bodymist};}
  &.title_bodymist::before {content: "Brumes";}
`;

export const LandingProductsTitle = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  & span {
    height: auto;
    width: 100%;
    max-width: fit-content;
    display: flex;
    align-items: center;
    flex-direction: column;

    & h1 {
      color: #111;
      font-family: ${baliviaRegular};
      font-size: 3rem;
      text-transform: uppercase;
      position: relative;
      text-align: center;

      @media screen and (min-width: 650px) {
        font-size: 3.5rem;
      }
      @media screen and (min-width: 850px) {
        font-size: 5rem;
      }
      @media screen and (min-width: 1100px) {
        font-size: 5.5rem;
      }
    }

    & svg {
      height: auto;
      width: auto;
      padding-top: 0.5rem;
    }
  }
`;


//                  ////////////////////////////////////////////////////////


export const Item = styled.div`
  height: 80vh;
  width: 100%;
  @media screen and (max-width: 350px) {
    height: 70vh;
  }
  @media screen and (max-height: 850px) {
    height: 110vh;
  }

`;
export const Layout = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 1rem;
  @media screen and (min-width: 650px) {
    padding: 0 2rem;
  }
  @media screen and (min-width: 1100px) {
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
  @media screen and (min-width: 1100px) {
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
  @media screen and (min-width: 1100px) {
    height: 100%;
    width: 40%;
  }
  @media screen and (max-height: 850px) {
    height: 60%;
  }
`;
export const Description = styled.div`
  height: 20%;
  width: 100%;
  @media screen and (min-width: 1100px) {
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-height: 850px) {
    height: auto
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
  @media screen and (max-width: 350px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 650px) {
    font-size: 3.5rem;
  }
  @media screen and (min-width: 850px) {
    font-size: 5rem;
  }
  @media screen and (min-width: 1100px) {
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
    z-index: 2;
    @media screen and (max-width: 350px) {
      width: 85px;
    }
    @media screen and (min-width: 650px) {
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
export const NameContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 0 3rem 0 0;

  @media screen and (min-width: 1100px) {
    flex-direction: column;
    justify-content: space-around;
  }

  & span {
    height: auto;
    width: auto;
    position: relative;
    margin-left: 3rem;
  }

  & span span {
    position: relative;
    color: #222;
    font-family: ${cabinBold};
    font-size: 1.1rem;
    z-index: 1;
    text-transform: uppercase;
    white-space: nowrap;
    transition: all 0.4s ease-out;
    @media screen and (max-width: 350px) {
      font-size: 1rem;
    }
    @media screen and (min-width: 650px) {
      font-size: 1.3rem;
    }
    @media screen and (min-width: 850px) {
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
  @media screen and (min-width: 1100px) {
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
  &.grocery_color path {
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
  @media screen and (min-width: 1100px) {
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
  font-family: ${cabinRegular};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.3rem;
  text-align: center;
  color: #222;
  max-width: 800px;
  @media screen and (max-width: 350px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 1100px) {
    text-align: left;
    max-width: 450px;
    font-size: 1.6rem;
  }
`;

