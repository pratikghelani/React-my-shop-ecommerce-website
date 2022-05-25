
import Product from './Product'
import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import OwlCarousel from 'react-owl-carousel';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
export default function Productlist() {
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
      })
  }

    useEffect(() => {
      fetchData();
      setLoading(false);
    }, [])

    const options = {
      margin: 30,
      responsiveClass: true,
      nav: true,
      dots: false,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
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
              items: 6,
          },
          1000: {
              items: 6,

          }
      },
  };

    return (
      <>
        <div className='container-5'>
          <div className='row mt-2'>
            <div className='col-md-10 col-sm-12  '>
              <div className='row '>
                <div ><h4>Deals of the Day</h4></div>
              </div>
              <div className='row mt-2'>
                <OwlCarousel className='owl-theme' {...options}>
                  { 
                    loading  ? <Loading />:
                    product.map((data) =>
                      <div class='item'>
                        <Product title={data.title} img={data.image} category={data.category} price={data.price} />
                      </div>
                  )}
                </OwlCarousel>
              </div>
            </div>
            <div className='col-md-2 col-sm-12'>
              <div className='row '>
                <img src="https://rukminim2.flixcart.com/flap/464/708/image/209cf9cd9cfd432b.jpg?q=70" class="card-img-top" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
