import React from 'react'
import setTitle from '../../Function/setTitle';
import LandingAirfreshener from '../Airfreshener/LandingAirfreshener';
import NavbarAirfreshener from '../Airfreshener/NavbarAirfreshener';

function Airfreshener() {
  setTitle("Désodorisants | AB Distribtion");

  return (
    <>
      <NavbarAirfreshener />
      <LandingAirfreshener />
    </>
  )
}

export default Airfreshener
