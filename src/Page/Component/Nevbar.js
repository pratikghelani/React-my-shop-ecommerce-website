import React from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
export default function Nevbar() {
  const productscount = useSelector((state) => state.Cart);
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
                  <button class="btn btn-light login-btn"  data-bs-toggle="modal" href="#exampleModalToggle">Login</button>
                  <div className="dropdown-content p-3">
                     <div className='login-item'> <Link data-bs-toggle="modal"  className='p-0' to={"#exampleModalToggle"}><div className='row'> <div className='col-12'>New user ? </div> </div></Link></div>
                    <div className='login-item'>  <Link className='p-0' to={"/"}><div className='row'><div className='col-2'><img style={{ width: '99%' }} src="/img/54.png" alt /></div> <div className='col-10'>Login </div> </div></Link></div>
                    <div className='login-item'> <Link className='p-0' to={"/"}><div className='row'><div className='col-2'><img style={{ width: '99%' }} src="/img/50.png" alt /></div> <div className='col-10'>Flipkart Plus Zone </div> </div></Link></div>
                    <div className='login-item'> <Link className='p-0' to={"/"}><div className='row'><div className='col-2'><img style={{ width: '99%' }} src="/img/51.png" alt /></div> <div className='col-10'>Order </div> </div></Link></div>
                    <div className='login-item'> <Link className='p-0' to={"/"}><div className='row'><div className='col-2'><img style={{ width: '99%' }} src="/img/53.png" alt /></div> <div className='col-10'>Wishlist </div> </div></Link></div>
                    <div className='login-item'> <Link className='p-0' to={"/"}><div className='row'><div className='col-2'><img style={{ width: '99%' }} src="/img/51.png" alt /></div> <div className='col-10'>Rewards </div> </div></Link></div>
                    <div className='login-item'> <Link className='p-0' to={"/"}><div className='row'><div className='col-2'><img style={{ width: '99%' }} src="/img/49.png" alt /></div> <div className='col-10'>Gift cards  </div> </div></Link></div>
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
          <div class="col-2 p-0 "><a className="Login-btn-btn" href="/" style={{ color: 'white', textDecoration: 'none'}} >Login </a> </div>
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
      <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="row ">
              <div class="col-5 p-5" style={{ backgroundColor: "#2874f0", color: "white" }}>
                <div>
                  <h3>Login</h3>
                  <h5>Get access to your Orders, Wishlist and Recommendations</h5>
                </div>
                  <div>
                    <img style={{position: "absolute", bottom: "10%"}} src="/img/login-icon.png"/>
                  </div>
              </div>

              <div class="col-7 p-5">
                <div>
                  <div className='mb-5'>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                      <Link to="/" className="form-check-label" htmlFor="exampleCheck1">Forgot?</Link>
                    </div>
                    <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                    <button type="submit" className="btn btn-primary" style={{ width: "100%", backgroundColor: "orangered", border: "0px", padding: "17px" }}><h5>Login</h5></button>
                    <div className='mt-2 mb-2' style={{ textAlign: "center" }}><h3 >OR</h3></div>
                    <button type="submit" className="btn btn-primary" style={{ boxShadow: "0 6px 6px 2 rgb(0 0 0 / 20%)", width: "100%", backgroundColor: "white", color: "#2874f0", border: "0px", padding: "17px" }}><h5>Request OTP</h5></button>
                  </div>

                  <div className="mt-5">
                    <div className='mt-2 mb-2' style={{ textAlign: "center" }}><Link to="/"><h6>New to Flipkart? Create an account</h6></Link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
