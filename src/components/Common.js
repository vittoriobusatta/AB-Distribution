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

// Font Sizes /////////////////////////////////////////////////////////////////

export const sizeP = "clamp(14px,2.7rem,16px)";
export const lineheightP = "max(4rem,20px)";
export const sizeH1 = "clamp(20px,5.5rem,50px)";
export const sizeH2 = "clamp(30px,5.5rem,60px)";

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

export const LandingWrap = styled.section`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${mainColor};
  position: relative;
  z-index: 3;
`;

export const LandingContent = styled.div`
  height: 70%;
  width: 100%;
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
  font-size: ${sizeP};
  text-align: center;
  line-height: max(3rem, 25px);
  font-family: ${cabinRegular};
  width: fit-content;
  padding: 20px;
  max-width: 720px;

  @media screen and (max-width: 350px) {
    line-height: 22px;
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
    @media screen and (min-width: 1224px) {
      width: 3px;
    }
    &.line_handwash {
      background-color: ${handWash};
    }
    &.line_accueil {
      background-color: ${accueil};
    }
    &.line_coffee {
      background-color: ${coffee};
    }
    &.line_perfume {
      background-color: ${perfume};
    }
    &.line_showergel {
      background-color: ${showergel};
    }
    &.line_antibacterial {
      background-color: ${antibacterial};
    }
    &.line_grocery {
      background-color: ${Grocery};
    }
    &.line_airfreshener {
      background-color: ${airfreshener};
    }
    &.line_bodymist {
      background-color: ${bodymist};
    }
  }
`;

export const LandingTitle = styled.h1`
  font-size: clamp(50px, 14rem, 140px);
  position: relative;
  white-space: nowrap;
  font-family: ${playfairDisplayMedium};
  width: fit-content;
  margin: 100px auto;

  @media screen and (max-width: 500px) {
    font-size: 65px;
  }
  @media screen and (max-width: 400px) {
    font-size: 50px;
  }
  @media screen and (min-width: 576px) {
    margin: 150px auto;
  }
  @media screen and (min-width: 768px) {
    margin: 200px auto 100px auto;
  }

  &::before {
    position: absolute;
    color: #000;
    font-family: ${baliviaRegular};
    font-size: clamp(20px, 10rem, 60px);
    text-transform: uppercase;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 80%);
    white-space: nowrap;

    @media screen and (max-width: 992px) {
      font-size: 46%;
    }
    @media screen and (max-width: 768px) {
      font-size: 40%;
    }
    @media screen and (max-width: 576px) {
      font-size: max(34%, 30px);
    }
    @media screen and (max-width: 400px) {
      font-size: 22px;
    }
  }

  &.title_accueil {
    color: ${accueil};
  }
  &.title_accueil::before {
    content: "Accueil";
  }
  &.title_handwash {
    color: ${handWash};
  }
  &.title_handwash::before {
    content: "Lave Mains";
  }
  &.title_coffee {
    color: ${coffee};
  }
  &.title_coffee::before {
    content: "Cafés";
  }
  &.title_perfume {
    color: ${perfume};
  }
  &.title_perfume::before {
    content: "Parfums";
  }
  &.title_showergel {
    color: ${showergel};
  }
  &.title_showergel::before {
    content: "Gels Douches";
  }
  &.title_antibacterial {
    color: ${antibacterial};
  }
  &.title_antibacterial::before {
    content: "Anti-bactériens";
  }
  &.title_grocery {
    color: ${Grocery};
  }
  &.title_grocery::before {
    content: "Epicerie";
  }
  &.title_airfreshener {
    color: ${airfreshener};
  }
  &.title_airfreshener::before {
    content: "Désodorisants";
  }
  &.title_bodymist {
    color: ${bodymist};
  }
  &.title_bodymist::before {
    content: "Brumes";
  }
`;

export const LandingProductsTitle = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  min-height: 200px;
  padding-top: 10rem;
  row-gap: 10rem;

  & span {
    height: auto;
    width: 100%;
    max-width: fit-content;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 7rem;

    & h1 {
      color: #111;
      font-family: ${baliviaRegular};
      font-size: ${sizeH1};
      text-transform: uppercase;
      position: relative;
      text-align: center;
    }

    & svg {
      height: auto;
      width: auto;
      padding-top: 1rem;
    }
  }
`;
