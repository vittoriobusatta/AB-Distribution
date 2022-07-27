import React from 'react'
import setTitle from '../../Function/setTitle';
import LandingShowergel from './LandingShowergel';
import NavbarShowergel from './NavbarShowergel';
import FooterShowergel from './FooterShowergel';

function Showergel() {
  setTitle("Gels Docuhes | AB Distribution");
  return (
    <>
      <NavbarShowergel />
      <LandingShowergel />
      <FooterShowergel />
    </>
  )
}

export default Showergel
