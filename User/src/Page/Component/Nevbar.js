import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from 'axios';
export default function Nevbar() {
  const productscount = useSelector((state) => state.Cartitem);
  const [signupPage, setSignupPage] = useState(false);

  return (
    <>
      <nav className="d-none d-sm-none d-md-none d-lg-block d-xl-block bg-primary fixed-top p-3" >
        <div class="container p5">
          <div class="d-flex">
            <div style={{ width: '10%' }}>
              <Link to='/'>
                <img width="75" src="/img/logo.png" alt="Flipkart" title="Flipkart" /><br />
                <i style={{ fontSize: 'small' }} className="text-white">Explore Plus <sup><img width={10} src="/img/sub-logo.png" alt="Flipkart" title="Flipkart" /></sup></i>
              </Link>
            </div>
            <div className='d-flex' style={{ width: '40%' }}>
              <input type="text" style={{ width: '90%' }} className="form-control search-bar" placeholder="Search for products, brands and more" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <button type="button" class="btn btn-light search-bar"><i class="bi bi-search"></i></button>
              </div>
            </div>

            <div className='d-flex' style={{ justifyContent: "center", width: "50%" }}>
              <div style={{ width: '25%' }} className="justify-content-end">
                <div class="dropdown">
                <Link to={"/Login"}>
                  <button class="btn btn-light login-btn" data-bs-toggle="modal" href="">Login</button></Link>

                  <div className="dropdown-content p-3">
                    <div className='login-item'> <Link data-bs-toggle="modal" className='p-0' to={"#exampleModalToggle"}><div className='row'> <div className='col-12'>New user ? </div> </div></Link></div>
                    <div className='login-item'> 
                     <Link className='p-0' to={"/Login"}><div className='row'><div className='col-2'><img style={{ width: '99%' }} src="/img/54.png" alt="icon"/></div> <div className='col-10'>Login </div> </div></Link></div>
                    <div className='login-item'> <Link className='p-0' to={"/"}><div className='row'><div className='col-2'><img style={{ width: '99%' }} src="/img/50.png" alt="icon"/></div> <div className='col-10'>Flipkart Plus Zone </div> </div></Link></div>
                    <div className='login-item'> <Link className='p-0' to={"/"}><div className='row'><div className='col-2'><img style={{ width: '99%' }} src="/img/51.png" alt="icon"/></div> <div className='col-10'>Order </div> </div></Link></div>
                    <div className='login-item'> <Link className='p-0' to={"/"}><div className='row'><div className='col-2'><img style={{ width: '99%' }} src="/img/53.png" alt="icon"/></div> <div className='col-10'>Wishlist </div> </div></Link></div>
                    <div className='login-item'> <Link className='p-0' to={"/"}><div className='row'><div className='col-2'><img style={{ width: '99%' }} src="/img/51.png" alt="icon"/></div> <div className='col-10'>Rewards </div> </div></Link></div>
                    <div className='login-item'> <Link className='p-0' to={"/"}><div className='row'><div className='col-2'><img style={{ width: '99%' }} src="/img/49.png" alt="icon"/></div> <div className='col-10'>Gift cards  </div> </div></Link></div>
                  </div>
                </div>
              </div>
              <div className='pt-2' style={{ width: '25%' }}> <Link to='/' className='link-tag'> <h5 className='text-white'> Become a Seller</h5> </Link></div>
              <div className='pt-2' style={{ width: '10%' }}> <Link to='/' className='link-tag'><h5 className='text-white'> More</h5> </Link></div>
              <div className='pt-2' style={{ width: '25%' }}>
                <Link to='/cart' className='link-tag d-flex'>
                  <i class="bi bi-cart-check-fill"></i><sup className='cart-item' style={{ background: "red", borderRadius: "25px", padding: "5px" }}>{productscount.length}</sup>
                  <h5 className='text-white'> Cart </h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className="d-block d-sm-block d-md-block d-lg-none d-xl-none bg-primary" >
        <div class="row pt-3 ">
          <div class="col-1">
            <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
              <i class="bi bi-list" style={{ color: 'white' }}></i>
            </a>
          </div>
          <div class="col-6 px-4"> <img width="75" src="/img/logo.png" alt="Flipkart" title="Flipkart" /><br />
            <i style={{ fontSize: 'small', color: 'white' }} >Explore Plus <sup><img width={10} src="/img/sub-logo.png" alt="Flipkart" title="Flipkart" /></sup></i></div>
          <div class="col-3 p-0 "><a className="" href="/" style={{ color: 'white', textDecoration: 'none' }}><i class="bi bi-cart-fill"></i> Cart  <sup style={{ backgroundColor: 'red', color: 'white', borderRadius: '15px', borderColor: 'white' }}>41</sup> </a></div>
          <div class="col-2 p-0 "><a className="Login-btn-btn" href="/" style={{ color: 'white', textDecoration: 'none' }} >Login </a> </div>
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
      </nav>
      <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Hide this modal and show the first with the button below.
            </div>
            <div class="modal-footer">
              <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}