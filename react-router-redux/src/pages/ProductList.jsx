import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setProductDetails(json.products));
  }, []);
  return (
    <>
      <h2>Product List</h2>
      <ul>
        {productDetails.map((product) => (
          <li key={product.id}>
            <a href={`/product/${product.category}/${product.id}/${product.title.replace(' ','-')}`}>{product.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
