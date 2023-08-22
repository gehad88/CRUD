import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import SideBar from "./Component/SideBar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import AddProduct from "./Pages/AddProduct";
import ProductDetails from "./Pages/ProductDetails";
import EditProduct from "./Pages/EditProduct";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="row">
        <div className="col-2 sidebar">
          <SideBar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="products/add" element={<AddProduct />} />
            <Route
              path="products/Edit/:productID"
              element={<EditProduct />}
            ></Route>
            <Route
              path="products/:productID"
              element={<ProductDetails />}
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

/**
<Route path="products">
  <Route index element={<Products />} />
  <Route path="add" element={<AddProduct />} />
  <Route path=":productId" element={<ProductDetails />} />
</Route>; */
