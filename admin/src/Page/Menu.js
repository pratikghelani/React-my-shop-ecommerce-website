import React from 'react'
import {Link} from 'react-router-dom';
export default function Menu() {
  return (
    <>
        <nav className="sidebar bg-primary">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/Home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/add-product">Add product</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/product-list"> Product List </Link>
                </li>
            </ul>
        </nav>
    </>
  )
}
