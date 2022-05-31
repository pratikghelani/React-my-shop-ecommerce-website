import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
export default function Submenu() {

  const options = {
    margin: 4,
    loop: true,
    items: 5,
    dots: false,
    }
  
  return (
    <>
    <div  className='d-none d-sm-none d-md-none d-lg-block d-xl-block' style={{ backgroundColor:'white' }}>
     <div className='container-15'>
          <div class="row pt-3 pb-3">
              <div class="col-4">   
                <div class="row">
                  <div class="col-4 text-center"> 
                    <div>
                      <img className='submenu-icon' src='/img/8.PNG' />
                    </div>
                    <div className="mt-1 submenu-tag">
                      <b>Top Offers</b></div>
                    </div>
                  <div class="col-4 text-center"> 
                    <div>
                      <img className='submenu-icon' src='/img/2.PNG' />
                    </div>
                    <div className="mt-1 submenu-tag">
                      <b>Grocery</b></div>
                    </div>
                  <div class="col-4 text-center"> 
                    <div>
                      <img className='submenu-icon' src='/img/3.PNG' />
                    </div>
                    <div className="mt-1 submenu-tag">
                      <b>Mobiles</b></div>
                    </div>
                </div>
              </div>
              <div class="col-4">   
                <div class="row">
                  <div class="col-4 text-center"> 
                    <div>
                      <img className='submenu-icon' src='/img/4.PNG' />
                    </div>
                    <div className="mt-1 submenu-tag">
                      <b>Fashion</b></div>
                    </div>
                  <div class="col-4 text-center"> 
                    <div>
                      <img className='submenu-icon' src='/img/5.PNG' />
                    </div>
                    <div className="mt-1 submenu-tag">
                      <b>Electronics</b></div>
                    </div>
                  <div class="col-4 text-center"> 
                    <div>
                      <img className='submenu-icon' src='/img/6.jpg' />
                    </div>
                    <div className="mt-1 submenu-tag">
                      <b>Home</b></div>
                    </div>
                </div>
              </div>
              <div class="col-4">   
                <div class="row">
                  <div class="col-4 text-center"> 
                    <div>
                      <img className='submenu-icon' src='/img/7.PNG' />
                    </div>
                    <div className="mt-1 submenu-tag">
                      <b>Application</b></div>
                    </div>
                  <div class="col-4 text-center"> 
                    <div>
                      <img className='submenu-icon' src='/img/8.PNG' />
                    </div>
                    <div className="mt-1 submenu-tag">
                      <b>Travel</b></div>
                    </div>
                  <div class="col-4 text-center"> 
                    <div>
                      <img className='submenu-icon' src='/img/9.PNG' />
                    </div>
                    <div className="mt-1 submenu-tag">
                      <b>Beauty, Toy & More</b></div>
                    </div>
                </div>
              </div>
          </div>
      </div> 
    </div>

    <div className='d-block d-sm-block d-md-block d-lg-none d-xl-none pt-2 pb-2' >
      <OwlCarousel className='owl-theme' {...options} >
          <div class='item'>
              <img className='submenu-icon' src='/img/submenu-icon/1.JPG' />
          </div>
          <div class='item'>
            <img className='submenu-icon' src='/img/submenu-icon/2.JPG' />
          </div>
          <div class='item'>
            <img className='submenu-icon' src='/img/submenu-icon/3.JPG' />
          </div>
          <div class='item'>
            <img className='submenu-icon' src='/img/submenu-icon/4.JPG' />
          </div>
          <div class='item'>
            <img className='submenu-icon' src='/img/submenu-icon/5.JPG' />
          </div>
          <div class='item'>
            <img className='submenu-icon' src='/img/submenu-icon/6.JPG' />
          </div>
          <div class='item'>
            <img className='submenu-icon' src='/img/submenu-icon/7.JPG' />
          </div>
          <div class='item'>
            <img className='submenu-icon' src='/img/submenu-icon/8.JPG' />
          </div>
          <div class='item'>
            <img className='submenu-icon' src='/img/submenu-icon/9.JPG' />
          </div>
          <div class='item'>
            <img className='submenu-icon' src='/img/submenu-icon/10.JPG' />
          </div>
          <div class='item'>
            <img className='submenu-icon' src='/img/submenu-icon/11.JPG' />
          </div>
          <div class='item'>
            <img className='submenu-icon' src='/img/submenu-icon/12.JPG' />
          </div>
          <div class='item'>
            <img className='submenu-icon' src='/img/submenu-icon/13.JPG' />
          </div>
          <div class='item'>
            <img className='submenu-icon' src='/img/submenu-icon/14.JPG' />
          </div>
          <div class='item'>
            <img className='submenu-icon' src='/img/submenu-icon/15.JPG' />
          </div>
      </OwlCarousel>
    </div>

    </>
  )
}
