import React, { useEffect, useState } from 'react'
import "./Products.css"
import SingleProduct from './SingleProduct';

const Products = ({products,productCategories}) => {
    
    return (
        <React.Fragment>
            {productCategories.map(category => (
            <React.Fragment key={category}>
                <h3 className="text-mod text-color">{category}</h3>
                <div className="product-container" >
                    {products.filter(prod=>prod.category === category).map((product, index)=> (
                       index<4 && <SingleProduct product={product}/>
                    ))}
                </div>
                </React.Fragment>
            ))
            }
        </React.Fragment>
    )
}

export default Products;