import React from "react";
import styled from "styled-components";
import {} from "./Common";
import Landing from "./pageContent/Landing";

const Container = styled.main`
  /* height: auto; */
  height: 200vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin-top: 8vh;
`;

const HomePage = () => {
  return (
    <Container>
      <Landing />
    </Container>
  );
};

export default HomePage;
