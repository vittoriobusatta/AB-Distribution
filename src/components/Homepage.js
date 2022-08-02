import styled from "styled-components";
import Handwash from "./PageSection/Handwash/Handwash";
import Products from "./PageSection/Products/Products";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./Function/ScrollToTop";
import Airfreshener from "./PageSection/Airfreshener/Airfreshener";
import Antibacterial from "./PageSection/Antibacterial/Antibacterial";
import Bodymist from "./PageSection/Bodymist/Bodymist";
import Coffee from "./PageSection/Coffee/Coffee";
import Grocery from "./PageSection/Grocery/Grocery";
import Perfume from "./PageSection/Perfume/Perfume";
import Showergel from "./PageSection/Showergel/Showergel";
import LegalNotice from "./PageSection/LegalNotice/LegalNotice";

const Container = styled.main`
  height: auto;
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 70px;
  position: relative;
  z-index: 1;
`;

const HomePage = () => {
  return (
    <Container>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="lave-mains" element={<Handwash />} />
        <Route path="parfums-d-ambiance" element={<Perfume />} />
        <Route path="anti-bacterien" element={<Antibacterial />} />
        <Route path="cafes" element={<Coffee />} />
        <Route path="desodorisants" element={<Airfreshener />} />
        <Route path="gels-douches" element={<Showergel />} />
        <Route path="alimentations" element={<Grocery />} />
        <Route path="brumes-corporelles" element={<Bodymist />} />
        <Route path="mentions-legales" element={<LegalNotice />} />
      </Routes>
    </Container>
  );
};

export default HomePage;
