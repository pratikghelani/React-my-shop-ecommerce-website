import React, { useState } from 'react'
import { Link } from "react-router-dom";
import {  Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'; 

export default function Login() {
  const [signupPage, setSignupPage] = useState(false);
  const [demo, setdemo] = useState("");

  const validationSchema = yup.object({
    username: yup.string().required("UserID is required").matches(/^[a-zA-Z]+$/g, "Invalid UserID"),
    password: yup.string().required("Password is required").matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, "Password must contain at least 8 characters, one uppercase, one number and one special case character")
  })

  const [data, setData] = useState({
    username: '',
    password: ''
  });

  console.log(data, "data");

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
                  <img style={{ position: "absolute", bottom: "10%" }} alt="login-icon" src="/img/login-icon.png" />
                </div>
              </div>
              <div class="col-7 p-5">
                <Formik initialValues={{ firstname: "", lastname: "", email: "", phone: "", username: "", password: "" }}>
                  <Form>
                    <div className='mb-5'>
                      <div className="mb-3">
                        <label className="form-label">Firstname</label>
                        <Field type="text" name="firstname" className="form-control" />

                      </div>
                      <div className="mb-3">
                        <label className="form-label">Lastname</label>
                        <Field type="text" name="lastname" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Username</label>
                        <Field type="text" name="username" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <Field type="email" name="email" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <Field type="phone" name="phone" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <Field type="password" name="password" className="form-control" />
                      </div>
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
                  <img style={{ position: "absolute", bottom: "10%" }} alt="login-icon" src="/img/login-icon.png" />
                </div>
              </div>
              <div class="col-7 p-5">
                <div>
                  <Formik
                    validationSchema={validationSchema}
                    initialValues={{ username: "", password: "" }}
                    onSubmit={(value) => { 
                      // console.log(value);
                        document.getElementById("myForm").reset();
                      }}>

                    <Form id="myForm">
                      <div className="mb-3">
                        <label className="form-label">User name</label>
                        <Field type="username" name="username" className="form-control"   />
                        {/* onChange={(e) => setData({...data, username:e.target.value })} */}
                        <p style={{ color: "red" }}> <ErrorMessage name="username" /> </p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <Field type="password" name="password" className="form-control" />
                        {/* onChange={(e) => setData({...data, password:e.target.value })}  */}
                        <p style={{ color: "red" }}> <ErrorMessage name="password" /> </p>
                      </div>
                      <div className="mb-3 form-check">
                        <Link to="/" className="form-check-label" htmlFor="exampleCheck1">Forgot?</Link>
                      </div>
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
