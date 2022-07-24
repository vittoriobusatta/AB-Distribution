import React from "react";
import styled from "styled-components";
import ItemAntibacterial from "./ItemsProducts/ItemAntibacterial";
import ItemHandwash from "./ItemsProducts/ItemHandwash";
import ItemShowerGel from "./ItemsProducts/ItemShowerGel";
import ItemGrocery from "./ItemsProducts/ItemGrocery";
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
  /* @media screen and (min-width: 1100px) {
    row-gap: 10vh;
  }
  @media screen and (min-height: 700px) {
    row-gap: 5vh;
  } */
`;

function Products() {

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
        <ItemGrocery />
        {/* <ItemBrands /> */}
      </Wrapper>
    </>
  );
}

export default Products;
