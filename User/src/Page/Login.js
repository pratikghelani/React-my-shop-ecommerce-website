import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {  Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as yup from 'yup'; 
export default function Login() {
  let navigate = useNavigate();
  const [signupPage, setSignupPage] = useState(false);
  const [message, setmessage] = useState("");
  const loginvalidationSchema = yup.object({
    username: yup.string().required("User ID is required").matches(/^[a-z0-9_.]+$/, "Invalid UserID"),
    password: yup.string().required("Password is required")
  })

  const validationSchema = yup.object({
    firstname:yup.string().required("First Name is required").matches("^[a-zA-Z_ ]*$","Invalid First Name(only characters are allowed )"),
    lastname:yup.string().required("Last Name is required").matches("^[a-zA-Z_ ]*$","Invalid Last Name(only characters are allowed )"),
    email:yup.string().required("Email is required").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Invalid Email"),
    phone:yup.string().required("Phone is required").matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,"Invalid Phone"),
    username: yup.string().required("User ID is required").matches(/^[a-z0-9_.]+$/, "Invalid UserID"),
    password: yup.string().required("Password is required").matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, "Password must contain at least 8 characters, one uppercase, one number and one special case character"),
    conformpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("Conform password is required").matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, "Password must contain at least 8 characters, one uppercase, one number and one special case character")
  })

  return (
    <>
      {signupPage ?
        <div class="modal-dialog modal-dialog-centered modal-lg" style={{ "marginTop": "7%", "marginBottom": "5%" }}>
          <div class="modal-content">
            <div class="row ">
              <div class="col-5 p-5" style={{ backgroundColor: "#2874f0", color: "white" }}>
                <div>
                  <h3>Looks like you're new here!{signupPage}</h3>
                  <h5>Sign up with your mobile number to get started</h5>
                </div>
                <div>
                  {/* <img style={{ position: "absolute", bottom: "10%" }} alt="login-icon" src="/img/login-icon.png" /> */}
                </div>
              </div>
              <div class="col-7 p-5">
                 <Formik validationSchema={validationSchema} initialValues={{ firstname: "", lastname: "", email: "", phone: "", username: "", password: "" ,conformpassword:""}}
                    onSubmit={(value) => { 
                   
                    axios.post('http://localhost:8000/signup', {
                        firstname: value.firstname,
                        lastname: value.lastname,
                        username: value.username,
                        email: value.email,
                        phone: value.phone,
                        password: value.password
                    })
                    .then(function (response) {
                      setmessage("");
                      setSignupPage(false)
                      document.getElementById("reg-form").reset(); 
                    })
                    .catch(function (error) {
                      setmessage("Username or email already exists.");
                      console.log(error);
                    });
                      // document.getElementById("reg-form").reset(); 
                    }}>

                  <Form id='reg-form'>
                    <div>
                      <div className="mb-3">
                        <label className="form-label">Firstname</label>
                        <Field type="text" name="firstname" className="form-control"/>
                        <p style={{ color: "red" }}> <ErrorMessage name="firstname"/> </p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Lastname</label>
                        <Field type="text" name="lastname" className="form-control"/>
                        <p style={{ color: "red" }}> <ErrorMessage name="lastname"/> </p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Username</label>
                        <Field type="text" name="username" className="form-control"/>
                        <p style={{ color: "red" }}> <ErrorMessage name="username"/> </p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <Field type="email" name="email" className="form-control"/>
                        <p style={{ color: "red" }}> <ErrorMessage name="email"/> </p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <Field type="phone" name="phone" className="form-control"/>
                        <p style={{ color: "red" }}> <ErrorMessage name="phone"/> </p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <Field type="password" name="password" className="form-control"/>
                        <p style={{ color: "red" }}> <ErrorMessage name="password"/> </p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Conform password</label>
                        <Field type="password" name="conformpassword" className="form-control" />
                        <p style={{ color: "red" }}> <ErrorMessage name="conformpassword"/> </p>
                      </div>
                      <p style={{ color: "red" }}>{message}</p>
                      <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                      <button type="submit" className="btn btn-primary mt-1 mb-5" style={{ width: "100%", backgroundColor: "orangered", border: "0px", padding: "17px" }}><h5>CONTINUE</h5></button>
                      {/* <button type="submit" className="btn btn-primary mb-5" style={{ boxShadow: "0 6px 6px 2 rgb(0 0 0 / 20%)", width: "100%", backgroundColor: "#f3f3f3", color: "#2874f0", border: "0px", padding: "17px" }}><h5>Request OTP</h5></button>  */}
                      <button onClick={() => setSignupPage(false)} type="submit" className="btn btn-primary" style={{ boxShadow: "0 6px 6px 2 rgb(0 0 0 / 20%)", width: "100%", backgroundColor: "#f3f3f3", color: "#2874f0", border: "0px", padding: "17px" }}><h5>Existing User? Log in</h5></button>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
        :
        <div class="modal-dialog modal-dialog-centered modal-lg" style={{ "marginTop": "7%", "marginBottom": "6%" }}>
          <div class="modal-content">
            <div class="row ">
              <div class="col-5 p-5" style={{ backgroundColor: "#2874f0", color: "white" }}>
                <div>
                  <h3>Login</h3>
                  <h5>Get access to your Orders, Wishlist and Recommendations</h5>
                </div>
                <div>
                  {/* <img style={{ position: "absolute", bottom: "10%" }} alt="login-icon" src="/img/login-icon.png" /> */}
                </div>
              </div>
              <div class="col-7 p-5">
                <div>
                  <Formik
                    validationSchema={loginvalidationSchema}
                    initialValues={{ username: "", password: "" }}
                    onSubmit={(value) => { 
                        axios.post('http://localhost:8000/login', {
                            username: value.username,
                            password: value.password
                          })
                          .then(function (response) {
                              console.log("Login");
                              // <Navigate to="/" replace={true} />
                              navigate("/", { replace: true });
                          })
                          .catch(function (error) {
                            setmessage("Invalid username or password");
                            console.log(error);
                          });
                        }}
                      >
                    <Form id="login-form">
                      <div className="mb-3">
                        <label className="form-label">User name</label>
                        <Field type="username" name="username" className="form-control"/>
                        <p style={{ color: "red" }}> <ErrorMessage name="username" /> </p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <Field type="password" name="password" className="form-control"/>
                        <p style={{ color: "red" }}> <ErrorMessage name="password"/> </p>
                      </div>
                      {/* <div className="mb-3 form-check">
                        <Link to="/" className="form-check-label" htmlFor="exampleCheck1">Forgot?</Link>
                      </div> */}
                      <p style={{ color: "red", textAlign: "center" }}>{message}</p>
                      <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                      <button type="submit" className="btn btn-primary" style={{ width: "100%", backgroundColor: "orangered", border: "0px", padding: "17px" }}><h5>Login</h5></button>
                      <div className='mt-2 mb-2' style={{ textAlign: "center" }}><h3 >OR</h3></div>
                      <button type="submit" className="btn btn-primary" style={{ boxShadow: "0 6px 6px 2 rgb(0 0 0 / 20%)", width: "100%", backgroundColor: "#f3f3f3", color: "#2874f0", border: "0px", padding: "17px" }}><h5>Request OTP</h5></button>
                    </Form>
                  </Formik>
                  <div className="mt-5">
                    <div className='mt-2 mb-2' style={{ textAlign: "center" }}><Link to="#" onClick={() => setSignupPage(true)} ><h6>New to Flipkart? Create an account</h6></Link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}
