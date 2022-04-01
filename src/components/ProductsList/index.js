import React from "react";
import ProductCard from "../ProductCard";
import "./ProductsList.css";

const ProductsList = ({ products }) => (
  <div className="ProductsList-Container">
    <h2 className="ProductsList-Title">Find all you need here</h2>
    <div className="ProductsList-Grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ProductsList;
