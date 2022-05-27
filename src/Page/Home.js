import React from 'react';
import Submenu from './Component/Submenu'
import  Slider from './Component/Slider';
import Productlist from './Component/Productlist'
import Productlist2 from './Component/Productlist2'
export default function Home() {
  return (
      <>  
        <Submenu />
        <Slider />
        <Productlist title="Deals of the Day" bannerurl="https://rukminim2.flixcart.com/flap/464/708/image/209cf9cd9cfd432b.jpg?q=70"/>
        <Productlist2 title="Suggested for You"/>
        <Productlist2 title="Must-haves For All Gamers"/>
        <Productlist2 title="Trending Offers"/>
        <Productlist2 title="Laptops For You"/>
        <Productlist2 title="Recently Viewed"/>
      </>
  )
}
