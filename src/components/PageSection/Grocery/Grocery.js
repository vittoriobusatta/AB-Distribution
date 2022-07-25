import React from 'react'
import setTitle from '../../Function/setTitle';
import LandingGrocery from './LandingGrocery';

function Grocery() {
  setTitle("Épicerie | AB Distribtion");
  return (
    <>
      <LandingGrocery />
    </>
  )
}

export default Grocery
