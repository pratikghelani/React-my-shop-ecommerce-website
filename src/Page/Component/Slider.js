import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
export default function () {
  return (
        <>
            <div className='container-5 mt-3'>
                <OwlCarousel className='owl-theme' loop margin={1} items={1}  autoplay={true} nav>
                    <div class='item'>
                    <img class="d-block w-100" src="./img/bannner1.jpeg" alt="First slide"/>
                    </div>
                    <div class='item'>
                    <img class="d-block w-100" src="./img/banner2.jpg" alt="sec slide"/>
                    </div>
                </OwlCarousel>
            </div>
        </>
  )
}
