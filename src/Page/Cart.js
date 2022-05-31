import React, { useState, useEffect } from 'react';
import Loading from '../Page/Component/Loading';
import { useSelector } from 'react-redux'
export default function Cart() {
    const CartData = useSelector(state => state.CartReducers)
    const [product, setproduct] = useState([]);
    const [loading, setLoading] = useState(true)
    const fetchData = () => {
        fetch(
          `https://fakestoreapi.com/products?limit=3`,
        )
          .then((response) => {
            return response.json()
          })
    
          .then((data) => {
            setproduct(data)
            setLoading(false);
            console.log(data)
          })
      }
        useEffect(() => {
          fetchData();
         
        }, [])

  return (
    <>
        <div className='container-10 mt-5 '>
          <div className='row '> 
                <div className='col-md-8 col-sm-12 p-4' style={{backgroundColor:'white'}} > 
                    <div className='row p-3 border border-1'> 
                        <div className='col-md-3 col-sm-12'><h4>My Cart ({CartData.totalQuantities}) </h4></div> 
                        <div className='col-md-8 col-sm-12'><h4>Deliver to:  SURAT - 395004 </h4></div> 
                        <div className='col-md-1 col-sm-12'><button type="button" class="btn btn-outline-primary">Change</button></div> 
                    </div> 
                    { 
                    loading  ? <div className='mt-4'> <Loading /></div> :
                    product.map((data) =>
                    <div className='row mt-2'> 
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-2">
                                <img src={data.image}  className="img-fluid rounded-start" alt="..."  id='cart-item'/>
                                  
                                <div className="row g-0 p-3">
                                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups" style={{justifyContent: 'center'}}>
                                            <div class="btn-group mr-2" role="group" aria-label="First group">
                                                <button type="button" class="btn plue-btn btn-primary">-</button>
                                                <button type="button" class="btn count-btn btn-outline-light"><b>1</b></button> 
                                                <button type="button" class="btn minus-btn btn-primary">+</button>
                                            </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title"><b>{data.title}</b></h5>
                                        <p className="card-text">{data.description}</p> 
                                        <p className="card-text"><small className="text-muted"><b>Category:</b>Whole9Yards</small></p>
                                    </div>
                                    
                                  <div className="row g-0 p-3">
                                        <div className="col-md-4"> <h2>  ₹{data.price}<sup><del>₹{data.price*2}</del></sup> </h2></div>
                                        <div className="col-md-2 text-success"> <h4>  50% OFF </h4></div>
                                        <div className="col-md-6 text-success"> <h6>  1 coupon & 1 offer applied </h6></div>
                                    </div>
                           
                                    <div className="row g-0 p-3">
                                        <div className="col-md-4"> <h4 className="text-decoration-underline"> SAVE FOR LATER</h4></div>
                                        <div className="col-md-4"> <h4 className="text-decoration-underline"> REMOVE </h4></div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card-body">
                                        <p className="card-title">Delivery in 2 days, Sun | <span className='text-success'>Free </span> ₹40</p> 
                                        <p>7 Days Replacement Policy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                )}
                 <div className='row p-3 border border-1 d-flex justify-content-end' id="place-order-btn" style={{backgroundColor:'white'}}> 
                        <div className='d-flex justify-content-end'><button type="button" class="place-order-btn btn-lg">PLACE ORDER</button></div> 
                    </div> 
                </div> 

            <div className='col-md-4 col-sm-12 pt-5 pl-3' style={{backgroundColor:'white'}}  > 
                <div className='row '> 
                    <h4>PRICE DETAILS</h4>
                </div> 
                <hr/>
                <div class="d-flex bd-highlight">
                    <div class="p-2 flex-grow-1 bd-highlight"><h5>Price ({CartData.totalQuantities} items)</h5></div>
                    <div class="p-2 bd-highlight"><h5>₹{CartData.totalsubPrice}</h5></div>
                </div>
                
                <div class="d-flex bd-highlight">
                    <div class="p-2 flex-grow-1 bd-highlight"><h5>Discount</h5></div>
                    <div class="p-2 bd-highlight"><h5 className='text-success'> −₹{CartData.discount}</h5></div>
                </div>

                <div class="d-flex bd-highlight">
                    <div class="p-2 flex-grow-1 bd-highlight"><h5>Coupons for you</h5></div>
                    <div class="p-2 bd-highlight"><h5 className='text-success'> −₹{CartData.coupons}</h5></div>
                </div>
                
                <div class="d-flex bd-highlight">
                    <div class="p-2 flex-grow-1 bd-highlight"><h5>Delivery Charges</h5></div>
                    <div class="p-2 bd-highlight"><h5 className='text-success'> {CartData.deliveryCharges }</h5></div>
                </div>

                <hr className='m-0'/>
                <div class="d-flex bd-highlight mt-2 mb-2">
                    <div class="p-2 flex-grow-1 bd-highlight"><h4> Total Amount</h4></div>
                    <div class="p-2 bd-highlight"><h4 className='text-success'> ₹ {CartData.totalPrice } </h4></div>
                </div>
                <hr className='m-0'/>
                <h5 className='text-success mt-2'> You will save ₹3,695 on this order</h5>

            </div> 
          </div> 
        </div> 
    </>
  )
}

// Price (2 items)
// Discount
// − ₹3,575
// Coupons for you
// − ₹120
// Delivery Charges
// FREE