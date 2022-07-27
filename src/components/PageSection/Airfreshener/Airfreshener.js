import React from 'react'
import setTitle from '../../Function/setTitle';
import LandingAirfreshener from '../Airfreshener/LandingAirfreshener';
import NavbarAirfreshener from '../Airfreshener/NavbarAirfreshener';
import FooterAirfreshener from './FooterAirfreshener';

function Airfreshener() {
  setTitle("Désodorisants | AB Distribution");

  return (
    <>
      <NavbarAirfreshener />
      <LandingAirfreshener />
      <FooterAirfreshener />
    </>
  )
}

export default Airfreshener
