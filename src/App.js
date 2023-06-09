
import Navbar from "./NavbarComponent/Navbar";
import Product from "./ProductComponent/Product";
import Cart from "./CartComponent/Cart";

function App() {
  return (
    <>
      <Navbar />
      <div className=" flex flex-row">
        <Product />
        <Cart />
      </div>
    </>
  );
}

export default App;
