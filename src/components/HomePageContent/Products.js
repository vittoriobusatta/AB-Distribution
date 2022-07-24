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
import { useState } from "react";
import Landing from "./Landing";


const Wrapper = styled.section`
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
  const [,] = useState(false);

  console.log();
  return (
    <>
      <Landing />
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
    </>
  );
}

export default Products;
