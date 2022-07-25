import React from 'react'
import setTitle from '../../Function/setTitle';
import LandingGrocery from './LandingGrocery';
import NavbarGrocery from './NavbarGrocery';

function Grocery() {
  setTitle("Épicerie | AB Distribtion");
  return (
    <>
      <NavbarGrocery />
      <LandingGrocery />
    </>
  )
}

export default Grocery
