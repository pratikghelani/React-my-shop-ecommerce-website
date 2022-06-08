import React from 'react'
import { Link } from "react-router-dom";
import {useDispatch } from 'react-redux'
import {add} from '../../store/Cartslice'
export default function Product(props) {
    const dispatch = useDispatch();
    const handelAdd = (product)  => {
        dispatch(add(product));
    }
    return (
        <>
            <div className="card  mt-3 " style={{border: 'none'}}>
                <Link to={"/product/"+ props.id}  style={{textDecoration: 'none'}}>
                    <div className="text-center">
                        <span className="badge bg-primary" style={{"position":"absolute","top":"2px","right":"0px","fontSize":"smaller"}}>{props.category.toUpperCase()}</span>
                        <img style={{ height: 300, padding: 20 }} src={props.img} className="card-img-top" alt="product_img"/>
                        <div className="card-body">
                            <h5 className="card-title text-dark "> {props.title.substring(1, 16)}...</h5>
                            <h4 className="card-price text-dark ">Rs. {props.price}</h4>
                            <Link to={'#'}  style={{textDecoration: 'none'}}>
                            <button   onClick={() => dispatch(add(props.data))}  style={{width: '100%', height: '100%',backgroundColor: 'orangered', borderColor:'white'}} type="button" className="btn btn-primary  btn-lg" >
                                <span>Add to Cart</span>
                            </button> 
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}