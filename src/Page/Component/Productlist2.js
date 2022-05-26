
import Product from './Product'
import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import OwlCarousel from 'react-owl-carousel';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
export default function Productlist(props) {
  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(true)
  const fetchData = () => {
    fetch(
      `https://fakestoreapi.com/products`,
    )
      .then((response) => {
        return response.json()
      })

      .then((data) => {
        setproduct(data)
          setLoading(false);
      })
  }

    useEffect(() => {
      fetchData();
    
    }, [])


    const options = {
      margin: 30,
      responsiveClass: true,
      nav: true,
      dots: false,
      autoplay: true,
      loop: true,
      smartSpeed: 1000,
      navText:["<div class='nav-btn prev-slide prev-btn'><svg width='14.6' height='27' viewBox='0 0 16 27' xmlns='http://www.w3.org/2000/svg' class='FXox6K'><path d='M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z' fill='#000' class='FXox6K'></path></svg></div>","<div class='next-btn nav-btn next-slide'><svg width='14.6' style='transform: rotate(180deg);' height='27' viewBox='0 0 16 27' xmlns='http://www.w3.org/2000/svg' class='_2-wzdc'><path d='M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z' fill='#000' class='FXox6K'></path></svg></div>"],      responsive: {
        0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 6,
      }
      },
  };

    return (
      <>
        <div className='container-5 mt-5' style={{backgroundColor: 'white'}}>
          <div className='row mt-3'>
            
            <div className='col-12'>
                <div class="d-flex mt-4">
                  <div class="p-2"><h4>{props.title}</h4></div>
                  <div class="ms-auto p-2"><button type="button" className="btn btn-primary btn-lg">View</button></div>
                </div>
              </div>
              <div className='row mt-2'>
                <OwlCarousel className='owl-theme' {...options}>
                  { 
                    loading  ? <Loading />:
                    product.map((data) =>
                      <div class='item'>
                       <Product title={data.title} id={data.id} img={data.image} category={data.category} price={data.price}  rate={data.rating.rate} count={data.rating.count} />
                      </div>
                  )}
                </OwlCarousel>
              </div>
            
          </div>
        </div>
      </>
    )
  }