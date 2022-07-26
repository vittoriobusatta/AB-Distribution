import React from 'react'
import setTitle from '../../Function/setTitle';
import LandingPerfume from './LandingPerfume';
import NavbarPerfume from './NavbarPerfume';

function Perfume() {
  setTitle("Parfums | AB Distribution");
  return (
    <>
      <NavbarPerfume />
      <LandingPerfume />
    </>
  )
}

export default Perfume
