import React from "react";
import showergel from "../../../assets/img/home/showergel.webp";
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

function ItemShowergel() {
  return (
    <Item>
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
            <Image src={showergel} alt="" />
          </OverviewContent>
        </Overview>

        <Description>
          <DescriptionContent>
            <P>
              Avec les gels douche Ultra Compact, plongez dans le plaisir et la
              douceur du Paradis. Une expérience d'évasion unique grâce aux
              ingrédients exotiques et parfumés. Grâce à leur formule avec plus
              d'agent hydratant au pH neutre pour la peau et aux extraits
              naturels, vous sentez votre peau douce et hydratée.
            </P>
          </DescriptionContent>
        </Description>
      </Layout>
    </Item>
  );
}

export default ItemShowergel;
