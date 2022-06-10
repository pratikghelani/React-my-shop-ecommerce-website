import React from 'react'
// import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./Page/Home"
// import { store } from './store/index'
// import { Provider } from 'react-redux'
import Login from "./Page/Login"
import AddProuduct from "./Page/AddProduct"
import Productlist from "./Page/ProductList"
export default function App() {
  return (
    <>
     {/* <Provider store={store}> */}
        <Home/>
      {/* </Provider> */}
    </>
  )
}
