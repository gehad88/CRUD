import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const { productID } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:9000/products/${productID}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  });

  return (
    <>
      <form>
        <h2 style={{ textAlign: "center" }}> Product Details</h2>
        <br />
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Titlte
          </label>
          <input
            disabled={true}
            type="text"
            className="form-control"
            id="productTitle"
            placeholder={product.title}
            aria-describedby="Product title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="ProductPrice" className="form-label">
            Description
          </label>
          <textarea
            disabled={true}
            type="number"
            className="form-control"
            id="ProductPrice"
            placeholder={product.description}
            aria-describedby="Product Price"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ProductPrice" className="form-label">
            Price
          </label>
          <input
            disabled={true}
            type="number"
            className="form-control"
            id="ProductPrice"
            placeholder={product.price}
            aria-describedby="Product Price"
          />
        </div>
        <button
          onClick={() => navigate("/products")}
          type="submit"
          className="btn btn-primary"
        >
          Back
        </button>
      </form>
    </>
  );
}

export default ProductDetails;
