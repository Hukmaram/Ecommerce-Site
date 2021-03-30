import React, { useContext, useState } from 'react'
import ProductDetails from './ProductDetails'
import { Link } from 'react-router-dom';
import ProductContext from "../Context/productContext"; 

const SingleProduct = ({product}) => {
    // const [isOpen,setIsOpen]=useState(false);
   const productContext=useContext(ProductContext)

    return (
        <div>
            {/* {isOpen && <ProductDetails handleClose={productHandler} product={product}/>} */}
            <div className="item" key={product.id}>
                <img src={product.image} width="200px" height="200px" />
                <div className="collectiontitle">{product.title}</div>
                <p className="text-color">From ${product.price}</p>
                <button className="btn" onClick={()=>productContext.displayPorductDetails(product)}><Link to="/product-details" style={{textDecoration:"none",color:"white"}}>
                    Buy Now</Link></button>
            </div>
        </div>
    )
}

export default SingleProduct
