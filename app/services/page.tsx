"use client";
import React, { useEffect, useState } from "react";

interface Product {
  title: string;
  thumbnailUrl: string;
  url: string;
}

const Services = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    setProducts(data.slice(0, 20));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{display: "flex", padding: "20px", marginTop: "5px", flexWrap: "wrap"}}>
      {products.map((product) => (
        <div className="card card-compact w-96 bg-base-100 shadow-xl" style={{padding: "10px"}}>
          <figure>
            <img
              src={product.url}
              alt={product.title}
            />
          </figure>
          <div className="card-normal">
            <h2 className="card-title">{product.title}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
