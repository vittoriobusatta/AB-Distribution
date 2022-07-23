import React from "react";
import styled from "styled-components";

const Container = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 10;
    visibility:  ${(props) =>
    props.isActive === true ? "visible" : "hidden"};
    opacity: ${(props) =>
    props.isActive === true ? 0.5 : 0};;
    transition: opacity .3s ease-in-out,visibility .3s ease-in-out;
    background-color: #202020;
`;



function Overlay({ openMenu, setOpenMenu }) {
    const CloseMenu = () => {
        setOpenMenu(false);
      };
  return (
    <Container onClick={CloseMenu} isActive={openMenu}></Container>
  )
}

export default Overlay;
