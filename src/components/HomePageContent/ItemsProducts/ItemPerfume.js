import React from "react";
import perfume from "../../../assets/img/home/perfume.webp";
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

function ItemPerfume() {
  return (
    <Item>
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
            <Image src={perfume} alt="" />
          </OverviewContent>
        </Overview>

        <Description>
          <DescriptionContent>
            <P>
              Les parfums d’intérieur peuvent donner vie à votre décoration et à
              votre maison en amenant une dimension sensorielle toute
              particulière. Les parfums d’ambiance spray vous permettront de
              créer une nouvelle atmosphère intérieure parfumée en un tour de
              main.
            </P>
          </DescriptionContent>
        </Description>
      </Layout>
    </Item>
  );
}

export default ItemPerfume;
