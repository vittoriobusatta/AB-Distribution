import React from 'react'
import setTitle from '../../Function/setTitle';
import FooterGocery from './FooterGocery';
import LandingGrocery from './LandingGrocery';
import NavbarGrocery from './NavbarGrocery';

function Grocery() {
  setTitle("Épicerie | AB Distribution");
  return (
    <>
      <NavbarGrocery />
      <LandingGrocery />
      <FooterGocery />
    </>
  )
}

export default Grocery
