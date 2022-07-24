import styled from "styled-components";
import Handwash from "./PageSection/Handwash/Handwash";
import Products from "./HomePageContent/Products";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./Function/ScrollToTop";
import LandingPerfume from "./PageSection/Perfume/LandingPerfume";
import LandingCoffee from "./PageSection/Coffee/LandingCoffee";
import LandingShowergel from "./PageSection/Showergel/LandingShowergel";
import LandingAirfreshener from "./PageSection/Airfreshener/LandingAirfreshener";
import LandingGrocery from "./PageSection/Grocery/LandingGrocery";
import LandingAntibacterial from "./PageSection/Antibacterial/LandingAntibacterial";
import LandingBodymist from "./PageSection/Bodymist/LandingBodymist";

const Container = styled.main`
  height: auto;
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 70px;
`;

const HomePage = () => {
  return (
    <Container>
      <ScrollToTop />
      

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="lave-mains" element={<Handwash />} />
        <Route path="parfums-d-ambiance" element={<LandingPerfume />} />
        <Route path="anti-bacterien" element={<LandingAntibacterial />} />
        <Route path="cafes" element={<LandingCoffee />} />
        <Route path="desodorisants" element={<LandingAirfreshener />} />
        <Route path="gels-douches" element={<LandingShowergel />} />
        <Route path="alimentations" element={<LandingGrocery />} />
        <Route path="brumes-corporelles" element={<LandingBodymist />} />
      </Routes>
    </Container>
  );
};

export default HomePage;
