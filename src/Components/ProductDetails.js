import { specialChars } from '@testing-library/user-event'
import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import "./ProductDetails.css";
import ProductContext from "../Context/productContext";

const ProductDetails=({product})=> {
    const productContext=useContext(ProductContext)
    return (
        <div className="product-details-container">
            <div className="img-container">
            <img src={product.image} width="250px" height="250px" />
            </div>
            <div className="details-container">
                <h5>{product.title}</h5>
                <p style={{color:"#28a745"}}>Special Price</p>
                <h3>${product.price}</h3>
                <p><strong>Description:</strong> {product.description}</p>
                <button className="large-btn" onClick={()=>productContext.addToCart(product)}><Link to="/cart" style={{textDecoration:"none",color:"white"}}>
                ADD TO CART</Link></button>
            </div>
        </div>
    )
}

export default ProductDetails
