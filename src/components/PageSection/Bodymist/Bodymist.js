import React from "react";
import setTitle from "../../Function/setTitle";
import LandingBodymist from "./LandingBodymist";
import NavbarBodymist from "./NavbarBodymist";

function Bodymist() {
  setTitle("Brumes Corporelles | AB Distribtion");
  return (
    <>
      <NavbarBodymist />
      <LandingBodymist />
    </>
  );
}

export default Bodymist;
