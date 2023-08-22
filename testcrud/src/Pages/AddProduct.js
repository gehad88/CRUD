import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  let navigate = useNavigate();

  const formSumbit = (ev) => {
    ev.preventDefault();
    axios
      .post("http://localhost:9000/products", { title, price })
      .then((data) => navigate("/products"));
  };
  return (
    <>
      <form onSubmit={formSumbit}>
        <h2 style={{ textAlign: "center" }}>Add Product</h2>
        <br />
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Titlte
          </label>
          <input
            type="text"
            className="form-control"
            id="productTitle"
            placeholder="Product Title"
            aria-describedby="Product title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ProductPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="ProductPrice"
            placeholder="Product Price"
            aria-describedby="Product Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}
export default AddProduct;
