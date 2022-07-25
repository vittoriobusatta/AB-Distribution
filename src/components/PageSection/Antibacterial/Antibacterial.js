import React from "react";
import setTitle from "../../Function/setTitle";
import LandingAntibacterial from "./LandingAntibacterial";
import NavbarAntibacterial from "./NavbarAntibacterial";

function Antibacterial() {
  setTitle("Anti-Bactérien | AB Distribtion");
  return (
    <>
      <NavbarAntibacterial />
      <LandingAntibacterial />
    </>
  );
}

export default Antibacterial;
