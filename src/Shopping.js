import React from "react";
import Product from "./Product";

export default function Shopping(props) {
  const { products, onAdd } = props;
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} onAdd={onAdd}></Product>
      ))}
    </div>
  );
}
