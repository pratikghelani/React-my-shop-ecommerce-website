import React from 'react';
import Submenu from './Component/Submenu'
import  Slider from './Component/Slider';
import Productlist from './Component/Productlist'
import Productlist2 from './Component/Productlist2'
export default function Home() {
  return (
      <>  
        <Submenu/>
        <Slider/>
        <Productlist title="Deals of the Day" bannerurl="https://rukminim2.flixcart.com/flap/464/708/image/209cf9cd9cfd432b.jpg?q=70" items="5"/>
        <Productlist2 title="Jewelery"  items="6"/>    
        <Productlist2 title="Women's clothing" items="6"/>
        <Productlist2 title="Electronics" items="6"/>
        <Productlist2 title="Men's clothing" items="6"/>
      </>
    )
}
