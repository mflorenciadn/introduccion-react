import * as React from "react";
import Card from "../Card";

export default function ProductCard({ product }) {
  const withoutStock = product.stock === 0;

  const handleClick = () => {
    alert("Coming soon..");
  };

  return (
    <Card
      image={product.image}
      title={product.title}
      subtitle={product.description}
      text={product.price}
      buttonLabel="Add to cart"
      buttonOnClick={handleClick}
      buttonDisabled={withoutStock}
    />
  );
}
