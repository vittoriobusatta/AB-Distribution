import React from "react";
import styled from "styled-components";
import { mainColor, cabinBold, cabinMedium } from "./Common";

const Container = styled.section`
  position: fixed;
  bottom: 0;
  right: 0;
  width: calc(100vw - 100px);
  height: calc(100vh - 70px);
  display: flex;
  align-items: flex-end;
  z-index: 99;
  transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1),
    visibility 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  background: ${mainColor};
  box-shadow: none;
  touch-action: manipulation;
  transform: ${(props) =>
    props.isActive === true ? "translate(0%)" : "translate(100%)"};
  max-width: 400px;

  @media screen and (max-width: 350px) {
    width: calc(100vw - 70px);
  }
  @media screen and (min-width: 850px) {
    display: none;
  }
`;
const Wrap = styled.div`
  height: 100%;
  width: 100%;
  min-height: fill-available;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Nav = styled.nav`
  height: 80%;
  width: 100%;
  padding: 5rem 5rem;
`;
const Home = styled.div`
  height: auto;
  width: auto;
`;

const Colapsite = styled.div`
  border-bottom: 2px solid #000;
  height: 100%;
  width: 100%;
  padding: 3rem 0;

  & a {
    font-size: 1.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: #111;

    &.product_active {
      position: relative;
      font-family: ${cabinBold};
      text-transform: uppercase;
    }
  }
`;

const NavLinks = styled.div`
  height: auto;
  width: auto;
  padding-top: 3rem;

  ul {
    li {
      margin-bottom: 3rem;
      a {
        color: #222;
        font-size: 1.6rem;
        font-family: ${cabinMedium};
      }
    }
  }
`;
const Aside = styled.aside`
  height: auto;
  width: 100%;
  border-top: 2px solid #000;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  transition: all .25s cubic-bezier(.25,.46,.45,.94) .45s;
  & ul {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: auto;
    column-gap: 5rem;
    & li a {
      color: #222;
      font-size: 2rem;
      font-family: muli_reg;
      letter-spacing: 0.2rem;
      & svg {
        height: 1.8rem;
      }
    }
  }
`;

function Menu({ openMenu }) {
  return (
    <Container isActive={openMenu}>
      <Wrap>
        <Nav>
          <Home>
            <Colapsite>
              <a className="product_active product_accueil" href=".">
                Accueil
              </a>
            </Colapsite>
          </Home>
          <NavLinks>
            <ul>
              <li>
                <a href=".">Produits</a>
              </li>
              <li>
                <a href=".">Contact</a>
              </li>
            </ul>
          </NavLinks>
        </Nav>

        <Aside className="mm_socials_links">
          <ul>
            <li>
              <a href=".">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </li>
            <li>
              <a href=".">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
                </svg>
              </a>
            </li>
            <li>
              <a href=".">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </a>
            </li>
          </ul>
        </Aside>
      </Wrap>
    </Container>
  );
}

export default Menu;
