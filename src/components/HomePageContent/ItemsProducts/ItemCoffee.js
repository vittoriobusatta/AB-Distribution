import React from "react";
import coffee from "../../../assets/img/home/coffee.webp";
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

function ItemCoffee() {
  return (
    <Item>
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
            <Image src={coffee} alt="" />
          </OverviewContent>
        </Overview>

        <Description>
          <DescriptionContent>
            <P>
              NESCAFÉ Xpress vous donnera le réveil dont vous avez besoin pour
              continuer votre journée. Les grains de café et le lait doux
              spécialement sélectionnés; la délicieuse saveur de café au lait
              glacé qui sort lorsqu’il est combiné avec la spécialisation
              NESCAFÉ vous fera oublier l’intensité de la journée.
            </P>
          </DescriptionContent>
        </Description>
      </Layout>
    </Item>
  );
}

export default ItemCoffee;
