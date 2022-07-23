import React from "react";
import styled from "styled-components";

const Container = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100vw - 100px);
  height: 100vh;
  max-height: none;
  z-index: 990;
  transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1),
    visibility 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  background: #fff;
  box-shadow: none;
  touch-action: manipulation;
  transform: ${(props) =>
    props.isActive === true ? "translate(0%)" : "translate(100%)"};
  max-width: 400px;

  @media (max-width: 350px) {
    width: calc(100vw - 70px);
  }
  @media (min-width: 850px) {
    display: none;
  }
`;
function Menu({ openMenu }) {
  return <Container isActive={openMenu}></Container>;
}

export default Menu;
