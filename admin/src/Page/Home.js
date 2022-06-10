import React from 'react'
import Menu from './Menu';
import {Link} from 'react-router-dom';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AddProuduct from "./AddProduct";
import Productlist from "./ProductList";
import Dashboard from "./Dashboard";
import Orderlist from "./Orderlist";
import Userlist from "./Userlist";
export default function Home() {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-2 bg-primary" style={{height: '100vh'}}>
                    <nav class="sidebar">
                    <ul class="nav flex-column ">
                        <li class="nav-item">
                            <Link class="nav-link text-white" to="/dashboard"> Home </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" to="/add-product"> Add Product </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" to="/product-list"> Product list </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" to="/order-list"> Order list </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" to="/user-list"> User list </Link>
                        </li>
                    </ul>
                    </nav>
                </div>
                <div className="col-10">
                    
                    <Routes>
                         <Route path="/dashboard" element={<Dashboard />}/>
                         <Route path="/add-product" element={<AddProuduct />}/>
                         <Route path="/product-list" element={<Productlist />}/> 
                         <Route path="/order-list" element={<Orderlist />}/>
                         <Route path="/user-list" element={<Userlist />}/>  
                    </Routes>
                </div>
            </div>
        </div>
    </>
  )
}
