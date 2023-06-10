import React,{useState} from "react";

import "./Cart.css";
  

const Cart=(props)=>{
    const[cart,setCart]=useState([])
    return(
        <>
        <div className="Cartdiv">
            <div className="p-5">
        <img src="Images/cart-images1.png " alt=" shoppiing-cart" className="h-[60px] "/>
        {/* <img src="Images/shopping-cart.png " alt=" shoppiing-cart"/> */}
        {JSON.stringify(props.cartItems)}
    
        
        <p className="font-semibold pt-4"> Order Summary</p>
    
</div>
        

        </div>
    
        </>

    );
}
export default Cart;