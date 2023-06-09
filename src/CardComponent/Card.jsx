import React from "react";

const Card=(props)=>{
    return(
        <>
<div className="card h-80  lg:w-72 max-lg:48 bg-base-100 shadow-xl hover:border-2">
  <figure className=" h-1/2">
     <img src={props.data.images[0]} alt="product images"/>
  </figure>
  <div className=" h-1/2 card-body items-center p-1 mb-3">
    <div className="h-2/3 p-2 mb-2">
     <h6 className="card-title text-lg max-sm:text-base">{props.data.title}</h6> 
    <p className="text-sm max-sm:text-[12px]"> {props.data.description}</p>
    <span className="font-semibold">$ {props.data.price}</span>
   </div>
    <div className="card-actions h-1/3 w-full p-2 flex justify-center">
      <button className="w-24 text-xs p-2  bg-indigo-500 text-white font-bold">ADD TO CART</button>
    </div>
  </div>
</div>
        </>
    )
}
export default Card;