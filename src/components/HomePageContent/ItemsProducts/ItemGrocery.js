import React from "react";
import grocery from "../../../assets/img/home/grocery.webp";
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

function ItemGrocery() {
  return (
    <Item>
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
            <Image src={grocery} alt="" />
          </OverviewContent>
        </Overview>

        <Description>
          <DescriptionContent>
            <P>
              Nous proposons un large éventail de produits alimentaires de la
              marque Tukas tels que des produits en conserve, des légumes
              marinés, des confitures et sauces . Découvrez nos séléctions !
            </P>
          </DescriptionContent>
        </Description>
      </Layout>
    </Item>
  );
}

export default ItemGrocery;
