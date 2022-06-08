import React, { useState, useEffect } from 'react';
import { useParams} from "react-router-dom";
import Spinners from './Component/Loading';
import Productlist2 from './Component/Productlist2'
export default function Productdetails() {
  let { id } = useParams();
  const [quantity] = useState(1);
    const [product, setproduct] = useState([])
    const [loading, setLoading] = useState(true)
    // const dispatch = useDispatch();
    const fetchData = () => {
      fetch(  
        `https://fakestoreapi.com/products/`+id,
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
      fetchData()
    }, [])

  return (
    <>
   {  loading  ? 
       <div className='row mt-5' >
           <Spinners /></div> : 
<div>
  <section className="padding-y mt-5" >
    <div className="container-15" style={{backgroundColor: 'white'}}>
      <div className="row">
        <aside className="col-lg-6">
          <article className="gallery-wrap"> 
            <div className="img-big-wrap img-thumbnail">
               <img src={product.image} style={{width: '80%', margin: '10%'}} />
            </div> 
          </article> 
        </aside>
        <main className="col-lg-6 p-5" >
          <article className="ps-lg-3">
            <h2 className="title text-dark"> {product.title}</h2>
            <div className="rating-wrap my-3">
              <b className="text-success"> {product.rating.rate}</b>
              <span className="text-muted"> <i class="bi bi-star-fill"></i> {product.rating.count} </span>
              <span className="text-success">In stock</span>
            </div>
            <div className="mb-3 ml-5 d-flex"> 
              <h1>Rs. {product.price}</h1> <h3 className="text-muted"><del>Rs. {product.price*2} </del> </h3> 
              <h2>50% OFF</h2>
            </div> 

            <dl className="row">
              <dt className="col-3">Type:</dt>
              <dd className="col-9">Regular</dd>
              <dt className="col-3">Color</dt>
              <dd className="col-9">Brown</dd>
              <dt className="col-3">Material</dt>
              <dd className="col-9">Cotton, Jeans </dd>
              <dt className="col-3">Brand</dt>
              <dd className="col-9">Reebook </dd>
            </dl>

          <div className='row'>
            <div className='col-6'> <button style={{width: '100%', height: '100%',backgroundColor: '#ff9f00', borderColor:'white'}} type="button" className="btn btn-primary btn-lg"> 
            <i className="bi bi-bag-fill" />
             {/* <span  onClick={() => dispatch({type: 'ADD_TO_CART', payload: {product, quantity} })}>ADD TO CART</span> */}
             <span>ADD TO CART</span>
             </button></div> 
            <div className='col-6'> <button style={{width: '100%', height: '100%',backgroundColor: 'orangered', borderColor:'white'}} type="button" className="btn btn-primary  btn-lg" >
              <i className="bi bi-credit-card-2-back-fill" />
              <span>  BUY NOW</span>
               </button> </div> 
          </div> 

            <p className='mt-2'>{product.description}</p>
            <div>
                   <h5 className='text-success'> Available offers</h5>
                  <ul>
                          <li>Bank Offer10% off on ICICI Bank Credit Cards, up to ₹500. On orders of ₹5000 and above.</li>
                          <li>Bank Offer10% Instant Discount on RBL Bank Credit and Debit Cards.</li>
                          <li>Bank Offer10% instant discount on OneCard Credit Cards, up to ₹1500. On orders of ₹3000 and above.</li>
                          <li>Combo OfferBuy 3 items save 5%;Buy 4 save 7%;Buy 5+ save 10%See all products.</li>
                          <li>Special PriceExtra ₹180 off(price inclusive of discount).</li>
                          <li>FreebieUser will get free 3 Months Gaana Plus. Gaana Plus enables the user to - get an ad-free experience.</li>
                          <li>Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*Know .</li>
                          <li>Bank Offer5% Cashback on Flipkart Axis Bank Card.</li>
                      </ul>
                  </div>
          
            <hr />
            <p>{product.description}{product.description}{product.description}{product.description}{product.description}</p>
          
          </article> 
        </main> 
      </div>    

          <Productlist2 title="Trending Offers" items="5" />
      
    </div>

  </section>

</div>

   }


    </>
  )
}
