import React from 'react';
import {  Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as yup from 'yup'; 
import { Link } from 'react-router-dom';
const Login = () => {
    const loginvalidationSchema = yup.object({
        username: yup.string().required("User ID is required"),
        password: yup.string().required("Password is required")
      })
    return (
        <>
            <div>
                <div classname="row" style={{ backgroundColor: 'white', margin: '10% 35% 10% 35%' }}>
                    <div classname="p-5" style={{padding: '10%'}}>
                        <div className="text-center ">
                            <h3>Admin Login </h3>
                        </div>
                        <Formik
                            validationSchema={loginvalidationSchema}
                            initialValues={{ username: "", password: "" }}
                            onSubmit={(value) => { 
                                alert(value);
                                  axios.post('http://localhost:8000/login', {
                                    username: value.username,
                                    password: value.password
                                  })
                                  .then(function (response) {
                                      console.log("Login");
                                  })
                                  .catch(function (error) {
                                    console.log(error);
                                  });
                                    console.log("End submit");
                            }}
                        >
                    <Form id="login-form">
                        <div>
                            <label for="inputPassword5" class="form-label">User ID</label>
                            <Field type="text" name='username' class="form-control" />
                            <div class="form-text"> <p style={{ color: "red" }}> <ErrorMessage name="username" /> </p></div>
                            <label for="inputPassword5" class="form-label">Password</label>
                            <Field type="text" name='password' class="form-control" />
                            <div class="form-text"> <p style={{ color: "red" }}> <ErrorMessage name="password" /> </p></div>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary mt-3" type="submit">Login</button>
                            </div>
                        </div>
                    </Form>
                  </Formik>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;
