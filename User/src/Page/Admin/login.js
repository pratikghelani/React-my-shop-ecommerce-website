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

  return (
    <>
        <div class="modal-dialog modal-dialog-centered modal-lg" style={{ "marginTop": "10%", "marginBottom": "6%" }}>
          <div class="modal-content">
            <div class="row ">
              <div class="col-12 p-5">
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
                            // navigate("/", { replace: true });
                            alert("Demo");
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
                        <Field type="username" name="username" className="form-control "/>
                        <p style={{ color: "red" }}> <ErrorMessage name="username" /> </p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <Field type="password" name="password" className="form-control "/>
                        <p style={{ color: "red" }}> <ErrorMessage name="password"/> </p>
                      </div>
                      <p style={{ color: "red", textAlign: "center" }}>{message}</p>
                      <button type="submit" className="btn btn-primary mt-3" style={{ width: "100%", backgroundColor: "orangered", border: "0px", padding: "17px" }}><h5>Login</h5></button>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}


