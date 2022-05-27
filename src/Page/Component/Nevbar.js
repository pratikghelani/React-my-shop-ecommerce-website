import React from 'react'
import { Link } from "react-router-dom";

export default function Nevbar() {
  return (
    <>
    
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary" id="pc-nevbar">
    <div className="container">
  
      <Link className="navbar-brand" to="/">    
      <div>
          <img width="75" src="/img/logo.png" alt="Flipkart" title="Flipkart"/><br/>
          <i style={{fontSize: 'small'}}>Explore Plus <sup><img width={10} src="/img/sub-logo.png" alt="Flipkart" title="Flipkart" /></sup></i>
      </div>

      </Link>
      <div className="collapse navbar-collapse" id="main_nav">
        <input type="text" style={{width: '60%'}} className="form-control search-bar" placeholder="Search for products, brands and more" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <div className="input-group-append">
            <a href=''>
                <span className="input-group-text search-btn" id="basic-addon2" ><i class="bi bi-search"></i></span>
            </a>
        </div>
        
        <ul className="navbar-nav ms-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle btn btn-light text-dark login-btn" href="/" data-bs-toggle="dropdown" > Loin </a>
            <ul className="dropdown-menu dropdown-menu-end fade-down login-dropdown" >
              <li><a className="dropdown-item" href="/">New Customer</a></li><hr/>
              <li><a className="dropdown-item" href="/"> My Profile</a></li><hr/>
              <li><a className="dropdown-item" href="/"> Flipkart Plus Zone </a></li><hr/>
              <li><a className="dropdown-item" href="/"> Orders </a></li><hr/>
              <li><a className="dropdown-item" href="/"> Wishlist </a></li><hr/>
              <li><a className="dropdown-item" href="/"> Rewards </a></li><hr/>
              <li><a className="dropdown-item" href="/"> Gift Cards </a></li>
            </ul>
          </li>
          <li className="nav-item"><a className="nav-link" href="/" style={{color:'white'}}>Become a Seller </a></li>
          <li className="nav-item"><a className="nav-link" href="/" style={{color:'white'}}>More </a></li>
          <li className="nav-item"><Link className="nav-link" to="/Cart" style={{color:'white'}}><i class="bi bi-cart-fill"></i> Cart </Link></li>
        </ul>
      </div> 
    </div> 
  </nav>

  {/* <nav className=" bg-primary" id="mobile-nevbar">
  <div class="row pt-3 ">
    <div class="col-1">   

          <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          <i class="bi bi-list" style={{color: 'white'}}></i>
</a>
      </div>
    <div class="col-6 px-4"> <img width="75" src="/img/logo.png" alt="Flipkart" title="Flipkart"/><br/>
          <i style={{fontSize: 'small',color: 'white'}} >Explore Plus <sup><img width={10} src="/img/sub-logo.png" alt="Flipkart" title="Flipkart" /></sup></i></div>
    <div class="col-3 p-0 "><a className="" href="/" style={{color:'white',textDecoration:'none'}}><i class="bi bi-cart-fill"></i> Cart  <sup style={{backgroundColor:'red',color:'white',borderRadius:'15px',borderColor:'white'}}>41</sup> </a></div>
    <div class="col-2 p-0 "><a className="" href="/" style={{color:'white',textDecoration:'none'}}>Login </a> </div>
  </div>
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>
   
  </nav> */}

  </>
  )
}
