import React from 'react'
export default function Product(props) {
    return (
        <>
            <div class="card  mt-3">
                {/* <a href="" style={{textDecoration: 'none'}}> */}
                <a href="s"  style={{textDecoration: 'none'}}>
                <div className="text-center">
                        <img style={{ height: 320, padding: 20 }} src={props.img} class="card-img-top" alt="product_img"/>
                        <div class="card-body">
                            <h5 class="card-title text-dark "> {props.title.substring(1, 15)}...</h5>
                            <h4 class="card-price text-dark ">Rs. {props.price}</h4>
                            <span class="badge bg-light text-dark">{props.category}</span>
                        </div>
                </div>
                </a>
            </div>
        </>
    )
}
