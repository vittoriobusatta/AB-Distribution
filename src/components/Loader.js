import React from "react";
import styled, { keyframes } from "styled-components";
import { accueil, mainColor } from "./Common";

const Container = styled.section`
  height: 100vh;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  z-index: 2000;
  background: ${mainColor};
  overflow: hidden;
  user-select: none;
  transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  /* transform: ${(props) => (props.isLoad === true ? "translateY(-100%)" : "translateY(0%)")}; */
  /* transform: translateY(0%); */
`;
const Bloc = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 400px;
    height: 200px;
    z-index: 1500;
`;

const loaderRotate = keyframes`
   from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`

const Circle = styled.div`
    bottom: 15%;
    left: calc(50% - 25px);
    width: 50px;
    height: 50px;
    border: 4px solid #f7ece2;
    border-left: 4px solid ${accueil};
    border-radius: 100px;
    animation: ${loaderRotate} 1s linear infinite;
    transition: 0.4s;
    transition-delay: 0.2s;
    z-index: 10;
`;


function Loader({ isLoaded }) {
  return (
    <Container isLoad={isLoaded}>
      <Bloc>
        <Circle />
      </Bloc>
    </Container>
  );
}

export default Loader;
