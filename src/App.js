import "./font.css";
import "./reset.css";
import { mainColor } from "./components/Common";
import { createGlobalStyle } from "styled-components";
import { useEffect, useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage";
import Navbar from "./components/Navbar";

const GlobalStyle = createGlobalStyle`

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    transition: all .3s ease-in;

    @media (max-width: 1200px) {
      font-size: 50%;
    }
    @media (max-width: 850px) {
      font-size: 40%;
    }
    @media (max-width: 650px) {
      font-size: 30%;
    }
    @media (max-width: 380px) {
      font-size: 20%;
    }
  }

  body {
    background-color: ${mainColor};
    font-size: 1.4em;
  }

  ::-moz-selection {
    background: #CDEDF6;
    text-shadow: none;
  }

  ::selection {
    background: #CDEDF6;
    text-shadow: none;
  }

  ::-webkit-scrollbar{
    width: 10px;
    background-color: #FAF7EE;
  }
    
  ::-webkit-scrollbar-thumb{
    background: #D4CEBD;
    border-radius: 15px;
    transition: all .3s ease-in;
    /* &:hover {
      background-color: #fff;
    } */
  }

`;

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function onScroll() {
      let navBar = document.getElementById("navbar");

      // if (openMenu) {
      //   navBar.style.top = "0";
      //   return setOpenMenu(false);
      // }

      let currentPosition = window.pageYOffset;
      if (currentPosition > scrollTop) {
        navBar.style.top = "-100px";
      } else {
        navBar.style.top = "0";
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div>
      <GlobalStyle />
      <Navbar setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <HomePage />
    </div>
  );
}

export default App;
