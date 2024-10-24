
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Iphone() {
  const [iphones, setiphones] = useState([]);

  useEffect(() => {
    const fetchproductss = async () => {
      try {
        const response = await fetch("http://localhost:5000/iphones");
        const data = await response.json();
        setiphones(data.products); // Access the 'products' key
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchproductss();
  }, []);

  return (
    <div className="container mt-5 mb-5">
      {console.log(iphones)}
      {Array.isArray(iphones) &&
        iphones.map((products) => (
          <div key={products.product_id} className="row mb-4">
            <div className="col-md-6 order-md-1">
              <div className="card h-100">
                <div className="card-body d-flex flex-column justify-content-center">
                  <h5 className="h1 text-center">{products.product_name}</h5>
                  <p className="card-text text-center">
                    {products.product_description} <br />
                    Starting Price: {products.starting_price}
                    <br />
                    Price Range: {products.price_range}
                    <br />
                  </p>
                  <div className="text-center card-footer bg-transparent border-top-0">
                    <Link
                      to={`/iphones/${products.product_url}`}
                      className="w-100"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-md-2 d-none d-md-block">
              <img
                src={products.product_img}
                alt={products.product_name}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
    </div>
  );
}

export default Iphone;
