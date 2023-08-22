import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Products.css";
import Swal from "sweetalert2";

function Products() {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getProducts();
  }, []); // Add an empty dependency array to run the effect only once

  const deleteProduct = (product) => {
    Swal.fire({
      title: `Are You Sure To Delete ${product.title} ?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`http://localhost:9000/products/${product.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => getProducts());
      }
    });
  };
  return (
    <>
      <h1>Products Page</h1>
      <Link to={"/products/add"} className="btn btn-success mt-5">
        Add New Product
      </Link>

      <table className="table table-striped mt-5 products-table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.title.slice(0, 30)}..</td>
                <td>{product.price}</td>
                <td>
                  <button
                    onClick={() => deleteProduct(product)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-info btn-sm"
                  >
                    View
                  </Link>
                  <Link
                    to={`/Products/Edit/${product.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Products;
