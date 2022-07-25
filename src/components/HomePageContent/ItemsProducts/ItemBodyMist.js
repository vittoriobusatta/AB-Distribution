import React from "react";
import bodymist from "../../../assets/img/home/bodymist.webp";
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

function ItemBodyMist() {
  return (
    <Item>
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
            <Image src={bodymist} alt="" />
          </OverviewContent>
        </Overview>

        <Description>
          <DescriptionContent>
            <P>
              Nos brumes parfumées sont des parfums corporels qui sont
              spécialement conçues pour leur grande légèreté. Ces eaux parfumées
              sont beaucoup plus rafraîchissantes et contribuent également à
              hydrater notre corps.
            </P>
          </DescriptionContent>
        </Description>
      </Layout>
    </Item>
  );
}

export default ItemBodyMist;
