import './App.css';
import Home from './Page/Home';
import Productdetails from './Page/Productdetails';
import  Navbar from './Page/Component/Nevbar';
import Footer from './Page/Component/Footer';
import Cart from './Page/Cart';
import Login from './Page//Login';
import { Routes,Route} from "react-router-dom";
import { store } from './store/index'
import { Provider } from 'react-redux'
import React, { Component} from 'react';
import Adminlogin from './Page/Admin/login';
import { render }  from 'react-dom';

function App() {
  return (
    <> 
      <Provider store={store}>
        <Navbar/>
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="product/:id" element={<Productdetails />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="Login" element={<Login />} />
            <Route path="Admin-login" element={<Adminlogin />} />
          </Routes>
        <Footer/>
      </Provider>
    </>
  );
}
export default App;
