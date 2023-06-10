import { useState } from "react";
import Navbar from "./NavbarComponent/Navbar";
import Product from "./ProductComponent/Product";
import Cart from "./CartComponent/Cart";

function App() {
  const [cartData, setCartData] = useState([]);


  return (
    <>
      <Navbar />
      <div className=" flex flex-row">
        <Product sendData={setCartData} oldData={cartData} /> //way to send props
        <Cart cartItems={cartData} />
      </div>
    </>
  );
}

export default App;
