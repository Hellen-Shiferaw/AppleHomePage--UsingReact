import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleAppleProduct() {
  const { productUrl } = useParams(); // Get the id from the route
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("http://localhost:5000/iphones");
        const data = await response.json();
        const selectedProduct = data.products.find(
          (product) => product.product_url.trim() === productUrl.trim()
        );
        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        setError("Error fetching product data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productUrl]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mt-5">
      {product ? (
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.product_img}
              alt={product.product_name}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6">
            <h1>{product.product_name}</h1>
            <p>{product.product_brief_description}</p>
            <p>{product.product_description}</p>
            <h3>Starting Price: {product.starting_price}</h3>
            <h4>Price Range: {product.price_range}</h4>
            <a
              href={product.product_link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Buy Now
            </a>
          </div>
        </div>
      ) : (
        <div>Product not found</div>
      )}
    </div>
  );
}

export default SingleAppleProduct;








