import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
export default function () {

    const options = {
        nav: true,
        dots: false,
        autoplay: true,
        loop: true,
        smartSpeed: 1000,
        navText:["<div class='nav-btn prev-slide prev-btn'><svg width='14.6' height='27' viewBox='0 0 16 27' xmlns='http://www.w3.org/2000/svg' class='FXox6K'><path d='M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z' fill='#000' class='FXox6K'></path></svg></div>","<div class='next-btn nav-btn next-slide'><svg width='14.6' style='transform: rotate(180deg);' height='27' viewBox='0 0 16 27' xmlns='http://www.w3.org/2000/svg' class='_2-wzdc'><path d='M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z' fill='#000' class='FXox6K'></path></svg></div>"],
    };


  return (
        <>
            <div className='container-5 mt-3'>
                <OwlCarousel className='owl-theme' {...options} items={1}  >
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
