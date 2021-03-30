import React,{useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ProductContext from "../Context/productContext";
const Navbar=()=>{
    const [searchedPrd,setSearchedPrd]=useState('')
const productContext=useContext(ProductContext)
// const handleSearch=(e)=>{
//     setSearchedPrd(e.target.value);
//     console.log("ENTRIES",searchedPrd)
//     productContext.searchProd(searchedPrd)
//     console.log("search called")
// }
return(
<div className="container">
<div className="first-nav-item nav-item"><input type="search" placeholder="Search for the products" className="search" onChange={(e)=>productContext.searchProd(e.target.value)}/></div>
<div className="nav-item"><Link to="/" style={{textDecoration:"none",color:"white"}}>Products</Link></div>
<div className="nav-item"><Link to="/cart" style={{textDecoration:"none",color:"white"}}>Cart</Link></div>
</div>
)
}
export default Navbar;