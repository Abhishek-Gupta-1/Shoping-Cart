import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  return props.productList.map((product, i) => {
    return props.productList.length > 0 ? (
      <Product
        product={product}
        key={i}
        incrementQuantity={props.incrementQuantity}
        decrementQuantity={props.decrementQuantity}
        removeItem={props.removeItem}
        index={i}
      />
    ) : (
      <h1>No Products Existes in the Carts</h1>
    );
  });
}
