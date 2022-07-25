import React from "react";
import handwash from "../../../assets/img/home/handwash.webp";
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

function ItemHandwash() {
  return (
    <Item>
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
            <Image src={handwash} alt="" />
          </OverviewContent>
        </Overview>

        <Description>
          <DescriptionContent>
            <P>
              Une bonne hygiène des mains est importante pour tout le monde. Il
              est important de se laver les mains plusieurs fois par jour :
              avant de cuisiner, de manger ou après un passage aux toilettes.
              Dans cette catégorie, vous retrouverez des savons liquides pour
              les mains sèches, normales ou sensibles, aux senteurs fruitées.
            </P>
          </DescriptionContent>
        </Description>
      </Layout>
    </Item>
  );
}

export default ItemHandwash;
