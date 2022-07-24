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

export const sizeP = "clamp(14px,2.7rem,18px);";
export const lineheightP = "max(4rem,20px);";
export const sizeH1 = "clamp(20px,5.5rem,50px);";
export const sizeH2 = "clamp(20px,4.5rem,50px);";

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
  /* @media screen and (max-width: 350px) {
    height: calc(70vh - 70px);
  }
  @media screen and (max-height: 700px) {
    height: calc(140vh - 70px);
  }
  @media screen and (max-height: 500px) {
    height: calc(160vh - 70px);
  } */
`;

export const LandingBox = styled.div``;

export const LandingWrap = styled.section`
  height: auto;
  width: 100%;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  flex-direction: column;
  /* min-height: 100vh; */
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

//                  ////////////////////////////////////////////////////////

export const Item = styled.div`
  height: auto;
  width: 100%;
  margin-top: max(20rem, 10vh);
  /* @media screen and (max-width: 350px) {
    height: 70vh;
  }
  @media screen and (max-height: 700px) {
    height: 110vh;
  }
  @media screen and (max-height: 600px) {
    height: 140vh;
  } */
`;
export const Layout = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 1.3rem;
  /* @media screen and (min-width: 576px) {
    padding: 0 2rem;
  } */
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

  @media screen and (max-width: 321px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1224px) {
    flex-direction: column;
    justify-content: space-around;
    margin: 0;
  }

  & span {
    height: auto;
    width: auto;
    position: relative;
    margin-left: 3rem;
    @media screen and (max-width: 321px) {
      margin-left: 0;
      margin-top: 50px;
    }
  }

  & span span {
    position: relative;
    color: #222;
    font-family: ${cabinBold};
    font-size: clamp(12px, 2rem, 14px);
    z-index: 1;
    text-transform: uppercase;
    white-space: nowrap;
    transition: all 0.4s ease-out;
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

export const Title = styled.h2`
  position: relative;
  font-family: ${baliviaRegular};
  font-weight: 700;
  font-size: ${sizeH2};
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-align: left;
  max-width: 250px;

  @media screen and (max-width: 321px) {
    text-align: center;
    font-size: 30px;
  }

  @media screen and (min-width: 576px) {
    font-size: 5rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 6rem;
  }
  @media screen and (min-width: 992px) {
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
    @media screen and (max-width: 321px) {
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
  @media screen and (min-width: 1224px) {
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
