import React from 'react'
import setTitle from '../../Function/setTitle';
import LandingCoffee from './LandingCoffee';
import NavbarCoffee from './NavbarCoffee';

function Coffee() {
  setTitle("Cafés | AB Distribution");
  return (
    <>
      <NavbarCoffee />
      <LandingCoffee />
    </>
  )
}

export default Coffee
