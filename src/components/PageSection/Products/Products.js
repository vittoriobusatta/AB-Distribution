import React from "react";
import styled from "styled-components";
import Landing from "./Landing";
import setTitle from "../../Function/setTitle";
import {
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
import { mainColor } from "../../Common";
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

function Products() {
  setTitle("Accueil | AB Distribution");

  return (
    <>
      <Navbar />
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
          </Layout>
        </Item>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Products;
