import React from "react";
import styled from "styled-components";
import ItemAntibacterial from "./ItemsProducts/ItemAntibacterial";
import ItemHandwash from "./ItemsProducts/ItemHandwash";
import ItemShowerGel from "./ItemsProducts/ItemShowerGel";
import ItemFood from "./ItemsProducts/ItemFood";
import ItemBodyMist from "./ItemsProducts/ItemBodyMist";
import ItemCoffee from "./ItemsProducts/ItemCoffee";
import ItemPerfume from "./ItemsProducts/ItemPerfume";
import ItemAirFreshener from "./ItemsProducts/ItemAirFreshener";
import ItemBrands from "./ItemsProducts/ItemBrands";


const Container = styled.section`
  height: auto;
  width: 100%;
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 15vh;
  @media (min-width: 1100px) {
    row-gap: 10vh;
  }
`;

function Products() {
  return (
    <Container>
      <Wrapper>
        <ItemAntibacterial />
        <ItemHandwash />
        <ItemShowerGel />
        <ItemPerfume />
        <ItemBodyMist />
        <ItemAirFreshener />
        <ItemCoffee />
        <ItemFood />
        <ItemBrands />
      </Wrapper>
    </Container>
  );
}

export default Products;
