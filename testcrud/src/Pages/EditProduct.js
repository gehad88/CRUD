import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const [product, setProduct] = useState({});
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const TitleANDPrice = () => {
    setTitle(product.title);
    setPrice(product.price);
  };

  let navigate = useNavigate();
  const { productID } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9000/products/${productID}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .then(() => TitleANDPrice());
  });

  const formSumbit = (ev) => {
    ev.preventDefault();
    axios
      .put(`http://localhost:9000/products/${productID}`, { title, price })
      .then(() => navigate("/products"));
  };
  return (
    <>
      <form onSubmit={formSumbit}>
        <h2 style={{ textAlign: "center" }}>Edit Product</h2>
        <br />
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Titlte
          </label>
          <input
            type="text"
            className="form-control"
            id="productTitle"
            placeholder={product.title}
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
            placeholder={product.price}
            aria-describedby="Product Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Edit Product
        </button>
      </form>
    </>
  );
}
export default EditProduct;
