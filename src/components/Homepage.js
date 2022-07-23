import styled from "styled-components";
import Handwash from "./PageSection/Handwash/Handwash";
import Landing from "./HomePageContent/Landing";
import Products from "./HomePageContent/Products";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./Function/ScrollToTop";

const Container = styled.main`
  height: auto;
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 8vh;
`;

const HomePage = ({ openMenu, setOpenMenu }) => {

  return (
    <Container>
      <Landing setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <Products
            />
          }
        />
        <Route path="lave-mains" element={<Handwash />} />
      </Routes>
    </Container>
  );
};

export default HomePage;
