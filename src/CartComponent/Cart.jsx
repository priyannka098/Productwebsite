import React,{useState} from "react";

import "./Cart.css";
  

const Cart=(props)=>{
    const[cart,setCart]=useState([])
    return(
        <>
        <div className="Cartdiv">
            <div className="p-5">
        <div className="flex flex-row">
        <img src="Images/cart-images1.png " alt="shopping-cart" className="h-[60px]"/>
        {/* {JSON.stringify(props.cartItems)} */}
       <span className="font-semibold rounded-full flex items-center justify-center bg-rose-500  w-5 h-5">{props.cartItems.length} </span>
        </div>
    
       <p className="font-semibold pt-4"> Order Summary</p>
    </div>
    {props.cartItems.map(singledata=>(<div className="border-2 h-12 w-full">
        <img src={singledata.images[0]}/>
        <span> ${singledata.price}</span>
        <span>{singledata.title}</span>
    <div className="flex flex-col">
    <div className="">
        <button className="">Remove</button>
    </div>
    
     <div className=" flex flex-row">
            <button className="btn btn-xs btn-neutral">+</button>
            <span className="">1</span>
            <button className="btn btn-xs btn-neutral">-</button>
            </div>
    
        </div>
        </div>))}

        </div>
    
        </>

    );
}
export default Cart;