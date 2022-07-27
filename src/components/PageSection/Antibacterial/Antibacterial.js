import React from "react";
import setTitle from "../../Function/setTitle";
import LandingAntibacterial from "./LandingAntibacterial";
import NavbarAntibacterial from "./NavbarAntibacterial";
import FooterAntibacterial from "./FooterAntibacterial";

function Antibacterial() {
  setTitle("Anti-Bactérien | AB Distribution");
  return (
    <>
      <NavbarAntibacterial />
      <LandingAntibacterial />
      <FooterAntibacterial />
    </>
  );
}

export default Antibacterial;
