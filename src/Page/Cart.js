import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/Cartslice'
export default function Cart() {
    const dispatch = useDispatch();
    const productslist = useSelector((state) => state.Cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };
  return (
    <>
        { productslist.length ? <p>ok</p> : <p>oks</p> }
         <div className='container-10 mt-5 '>
         {productslist.length === 0
        ?  
        <div className='row '> 
            <div className='col-md-12 col-sm-12 p-4' style={{backgroundColor:'white'}} > 
            <div className='row p-3 text-center'> 
                    <h4>Cart Is Empty</h4>
            </div> 
            </div> 
        </div>        
        : 
            <div className='row '> 
                <div className='col-md-8 col-sm-12 p-4' style={{backgroundColor:'white'}} > 
                    <div className='row p-3 border border-1'> 
                 <div className='col-md-3 col-sm-12'><h4>My Cart ({productslist.length}) </h4></div> 
                        <div className='col-md-8 col-sm-12'><h4>Deliver to:  SURAT - 395004 </h4></div> 
                        <div className='col-md-1 col-sm-12'><button type="button" class="btn btn-outline-primary">Change</button></div> 
                    </div> 
                    { 
                    productslist.map((data) =>
                    <div className='row mt-2'> 
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-2">
                                <img src={data.payload.image}  className="img-fluid rounded-start" alt="praduct"  id='cart-item'/>
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title"><b>{data.payload.title}</b></h5>
                                        <p className="card-text">{data.payload.description}</p> 
                                        <p className="card-text"><small className="text-muted"><b>Category: </b>{data.payload.category}</small></p>
                                    </div>
                                    
                                  <div className="row g-0 p-3">
                                        <div className="col-md-4"> <h2>  ₹{data.payload.price}<sup><del>₹{data.payload.price*2}</del></sup> </h2></div>
                                        <div className="col-md-2 text-success"> <h4>  50% OFF </h4></div>
                                        <div className="col-md-6 text-success"> <h6>  1 coupon & 1 offer applied </h6></div>
                                    </div>
                           
                                    <div className="row g-0 p-3">
                                        <div className="col-md-4"> <h4 className="text-decoration-underline"> SAVE FOR LATER</h4></div>
                                        <div className="col-md-4"> 
              
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                <div className="row g-0 p-3">
                                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups" style={{justifyContent: 'center'}}>
                                            <div class="btn-group mr-2" role="group" aria-label="First group">
                                                <button type="button" class="btn  btn-primary">-</button>
                                                <button type="button" class=" count-btn btn-outline-light"><b>1</b></button> 
                                                <button type="button" class="btn  btn-primary">+</button>
                                            </div>
                                    </div>
                                </div>
                                    <div className="card-body">
                                    <div class="d-grid gap-2 col-6 mx-auto">
                                    <button   onClick={() => handleRemove(data.payload.id)} type="button" class="btn btn-danger btn-lg">REMOVE</button>
                                        </div>
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
                    <div class="p-2 flex-grow-1 bd-highlight"><h5>Price ({productslist.length} items)</h5></div>
                    <div class="p-2 bd-highlight"><h5>₹</h5></div>
                </div>
                
                <div class="d-flex bd-highlight">
                    <div class="p-2 flex-grow-1 bd-highlight"><h5>Discount</h5></div>
                    <div class="p-2 bd-highlight"><h5 className='text-success'> −₹</h5></div>
                </div>

                <div class="d-flex bd-highlight">
                    <div class="p-2 flex-grow-1 bd-highlight"><h5>Coupons for you</h5></div>
                    <div class="p-2 bd-highlight"><h5 className='text-success'> −₹</h5></div>
                </div>
                
                <div class="d-flex bd-highlight">
                    <div class="p-2 flex-grow-1 bd-highlight"><h5>Delivery Charges</h5></div>
                    <div class="p-2 bd-highlight"><h5 className='text-success'> </h5></div>
                </div>

                <hr className='m-0'/>
                <div class="d-flex bd-highlight mt-2 mb-2">
                    <div class="p-2 flex-grow-1 bd-highlight"><h4> Total Amount</h4></div>
                    <div class="p-2 bd-highlight"><h4 className='text-success'> ₹  </h4></div>
                </div>
                <hr className='m-0'/>
                <h5 className='text-success mt-2'> You will save ₹3,695 on this order</h5>

            </div> 
          </div> 
      }
        </div>  
    </>
  )
}
