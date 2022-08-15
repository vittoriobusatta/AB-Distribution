import React from "react";
import styled from "styled-components";
import Landing from "./Landing";
import setTitle from "../../Function/setTitle";
import { Link } from "react-router-dom";
import airfreshenerImage from "./images/airfreshener.webp";
import antibacterialImage from "./images/antibacterial.webp";
import bodymistImage from "./images/bodymist.webp";
import coffeeImage from "./images/coffee.webp";
import groceryImage from "./images/grocery.webp";
import handwashImage from "./images/handwash.webp";
import perfumeImage from "./images/perfume.webp";
import showergelImage from "./images/showergel.webp";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { baliviaRegular, cabinBold, cabinRegular, lineheightP, mainColor, sizeP, textHover } from "../../Common";
import { Item } from "../PageCommon";

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 170px;
  background-color: ${mainColor};
  position: relative;
  z-index: 3;
`;

const data = [
  {
    name: "Brumes Corporelle",
    image: bodymistImage,
    description:
      "La collection de brumes corporelles rafraîchissantes procure un moment doux et léger. Ce sont des brumes aux essences naturelles d’été. Idéales pour obtenir une sensation de fraîcheur et d’énergie. Vous pouvez les utiliser sur votre corps, vos cheveux, à la maison et/ou sur les textiles.",
    link: "brumes-corporelles",
    color: "#2e2b27",
  },
  {
    name: "Parfums d'Ambiance",
    image: perfumeImage,
    description:
      "Les parfums d’intérieur peuvent donner vie à votre décoration et à votre maison en amenant une dimension sensorielle toute particulière. Les parfums d’ambiance spray vous permettront de créer une nouvelle atmosphère intérieure parfumée en un tour de main.",
    link: "parfums-d-ambiance",
    color: "#fbdce2",
  },
  {
    name: "Anti-Bactérien",
    image: antibacterialImage,
    description:
      "Parce que 80% des microbes se transmettent par les mains, il est important d'adopter les bons gestes d'hygiène pour se protéger des infections comme le rhume ou le covid-19. Découvrez notre séléctions de produits anti-bactériens",
    link: "anti-bacterien",
    color: "#b7e2fa",
  },
  {
    name: "Lave Mains",
    image: handwashImage,
    description:
      "Une bonne hygiène des mains est importante pour tout le monde. Il est important de se laver les mains plusieurs fois par jour. Dans cette catégorie, vous retrouverez des savons liquides pour les mains sèches, normales ou sensibles, aux senteurs fruitées.",
    link: "lave-mains",
    color: "#feda57",
  },
  {
    name: "Gels Douches",
    image: showergelImage,
    description:
      "Avec les gels douche Ultra Compact, plongez dans le plaisir et la douceur du Paradis. Une expérience d'évasion unique grâce aux ingrédients exotiques et parfumés. Grâce à leur formule avec plus d'agent hydratant au pH neutre pour la peau et aux extraits naturels, vous sentez votre peau douce et hydratée.",
    link: "gels-douches",
    color: "#f76b84",
  },
  {
    name: "Désodorisants",
    image: airfreshenerImage,
    description:
      "Un désodorisant d’intérieur est aussi un moyen efficace de lutter contre les mauvaises odeurs dans votre maison. Dîtes adieu aux odeurs de poubelles, de linge sale ou d’humidité et bienvenue aux odeurs et parfums frais ou gourmands d’Ultra Compact !",
    link: "desodorisants",
    color: "#bc89fd",
  },
  {
    name: "Nescafé xpress",
    image: coffeeImage,
    description:
      "NESCAFÉ Xpress vous donnera le réveil dont vous avez besoin pour continuer votre journée. Les grains de café et le lait doux spécialement sélectionnés; la délicieuse saveur de café au lait glacé qui sort lorsqu’il est combiné avec la spécialisation NESCAFÉ vous fera oublier l’intensité de la journée.",
    link: "cafes",
    color: "#af7f61",
  },
  {
    name: "Produits Alimentaires",
    image: groceryImage,
    description:
      "Nous proposons un large éventail de produits alimentaires de la marque Tukas tels que des produits en conserve, des légumes marinés, des confitures et sauces . Découvrez nos séléctions !",
    link: "alimentations",
    color: "#ff6262",
  },
];

const Title = styled.div`
  /* overflow: hidden; */
  & h2 {
    position: relative;
    font-family: ${baliviaRegular};
    font-weight: 700;
    font-size: clamp(30px, 4.5rem, 50px);
    letter-spacing: 0.03em;
    text-transform: uppercase;
    text-align: left;
    /* transform: translateY(100%); */
    max-width: 250px;
    color: #000;
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
      background: ${(props) => props.border};
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
  }
`;

const Layout = styled.div`
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
const Overview = styled.div`
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
const OverviewContent = styled.div`
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
const Description = styled.div`
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


const NameContent = styled.div`
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
    border: solid 2px none;
    transition: ${textHover};
    padding: clamp(5px, 1.5rem, 10px) clamp(10px, 2.5rem, 20px);
    /* padding: max(1.5rem, 5px) max(2.5rem, 10px); */
    @media screen and (max-width: 450px) {
      margin-left: 0;
      margin-top: 70px;
    }
  }

  & a span {
    position: relative;
    color: #fff;
    font-family: ${cabinBold};
    font-size: clamp(12px, 2rem, 14px);
    z-index: 1;
    text-transform: uppercase;
    white-space: nowrap;
    transition: ${textHover};

    &:hover {
      color: #222;
    }
  }
`;

const Image = styled.img`
  height: auto;
  width: 80%;
`;

const DescriptionContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const P = styled.p`
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
  }
`;


function Products() {
  setTitle("Accueil | AB Distribution");


  return (
    <>
      <Navbar />
      <Landing />
      <Wrapper>
        {data.map((item, index) => (
          <Item key={index}>
            <Layout>
              <Name>
                <NameContent>
                  <Title border={item.color}>
                    <h2>{item.name}</h2>
                  </Title>
                  <Link to={item.link}>
                    <div style={{
                      backgroundColor: item.color,
                    }}>
                      <span>Voir les Produits</span>
                    </div>
                  </Link>
                </NameContent>
              </Name>

              <Overview>
                <OverviewContent>
                  <Image src={item.image} alt="" />
                </OverviewContent>
              </Overview>

              <Description>
                <DescriptionContent>
                  <P>{item.description}</P>
                </DescriptionContent>
              </Description>
            </Layout>
          </Item>
        ))}
      </Wrapper>
      <Footer />
    </>
  );
}

export default Products;
