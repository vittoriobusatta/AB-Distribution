import React from "react";
import styled from "styled-components";
import Landing from "./Landing";
import setTitle from "../../Function/setTitle";
import {
  Item,
  Layout,
  Name,
  NameContent,
  Title,
  Overview,
  OverviewContent,
  Image,
  Description,
  DescriptionContent,
  P,
} from "./ProductsCommon";
import { Link } from "react-router-dom";
import airfreshenerImage from "../../../assets/img/home/airfreshener.webp";
import antibacterialImage from "../../../assets/img/home/antibacterial.webp";
import bodymistImage from "../../../assets/img/home/bodymist.webp";
import coffeeImage from "../../../assets/img/home/coffee.webp";
import groceryImage from "../../../assets/img/home/grocery.webp";
import handwashImage from "../../../assets/img/home/handwash.webp";
import perfumeImage from "../../../assets/img/home/perfume.webp";
import showergelImage from "../../../assets/img/home/showergel.webp";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { mainColor } from "../../Common";

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  background-color: ${mainColor};
  position: relative;
  z-index: 3;
`;

function Products() {
  setTitle("Accueil | AB Distribution");

  return (
    <>
      {/* <Navbar />
      <Landing />
      <Wrapper>
        <Item id="Body Mist">
          <Layout>
            <Name>
              <NameContent>
                <Title className="bodymist_line">Brumes Corporelle</Title>
                <Link to="brumes-corporelles">
                  <div className="bodymist_line">
                    <span>Voir les Produits</span>
                  </div>
                </Link>
              </NameContent>
            </Name>

            <Overview>
              <OverviewContent>
                <Image src={bodymistImage} alt="" />
              </OverviewContent>
            </Overview>

            <Description>
              <DescriptionContent>
                <P>
                  Nos brumes parfumées sont des parfums corporels qui sont
                  spécialement conçues pour leur grande légèreté. Ces eaux
                  parfumées sont beaucoup plus rafraîchissantes et contribuent
                  également à hydrater notre corps.
                </P>
              </DescriptionContent>
            </Description>
          </Layout>
        </Item>

        <Item id="Perfume">
          <Layout>
            <Name>
              <NameContent>
                <Title className="perfume_line">Parfums d'Ambiance</Title>
                <Link to="parfums-d-ambiance">
                  <div className="perfume_line">
                    <span>Voir les Produits</span>
                  </div>
                </Link>
              </NameContent>
            </Name>

            <Overview>
              <OverviewContent>
                <Image src={perfumeImage} alt="" />
              </OverviewContent>
            </Overview>

            <Description>
              <DescriptionContent>
                <P>
                  Les parfums d’intérieur peuvent donner vie à votre décoration
                  et à votre maison en amenant une dimension sensorielle toute
                  particulière. Les parfums d’ambiance spray vous permettront de
                  créer une nouvelle atmosphère intérieure parfumée en un tour
                  de main.
                </P>
              </DescriptionContent>
            </Description>
          </Layout>
        </Item>

        <Item id="Anti Bacterial">
          <Layout>
            <Name>
              <NameContent>
                <Title className="antibacterial_line">Anti-Bactérien</Title>
                <Link to="anti-bacterien">
                  <div className="antibacterial_line">
                    <span>Voir les Produits</span>
                  </div>
                </Link>
              </NameContent>
            </Name>

            <Overview>
              <OverviewContent>
                <Image src={antibacterialImage} alt="" />
              </OverviewContent>
            </Overview>

            <Description>
              <DescriptionContent>
                <P>
                  Parce que 80% des microbes se transmettent par les mains, il
                  est important d’adopter les bons gestes d’hygiène pour se
                  protéger des infections comme le rhume ou le covid-19.
                  Découvrez notre séléctions de produits anti-bactériens
                </P>
              </DescriptionContent>
            </Description>
          </Layout>
        </Item>

        <Item id="Handwash">
          <Layout>
            <Name>
              <NameContent>
                <Title className="handwash_line">Lave Mains</Title>
                <Link to="lave-mains">
                  <div className="handwash_line">
                    <span>Voir les Produits</span>
                  </div>
                </Link>
              </NameContent>
            </Name>

            <Overview>
              <OverviewContent>
                <Image src={handwashImage} alt="" />
              </OverviewContent>
            </Overview>

            <Description>
              <DescriptionContent>
                <P>
                  Une bonne hygiène des mains est importante pour tout le monde.
                  Il est important de se laver les mains plusieurs fois par jour
                  : avant de cuisiner, de manger ou après un passage aux
                  toilettes. Dans cette catégorie, vous retrouverez des savons
                  liquides pour les mains sèches, normales ou sensibles, aux
                  senteurs fruitées.
                </P>
              </DescriptionContent>
            </Description>
          </Layout>
        </Item>

        <Item id="Shower Gel">
          <Layout>
            <Name>
              <NameContent>
                <Title className="showergel_line">Gels Douches</Title>
                <Link to="gels-douches">
                  <div className="showergel_line">
                    <span>Voir les Produits</span>
                  </div>
                </Link>
              </NameContent>
            </Name>

            <Overview>
              <OverviewContent>
                <Image src={showergelImage} alt="" />
              </OverviewContent>
            </Overview>

            <Description>
              <DescriptionContent>
                <P>
                  Avec les gels douche Ultra Compact, plongez dans le plaisir et
                  la douceur du Paradis. Une expérience d'évasion unique grâce
                  aux ingrédients exotiques et parfumés. Grâce à leur formule
                  avec plus d'agent hydratant au pH neutre pour la peau et aux
                  extraits naturels, vous sentez votre peau douce et hydratée.
                </P>
              </DescriptionContent>
            </Description>
          </Layout>
        </Item>

        <Item id="Air Freshener">
          <Layout>
            <Name>
              <NameContent>
                <Title className="airfreshener_line">Désodorisants</Title>
                <Link to="desodorisants">
                  <div className="airfreshener_line">
                    <span>Voir les Produits</span>
                  </div>
                </Link>
              </NameContent>
            </Name>

            <Overview>
              <OverviewContent>
                <Image src={airfreshenerImage} alt="" />
              </OverviewContent>
            </Overview>

            <Description>
              <DescriptionContent>
                <P>
                  Un désodorisant d’intérieur est aussi un moyen efficace de
                  lutter contre les mauvaises odeurs dans votre maison. Dîtes
                  adieu aux odeurs de poubelles, de linge sale ou d’humidité et
                  bienvenue aux odeurs et parfums frais ou gourmands d’Ultra
                  Compact !
                </P>
              </DescriptionContent>
            </Description>
          </Layout>
        </Item>

        <Item id="Coffee">
          <Layout>
            <Name>
              <NameContent>
                <Title className="coffee_line">Nescafé xpress</Title>
                <Link to="cafes">
                  <div className="coffee_line">
                    <span>Voir les Produits</span>
                  </div>
                </Link>
              </NameContent>
            </Name>

            <Overview>
              <OverviewContent>
                <Image src={coffeeImage} alt="" />
              </OverviewContent>
            </Overview>

            <Description>
              <DescriptionContent>
                <P>
                  NESCAFÉ Xpress vous donnera le réveil dont vous avez besoin
                  pour continuer votre journée. Les grains de café et le lait
                  doux spécialement sélectionnés; la délicieuse saveur de café
                  au lait glacé qui sort lorsqu’il est combiné avec la
                  spécialisation NESCAFÉ vous fera oublier l’intensité de la
                  journée.
                </P>
              </DescriptionContent>
            </Description>
          </Layout>
        </Item>

        <Item id="Grocery">
          <Layout>
            <Name>
              <NameContent>
                <Title className="grocery_line">Produits Alimentaires</Title>
                <Link to="alimentations">
                  <div className="grocery_line">
                    <span>Voir les Produits</span>
                  </div>
                </Link>
              </NameContent>
            </Name>

            <Overview>
              <OverviewContent>
                <Image src={groceryImage} alt="" />
              </OverviewContent>
            </Overview>

            <Description>
              <DescriptionContent>
                <P>
                  Nous proposons un large éventail de produits alimentaires de
                  la marque Tukas tels que des produits en conserve, des légumes
                  marinés, des confitures et sauces . Découvrez nos séléctions !
                </P>
              </DescriptionContent>
            </Description>
          </Layout>
        </Item>
      </Wrapper> */}
      <Footer />
    </>
  );
}

export default Products;
