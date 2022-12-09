import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [productDetails, setProductDetails] = useState({});
  const {id}=useParams();
  useEffect(() => {
    fetch("https://dummyjson.com/products/"+id)
      .then((res) => res.json())
      .then((pd) => setProductDetails(pd));
  }, [id]);
  return <div>{JSON.stringify(productDetails)}</div>;
};

export default Product;
