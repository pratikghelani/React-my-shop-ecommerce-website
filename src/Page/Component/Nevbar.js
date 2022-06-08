import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from 'axios';
export default function Nevbar() {
  const productscount = useSelector((state) => state.Cartitem);
  const [signupPage, setSignupPage] = useState(false);
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const [Erruser, setErruser] = useState(false);
  const [Errpassword, setErrpassword] = useState(false);
  const [errorFirstname, seterrorFirstname] = useState(false);
  const [errorLastname, seterrorLastname] = useState(false);
  const [errorUsername, seterrorUsername] = useState(false);
  const [errorEmail, seterrorEmail] = useState(false);
  const [errorPhone, seterrorPhone] = useState(false);
  const [errorPassword, seterrorPassword] = useState(false);
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Usernaem, setUsernaem] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const [responsemessage, setresponsemessage] = useState("");
  const [Username,setUsername] = useState("");

  function regHandle(e){
      e.preventDefault();     
      const Formdata = {
          firstname: Firstname,
          lastname: Lastname,
          username: Usernaem,
          email : Email,
          phone: Phone,
          password :Password
      }

      // axios.post('http://localhost:8000/signup', {
      //   firstname: Firstname,
      //   lastname: Lastname,
      //   username: Usernaem,
      //   email : Email,
      //   phone: Phone,
      //   password :Password
      // })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });

      // console.log(Formdata);
      axios({
        method  : 'post',
        url : 'http://localhost:8000/signup',
        data : Formdata,
      })
      .then((res)=>{
        console.log(res);
      })
      
      // axios({
      //     method: 'POST',
      //     url: 'http://localhost:8000/signup',
      //     data: Formdata
      // })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //     console.log(error);
      // });
  }

  const FirsttnameHandle = (e)=> { let  Firstname = e.target.value; if(Firstname.length <= 0) { seterrorFirstname(true); } else{ seterrorFirstname(false);  }  setFirstname(Firstname); }
  const lastnameHandle = (e)=> { let  Lasttname = e.target.value; if(Lasttname.length <= 0) { seterrorLastname(true); } else{ seterrorLastname(false);  }  setLastname(Lasttname); }
  const usernaemHandle = (e)=> { let  Username = e.target.value; if(Username.length <= 0) { seterrorUsername(true); } else{ seterrorUsername(false);  }  setUsernaem(Username); }
  const userEmail = (e)=> { let  Email = e.target.value;  if(Email.length <= 0)  { seterrorEmail(true);  } else{ seterrorEmail(false); } setEmail(Email); }
  const phoneHandler = (e)=> {  let  Phone = e.target.value;  if(Phone.length <= 0)  {  seterrorPhone(true);  } else{  seterrorPhone(false); } setPhone(Phone); }
  const PasswordHandler = (e)=> {  let  Password = e.target.value;  if(Password.length <= 0)  {  seterrorPassword(true);  } else{  seterrorPassword(false); } setPassword(Password); }
  
  function loginHandle(e){
      e.preventDefault();
      if(user <= 0){setErruser(true);}
      if(password <= 0){ setErrpassword(true);}
      if(user && password){

        axios.post('http://localhost:8000/login', {
          username: user,
          password: password
        })
        .then(function (response) {
          const loginData = response.data;
          const loginstatuscode = response.status;
          if(loginstatuscode == 200){
            alert(loginstatuscode); 
            setUsername(response.data)
            console.log(response.data.user.firstname)
          }
          else{
            setresponsemessage("Invalid Username or Password");
          }
        })
        .catch(function (error) {
          setresponsemessage("Invalid Username or Password.");
          console.log(error.data);
        });
      }
    }

   const userHandler = (e)=>
    {
      let  user = e.target.value;
        if(user.length <= 0)
        {
          setErruser(true);
        }
        else{
          setErruser(false);
        }
        setuser(user);
    }

    const passwordHandler = (e)=>
    {
      let  password = e.target.value;
        if(password.length <= 0)
        {
          setErrpassword(true);
        }
        else{
          setErrpassword(false);
        }
        setpassword(password);
    }

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
                  <button class="btn btn-light login-btn" data-bs-toggle="modal" href="#exampleModalToggle">Login</button>
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

      {signupPage ?
        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="row ">
                <div class="col-5 p-5" style={{ backgroundColor: "#2874f0", color: "white" }}>
                  <div>
                    <h3>Looks like you're new here!{signupPage}</h3>
                    <h5>Sign up with your mobile number to get started</h5>
                  </div>
                  <div>
                    <img style={{ position: "absolute", bottom: "10%" }} alt="login-icon" src="/img/login-icon.png" />
                  </div>
                </div>

                <div class="col-7 p-5">
                  <form action="" onSubmit={regHandle}>
                    <div>
                      <div className='mb-5'>
                        <div className="mb-3">
                          <label htmlFor="exampleInputPhone1" className="form-label">Firstname</label>
                          <input type="text" className="form-control" onChange={FirsttnameHandle}/>
                          { errorFirstname ? <span style={{color: "red"}}> This field is required </span>:<span></span>}
                        </div>
                        <div className="mb-3">
                          <label htmlFor="exampleInputPhone1" className="form-label">Lastname</label>
                          <input type="text" className="form-control" onChange={lastnameHandle}/>
                          { errorLastname ? <span style={{color: "red"}}> This field is required </span>:<span></span>}
                        </div>
                        <div className="mb-3">
                          <label htmlFor="exampleInputPhone1" className="form-label">Username</label>
                          <input type="text" className="form-control" onChange={usernaemHandle}/>
                          { errorUsername ? <span style={{color: "red"}}> This field is required </span>:<span></span>}
                        </div>

                        <div className="mb-3">
                          <label htmlFor="exampleInputPhone1" className="form-label">Email</label>
                          <input type="email" className="form-control" onChange={userEmail}/>
                          { errorEmail ? <span style={{color: "red"}}> This field is required </span>:<span></span>}
                        </div>
                        <div className="mb-3">
                          <label htmlFor="exampleInputPhone1" className="form-label">Phone</label>
                          <input type="phone" className="form-control" onChange={phoneHandler}/>
                          { errorPhone ? <span style={{color: "red"}}> This field is required </span>:<span></span>}
                        </div>
                        <div className="mb-3">
                          <label htmlFor="exampleInputPhone1" className="form-label">Password</label>
                          <input type="password" className="form-control" onChange={PasswordHandler}/>
                          { errorPassword ? <span style={{color: "red"}}> This field is required </span>:<span></span>}
                        </div>
                        
                        <button type="submit" className="btn btn-primary mt-5 mb-5" style={{ width: "100%", backgroundColor: "orangered", border: "0px", padding: "17px" }}><h5>CONTINUE</h5></button>
                        {/* <button type="submit" className="btn btn-primary mb-5" style={{ boxShadow: "0 6px 6px 2 rgb(0 0 0 / 20%)", width: "100%", backgroundColor: "#f3f3f3", color: "#2874f0", border: "0px", padding: "17px" }}><h5>Request OTP</h5></button>  */}
                        <button onClick={() => setSignupPage(false)} type="submit" className="btn btn-primary mb-5" style={{ boxShadow: "0 6px 6px 2 rgb(0 0 0 / 20%)", width: "100%", backgroundColor: "#f3f3f3", color: "#2874f0", border: "0px", padding: "17px" }}><h5>Existing User? Log in</h5></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> :

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
                    <img style={{ position: "absolute", bottom: "10%" }} alt="login-icon" src="/img/login-icon.png" />
                  </div>
                </div>
                
                <div class="col-7 p-5">
                  <div>
                  <form action="" onSubmit={loginHandle}> 
                    <div className='mb-5'>
                      <div className="mb-3">
                        <label htmlFor="exampleInputuser1" className="form-label">user </label>
                        <input type="user" onChange={userHandler} className="form-control" id="exampleInputuser1" />
                         { Erruser ? <span style={{color: "red"}}>user is required </span>:<span></span>}
                      </div> 
                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" onChange={passwordHandler} className="form-control" id="exampleInputPassword1" />
                         { Errpassword ? <span style={{color: "red"}}>Password is required </span>:<span></span>}
                      </div>
                      <div><h5 style={{"color":"red"}}>{responsemessage}</h5></div>
                      <div className="mb-3 form-check">
                        <Link to="/" className="form-check-label" htmlFor="exampleCheck1">Forgot password?</Link>
                      </div>
                    
                      <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                      <button type="submit" className="btn btn-primary" style={{ width: "100%", backgroundColor: "orangered", border: "0px", padding: "17px" }}><h5>Login</h5></button>
                      <div className='mt-2 mb-2' style={{ textAlign: "center" }}><h3 >OR</h3></div>
                      <button type="submit" className="btn btn-primary" style={{ boxShadow: "0 6px 6px 2 rgb(0 0 0 / 20%)", width: "100%", backgroundColor: "#f3f3f3", color: "#2874f0", border: "0px", padding: "17px" }}><h5>Request OTP</h5></button>
                    </div>
                    <div className="mt-5">
                      <div className='mt-2 ' style={{ textAlign: "center" }}><Link to="/" onClick={() => setSignupPage(true)} ><h6>New to Flipkart? Create an account</h6></Link></div>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

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
