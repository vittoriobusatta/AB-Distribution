import "./font.css";
import "./reset.css";
import { createGlobalStyle } from "styled-components";
import HomePage from "./components/Homepage";
import {
  primaryColor,
} from "./components/Common";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
    background-color: #fff;
    font-size: 1.4em;
  }

`;

function App() {
  

  return (
    <div
      className="App"
    >
      <GlobalStyle />
      <HomePage />
    </div>
  );
}

export default App;
