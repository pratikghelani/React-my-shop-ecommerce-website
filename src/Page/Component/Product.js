import React from 'react'
import { Link } from "react-router-dom";

export default function Product(props) {
    return (
        <>
            <div className="card  mt-3 " style={{border: 'none'}}>
                {/* <a href="" style={{textDecoration: 'none'}}> */}
                <Link to={"/product/"+ props.id}  style={{textDecoration: 'none'}}>
                <div className="text-center">
                        <img style={{ height: 300, padding: 20 }} src={props.img} class="card-img-top" alt="product_img"/>
                        <div class="card-body">
                            <h5 class="card-title text-dark "> {props.title.substring(1, 16)}...</h5>
                            <h4 class="card-price text-dark ">Rs. {props.price}</h4>
                            <span class="badge text-bg-success"><i class="bi bi-star-fill"></i> {props.rate}</span> <span style={{color: 'black'}}>({props.count})</span><br/>
                            <span class="badge bg-light text-dark">{props.category}</span>
                        </div>
                </div>
                </Link>
            </div>
        </>
    )
}


