import React from 'react';
import  Navbar from './Component/Nevbar';
import  Slider from './Component/Slider';
import Productlist from './Component/Productlist'

export default function Home() {
  return (
      <>  
        <Navbar />
        <Slider />
        <Productlist />
      </>
  )
}
