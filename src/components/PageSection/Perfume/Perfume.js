import React from 'react'
import setTitle from '../../Function/setTitle';
import FooterPerfume from './FooterPerfume';
import LandingPerfume from './LandingPerfume';
import NavbarPerfume from './NavbarPerfume';

function Perfume() {
  setTitle("Parfums | AB Distribution");
  return (
    <>
      <NavbarPerfume />
      <LandingPerfume />
      <FooterPerfume />
    </>
  )
}

export default Perfume
