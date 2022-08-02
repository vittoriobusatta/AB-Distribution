import "./font.css";
import "./reset.css";
import { mainColor } from "./components/Common";
import { createGlobalStyle } from "styled-components";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage";
// import Navbar from "./components/HomePageContent/Navbar";
// import Menu from "./components/Menu";
// import Overlay from "./components/Overlay";

const GlobalStyle = createGlobalStyle`

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    transition: all .3s ease-in;
    height: fill-available;
    @media only screen and (min-width : 1824px) {
      font-size: 70%;
    } 
    @media screen and (max-width: 1400px) {
      font-size: 58%;
    }
    @media screen and (max-width: 1224px) {
      font-size: 52%;
    }
    @media screen and (max-width: 992px) {
      font-size: 46%;
    }
    @media screen and (max-width: 768px) {
      font-size: 40%;
    }
    @media screen and (max-width: 576px) {
      font-size: 34%;
    }
    @media screen and (max-width: 321px) {
      font-size: 28%;
    }
  } 

  body {
    background-color: ${mainColor};
    font-size: 1.6rem;
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
  }
`;

function App() {
  const [openMenu, setOpenMenu] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    function onScroll() {
      let navBar = document.getElementById("navbar");

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
    <>
      <GlobalStyle isActive={openMenu} />
      {/* <Loader isLoaded={isLoaded} setIsLoaded={setIsLoaded} /> */}
      <BrowserRouter>
        {/* <Navbar setOpenMenu={setOpenMenu} openMenu={openMenu} /> */}
        {/* <Menu setOpenMenu={setOpenMenu} openMenu={openMenu} /> */}
        {/* <Overlay setOpenMenu={setOpenMenu} openMenu={openMenu} /> */}

        <Routes>
          <Route
            path="/*"
            element={<HomePage setOpenMenu={setOpenMenu} openMenu={openMenu} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
