import React from "react";
import styled from "styled-components";
import {} from "./Common";
import Handwash from "./PageSection/Handwash/Handwash";
import Landing from "./HomePageContent/Landing";
// import Products from "./HomePageContent/Products";

const Container = styled.main`
  height: auto;
  /* height: 200vh; */
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 8vh;
`;

const HomePage = () => {
  return (
    <Container>
      <Landing />
      {/* <Products />  */}
      <Handwash />
    </Container>
  );
};

export default HomePage;
