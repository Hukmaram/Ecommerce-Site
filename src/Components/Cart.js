import React,{useContext} from 'react';
import {Link} from "react-router-dom"
import "./Cart.css"
import ProductContext from "../Context/productContext"

const Cart=({items})=> {
    let amount=0;
    items.forEach(item=>{
        amount=parseFloat(amount)+parseFloat(item.price);
    });
    const productContext=useContext(ProductContext)
   
    return (
        <React.Fragment>
            { items.length>0 ?
        <div className="cart-container">
        {items.map(item=>(
            <div className="cart-left-container">
            <img src={item.image} width="100px" height="100px" />
            <div className="cart-left">
               <div className="collectiontitle">{item.title}</div>
               <p style={{color:"#28a745"}}>From ${item.price}</p>
               <button className="large-btn" onClick={()=>productContext.removeItem(item)}>
                REMOVE</button>
                </div>
            </div>
         ))}
    {/*  */}
    <div className="cart-right-container">
   <div>Grand Total: ${amount}</div>
   <button className="large-btn" onClick={()=>productContext.buyNow()}>PLACE ORDER</button>
   </div>
    </div>:<h1 style={{color:"red", textAlign:"center"}}>Cart is empty</h1>}</React.Fragment>)
}

export default Cart
