import React, { useState,useEffect } from "react"
import './App.css';
import Navbar from './Components/Navbar';
import Products from "./Components/Products"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import ProductContext from "./Context/productContext";
import Cart from "./Components/Cart"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

function App() {

   //fetch data from API and store them in state
   const [products, setProducts] = useState([]);
    const [productCategories, setProductCategories]=useState([])
    console.log(productCategories)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => (
                setProducts(json)
                
    ))
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setProductCategories(json))
            // setProductCategories([...new Set(products.map(product => product.category))])
    }, [])

// cart items
  const [cartItems,setCartItems]=useState([])
  const [singleProduct,setSingleProduct]=useState({})
  const addToCart=(item)=>{
    const isAlreadyItemAdded=cartItems.findIndex(myItem=>(myItem.id===item.id))
    if(isAlreadyItemAdded!==-1){
      toast("Item already in Cart",{type:"error"});
    }
    else
    {
      setCartItems([...cartItems,item])
      toast("Item added in cart",{type:"success"});
    }
  }

  //display details
  const displayPorductDetails=(product)=>{
    setSingleProduct(product)
  }


  //buy now function
  const buyNow=()=>{
    setCartItems([]);
    toast("Order placed",{type:"success"});
  }

  //remove item from CART
  const removeItem=(item)=>{
     setCartItems(cartItems.filter(singleItem=>singleItem.id!==item.id));
  }

  //search bar
   const searchProd=(searchPrd)=>{
      setProductCategories(productCategories.filter(val=>{
        if(searchPrd===""){
          return val;
        }
        else if(val.toLowerCase().includes(searchPrd)){
          return val;
        }
      }))
   }
  return (
    <Router>
      <ToastContainer />
      <ProductContext.Provider value={{
        addToCart,
        displayPorductDetails,
        buyNow,
        removeItem,
         searchProd
        }}>
      <Navbar />
      <Switch>
        <Route exact path="/">
        <Products products={products} productCategories={productCategories}/>
        </Route>
        <Route exact path="/product-details">
        <ProductDetails product={singleProduct}/>
        </Route>
        <Route exact path="/cart">
        <Cart items={cartItems}/>
        </Route>
      </Switch>
      </ProductContext.Provider>
      </Router>    
  );
}

export default App;
