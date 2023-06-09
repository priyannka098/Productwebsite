
import React,{useState,useEffect} from "react";
import Card from "../CardComponent/Card";
import "./Product.css";

const Product=()=>{
    const url = "https://dummyjson.com/products";
    const [productArray, setProductArray] = useState([]);

    const fetchInfo = () => { 
         fetch(url) 
            .then(res => res.json()) 
                .then(d => {console.log("data: "+JSON.stringify(d)); setProductArray(d.products);}) 
        };
        
    useEffect(() => {
        fetchInfo();
    }, [])

    return(
        <>
        <div className="productdiv p-4">
                    <div className=" max-sm:grid-cols-2 grid grid-cols-3 gap-4">
                           { 
                           productArray.map(item=> <Card key={item.id} data={item} /> )
                            }
                            
                        
                    </div>
                </div>
        
        
    
        </>
    );
}
export default Product;


