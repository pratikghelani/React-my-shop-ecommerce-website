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
        <Productlist title="Deals of the Day" bannerurl="https://rukminim2.flixcart.com/flap/464/708/image/209cf9cd9cfd432b.jpg?q=70" items="5"/>
        <Productlist2 title="Suggested for You" items="6"/>
        <Productlist2 title="Must-haves For All Gamers" items="6"/>
        <Productlist2 title="Trending Offers" items="6"/>
        <Productlist2 title="Laptops For You" items="6"/>
        <Productlist2 title="Recently Viewed" items="6"/>
      </>
  )
}
