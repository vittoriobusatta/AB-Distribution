import React from "react";
import airfreshener from "../../../assets/img/home/airfreshener.webp";
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

function ItemAirFreshener() {
  return (
    <Item>
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
            <Image src={airfreshener} alt="" />
          </OverviewContent>
        </Overview>

        <Description>
          <DescriptionContent>
            <P>
              Un désodorisant d’intérieur est aussi un moyen efficace de lutter
              contre les mauvaises odeurs dans votre maison. Dîtes adieu aux
              odeurs de poubelles, de linge sale ou d’humidité et bienvenue aux
              odeurs et parfums frais ou gourmands d’Ultra Compact !
            </P>
          </DescriptionContent>
        </Description>
      </Layout>
    </Item>
  );
}

export default ItemAirFreshener;
