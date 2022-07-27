import React from "react";
import setTitle from "../../Function/setTitle";
import LandingBodymist from "./LandingBodymist";
import NavbarBodymist from "./NavbarBodymist";
import FooterBodymist from "./FooterBodymist";

function Bodymist() {
  setTitle("Brumes Corporelles | AB Distribution");
  return (
    <>
      <NavbarBodymist />
      <LandingBodymist />
      <FooterBodymist />
    </>
  );
}

export default Bodymist;
