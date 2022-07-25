import React from "react";
import antibacterial from "../../../assets/img/home/antibacterial.webp";
import { Link } from "react-router-dom";
import {
  Item,
  Layout,
  Name,
  NameContent,
  Title,
  Svg,
  Overview,
  OverviewContent,
  Image,
  Description,
  DescriptionContent,
  P,
} from "../../Common";

function ItemAntibacterial() {
  return (
    <Item>
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
            <Image src={antibacterial} alt="" />
          </OverviewContent>
        </Overview>

        <Description>
          <DescriptionContent>
            <P>
              Parce que 80% des microbes se transmettent par les mains, il est
              important d’adopter les bons gestes d’hygiène pour se protéger des
              infections comme le rhume ou le covid-19. Découvrez notre
              séléctions de produits anti-bactériens
            </P>
          </DescriptionContent>
        </Description>
      </Layout>
    </Item>
  );
}

export default ItemAntibacterial;
