import React from "react";
import setTitle from "../../Function/setTitle";
import LandingAntibacterial from "./LandingAntibacterial";
import NavbarAntibacterial from "./NavbarAntibacterial";

function Antibacterial() {
  setTitle("Anti-Bactérien | AB Distribution");
  return (
    <>
      <NavbarAntibacterial />
      <LandingAntibacterial />
    </>
  );
}

export default Antibacterial;
