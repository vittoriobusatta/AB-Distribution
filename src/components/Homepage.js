import React from "react";
import styled from "styled-components";
import {primaryColor } from "./Common";

const HomePageContainer = styled.main`
  height: auto;
  width: calc(100% - 100px);
  background-color: #000;

`;

const HomePage = ({ lightMode, setlightMode }) => {
  return (
    <HomePageContainer isLight={lightMode}>

    </HomePageContainer>
  );
};

export default HomePage;
