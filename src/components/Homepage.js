import React from "react";
import styled from "styled-components";
import {} from "./Common";
import Landing from "./pageContent/Landing";
import Products from "./pageContent/Products";

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
      <Products />
    </Container>
  );
};

export default HomePage;
